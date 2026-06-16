import { useEffect } from "react";
import LoginPage from "./components/LoginPage.jsx";
import DashboardShell from "./components/DashboardShell.jsx";
import AppModals from "./components/AppModals.jsx";

function loadScript(src, datasetKey) {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[data-${datasetKey}]`);
    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset[datasetKey.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = "true";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function loadLegacyApp() {
  if (window.__AMJAAD_LEGACY_APP_PROMISE__) {
    return window.__AMJAAD_LEGACY_APP_PROMISE__;
  }

  window.__AMJAAD_LEGACY_APP_PROMISE__ = new Promise(async (resolve, reject) => {
    if (window.__AMJAAD_LEGACY_APP_LOADED__) {
      resolve();
      return;
    }

    try {
      await loadScript("/storage-service.js", "amjaad-storage-service");
      await loadScript("/legacy-app.js", "amjaad-legacy-app");
      window.__AMJAAD_LEGACY_APP_LOADED__ = true;
      resolve();
    } catch (error) {
      reject(error);
    }
  });

  return window.__AMJAAD_LEGACY_APP_PROMISE__;
}

export default function App() {
  useEffect(() => {
    loadLegacyApp().catch((error) => {
      console.error("Unable to load AMJAAD app logic", error);
    });
  }, []);

  return (
    <>
      <LoginPage />
      <DashboardShell />
      <AppModals />
    </>
  );
}

