import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

function loadEnvFile() {
  const envPath = path.resolve(".env");
  if (!fs.existsSync(envPath)) return {};

  return Object.fromEntries(
    fs.readFileSync(envPath, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const index = line.indexOf("=");
        return [line.slice(0, index), line.slice(index + 1)];
      })
  );
}

const env = { ...loadEnvFile(), ...process.env };
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const payloadTables = [
  "employees",
  "assets",
  "handovers",
  "maintenance",
  "requests",
  "stock_items",
  "suppliers",
  "audit_logs",
  "issue_history"
];

async function testPayloadTable(table) {
  const id = `crud-test-${table}-${Date.now()}`;
  const createdPayload = { id, name: `CRUD Test ${table}`, status: "created" };
  const updatedPayload = { ...createdPayload, status: "updated" };

  const insert = await supabase.from(table).insert({ id, payload: createdPayload }).select("id,payload").single();
  if (insert.error) throw new Error(`insert failed: ${insert.error.message}`);

  const read = await supabase.from(table).select("id,payload").eq("id", id).single();
  if (read.error) throw new Error(`read failed: ${read.error.message}`);
  if (read.data.payload.status !== "created") throw new Error("read payload mismatch");

  const update = await supabase.from(table).update({ payload: updatedPayload }).eq("id", id).select("id,payload").single();
  if (update.error) throw new Error(`update failed: ${update.error.message}`);
  if (update.data.payload.status !== "updated") throw new Error("update payload mismatch");

  const del = await supabase.from(table).delete().eq("id", id);
  if (del.error) throw new Error(`delete failed: ${del.error.message}`);

  const verifyDelete = await supabase.from(table).select("id").eq("id", id);
  if (verifyDelete.error) throw new Error(`delete verify failed: ${verifyDelete.error.message}`);
  if (verifyDelete.data.length !== 0) throw new Error("delete verify found row");
}

async function testSettingsTable() {
  const key = `crud-test-setting-${Date.now()}`;

  const insert = await supabase.from("settings").insert({ key, value: { status: "created" } }).select("key,value").single();
  if (insert.error) throw new Error(`insert failed: ${insert.error.message}`);

  const read = await supabase.from("settings").select("key,value").eq("key", key).single();
  if (read.error) throw new Error(`read failed: ${read.error.message}`);
  if (read.data.value.status !== "created") throw new Error("read value mismatch");

  const update = await supabase.from("settings").update({ value: { status: "updated" } }).eq("key", key).select("key,value").single();
  if (update.error) throw new Error(`update failed: ${update.error.message}`);
  if (update.data.value.status !== "updated") throw new Error("update value mismatch");

  const del = await supabase.from("settings").delete().eq("key", key);
  if (del.error) throw new Error(`delete failed: ${del.error.message}`);

  const verifyDelete = await supabase.from("settings").select("key").eq("key", key);
  if (verifyDelete.error) throw new Error(`delete verify failed: ${verifyDelete.error.message}`);
  if (verifyDelete.data.length !== 0) throw new Error("delete verify found row");
}

const results = [];

for (const table of payloadTables) {
  try {
    await testPayloadTable(table);
    results.push({ table, status: "PASS" });
  } catch (error) {
    results.push({ table, status: "FAIL", error: error.message });
  }
}

try {
  await testSettingsTable();
  results.push({ table: "settings", status: "PASS" });
} catch (error) {
  results.push({ table: "settings", status: "FAIL", error: error.message });
}

console.table(results);
if (results.some((result) => result.status !== "PASS")) process.exit(1);
