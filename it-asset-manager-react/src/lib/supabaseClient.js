import { createClient } from "@supabase/supabase-js";

const configuredSupabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function getProjectRefFromJwt(token) {
  try {
    const [, payload] = token.split(".");
    if (!payload) return "";
    return JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/"))).ref || "";
  } catch {
    return "";
  }
}

function getProjectRefFromUrl(url) {
  try {
    return new URL(url).hostname.split(".")[0] || "";
  } catch {
    return "";
  }
}

function resolveSupabaseUrl(url, anonKey) {
  const keyProjectRef = getProjectRefFromJwt(anonKey || "");
  const urlProjectRef = getProjectRefFromUrl(url || "");

  if (keyProjectRef && urlProjectRef && keyProjectRef !== urlProjectRef) {
    console.warn("Supabase URL project ref did not match anon key. Using anon key project ref.");
    return `https://${keyProjectRef}.supabase.co`;
  }

  return url;
}

export const supabaseUrl = resolveSupabaseUrl(configuredSupabaseUrl, supabaseAnonKey);
export const supabaseProjectRef = getProjectRefFromUrl(supabaseUrl || "");
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

