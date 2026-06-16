import { isSupabaseConfigured, supabase } from "./supabaseClient.js";

const ARRAY_TABLES = {
  "itAssetManager.assets": "assets",
  "itAssetManager.stockItems": "stock_items",
  "itAssetManager.maintenanceRecords": "maintenance",
  "itAssetManager.issueHistory": "issue_history",
  "itAssetManager.suppliers": "suppliers",
  "itAssetManager.auditLog": "audit_logs",
  "itAssetManager.handovers": "handovers",
  "itAssetManager.requests": "requests",
  "itAssetManager.itSupportTickets": "it_support_tickets",
  "itAssetManager.users": "employees"
};

const VALUE_SETTINGS = {
  "itAssetManager.language": "language",
  "itAssetManager.requestDraft": "requestDraft",
  "itAssetManager.ticketCounter": "ticketCounter",
  "itAssetManager.itSupportTicketCounter": "itSupportTicketCounter",
  "amjaad_logged_in_user": "session"
};

const arrayCache = new Map();
const valueCache = new Map();
const OPTIONAL_TABLES = new Set(["it_support_tickets"]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeArray(records) {
  return records.map((record) => record.payload || record);
}

async function fetchArray(table) {
  const { data, error } = await supabase
    .from(table)
    .select("id,payload,created_at,updated_at")
    .order("created_at", { ascending: true });

  if (error) throw error;
  return normalizeArray(data || []);
}

async function fetchSetting(key) {
  const { data, error } = await supabase
    .from("settings")
    .select("value")
    .eq("key", key)
    .maybeSingle();

  if (error) throw error;
  return data?.value ?? null;
}

async function saveArrayToSupabase(table, value) {
  const rows = value.map((item, index) => ({
    id: String(item.id || `${table}-${index}`),
    payload: item,
    updated_at: new Date().toISOString()
  }));

  const { error: deleteError } = await supabase.from(table).delete().neq("id", "__never__");
  if (deleteError) throw deleteError;
  if (!rows.length) return;

  const { error } = await supabase.from(table).upsert(rows, { onConflict: "id" });
  if (error) throw error;
}

async function saveSettingToSupabase(key, value) {
  const { error } = await supabase.from("settings").upsert({
    key,
    value,
    updated_at: new Date().toISOString()
  }, { onConflict: "key" });

  if (error) throw error;
}

function installSupabaseBridge() {
  window.amjaadStorageService = {
    backend: "supabase",
    isPersistent: true,
    loadArray(key, fallback = []) {
      return clone(arrayCache.get(key) || fallback || []);
    },
    saveArray(key, value) {
      const safeValue = Array.isArray(value) ? clone(value) : [];
      arrayCache.set(key, safeValue);
      const table = ARRAY_TABLES[key];
      if (table) {
        saveArrayToSupabase(table, safeValue).catch((error) => {
          console.error(`Supabase save failed for ${table}`, error);
        });
      }
      return safeValue;
    },
    loadValue(key, fallback = null) {
      const settingKey = VALUE_SETTINGS[key] || key;
      return valueCache.has(settingKey) ? clone(valueCache.get(settingKey)) : fallback;
    },
    saveValue(key, value) {
      const settingKey = VALUE_SETTINGS[key] || key;
      valueCache.set(settingKey, clone(value));
      saveSettingToSupabase(settingKey, value).catch((error) => {
        console.error(`Supabase setting save failed for ${settingKey}`, error);
      });
      return value;
    },
    remove(key) {
      const settingKey = VALUE_SETTINGS[key] || key;
      valueCache.delete(settingKey);
      saveSettingToSupabase(settingKey, null).catch((error) => {
        console.error(`Supabase setting clear failed for ${settingKey}`, error);
      });
    },
    readRaw(key) {
      const settingKey = VALUE_SETTINGS[key] || key;
      const value = valueCache.has(settingKey) ? valueCache.get(settingKey) : arrayCache.get(key);
      return value === undefined ? null : JSON.stringify(value);
    },
    writeRaw(key, value) {
      try {
        this.saveValue(key, JSON.parse(value));
      } catch {
        this.saveValue(key, value);
      }
    }
  };
}

export async function initializeSupabaseStorageBridge() {
  if (!isSupabaseConfigured) {
    throw new Error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.");
  }

  for (const [key, table] of Object.entries(ARRAY_TABLES)) {
    try {
      arrayCache.set(key, await fetchArray(table));
    } catch (error) {
      if (!OPTIONAL_TABLES.has(table)) throw error;
      console.error(`Supabase optional table unavailable: ${table}`, error);
      arrayCache.set(key, []);
    }
  }

  for (const settingKey of Object.values(VALUE_SETTINGS)) {
    const value = await fetchSetting(settingKey);
    if (value !== null) valueCache.set(settingKey, value);
  }

  installSupabaseBridge();
  return { backend: "supabase", isPersistent: true };
}
