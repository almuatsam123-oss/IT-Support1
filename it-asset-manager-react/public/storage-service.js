(function () {
  const unavailableStore = new Map();

  function hasLocalStorage() {
    try {
      const testKey = "__amjaad_storage_test__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  const canUseLocalStorage = hasLocalStorage();

  function readRaw(key) {
    return canUseLocalStorage ? window.localStorage.getItem(key) : unavailableStore.get(key) || null;
  }

  function writeRaw(key, value) {
    if (canUseLocalStorage) {
      window.localStorage.setItem(key, value);
      return;
    }
    unavailableStore.set(key, value);
  }

  function remove(key) {
    if (canUseLocalStorage) {
      window.localStorage.removeItem(key);
      return;
    }
    unavailableStore.delete(key);
  }

  function loadArray(key, fallback = []) {
    const storedValue = readRaw(key);
    if (storedValue === null || storedValue === undefined || storedValue === "") {
      return Array.isArray(fallback) ? [...fallback] : [];
    }

    try {
      const parsedValue = JSON.parse(storedValue);
      return Array.isArray(parsedValue) ? parsedValue : (Array.isArray(fallback) ? [...fallback] : []);
    } catch {
      const backupKey = `${key}.corrupt.${Date.now()}`;
      try {
        writeRaw(backupKey, storedValue);
      } catch {
        // Keep the app usable even if backup storage is unavailable.
      }
      return Array.isArray(fallback) ? [...fallback] : [];
    }
  }

  function saveArray(key, value) {
    const safeValue = Array.isArray(value) ? value : [];
    writeRaw(key, JSON.stringify(safeValue));
    return safeValue;
  }

  function loadValue(key, fallback = null) {
    const storedValue = readRaw(key);
    if (storedValue === null || storedValue === undefined || storedValue === "") return fallback;
    try {
      return JSON.parse(storedValue);
    } catch {
      return fallback;
    }
  }

  function saveValue(key, value) {
    writeRaw(key, JSON.stringify(value));
    return value;
  }

  window.amjaadStorageService = {
    isPersistent: canUseLocalStorage,
    loadArray,
    saveArray,
    loadValue,
    saveValue,
    remove,
    readRaw,
    writeRaw
  };
})();
