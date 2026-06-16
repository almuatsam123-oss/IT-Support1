const memoryStore = new Map();

function canUseLocalStorage() {
  try {
    const testKey = "__amjaad_storage_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const hasPersistentStorage = typeof window !== "undefined" && canUseLocalStorage();

function readRaw(key) {
  return hasPersistentStorage ? window.localStorage.getItem(key) : memoryStore.get(key) || null;
}

function writeRaw(key, value) {
  if (hasPersistentStorage) {
    window.localStorage.setItem(key, value);
    return;
  }
  memoryStore.set(key, value);
}

export function loadArray(key, fallback = []) {
  const storedValue = readRaw(key);
  if (!storedValue) return Array.isArray(fallback) ? [...fallback] : [];

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : (Array.isArray(fallback) ? [...fallback] : []);
  } catch {
    try {
      writeRaw(`${key}.corrupt.${Date.now()}`, storedValue);
    } catch {
      // Keep loading safe even when storage backup fails.
    }
    return Array.isArray(fallback) ? [...fallback] : [];
  }
}

export function saveArray(key, value) {
  const safeValue = Array.isArray(value) ? value : [];
  writeRaw(key, JSON.stringify(safeValue));
  return safeValue;
}

export function loadValue(key, fallback = null) {
  const storedValue = readRaw(key);
  if (!storedValue) return fallback;

  try {
    return JSON.parse(storedValue);
  } catch {
    return fallback;
  }
}

export function saveValue(key, value) {
  writeRaw(key, JSON.stringify(value));
  return value;
}

export function removeValue(key) {
  if (hasPersistentStorage) {
    window.localStorage.removeItem(key);
    return;
  }
  memoryStore.delete(key);
}

export const storageService = {
  isPersistent: hasPersistentStorage,
  loadArray,
  saveArray,
  loadValue,
  saveValue,
  removeValue
};
