# AMJAAD GROUP IT Asset Manager

Editable Vite React rebuild of the existing static IT Asset Manager.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- The original static build is preserved in `outputs/it-asset-manager`.
- This React version keeps the existing localStorage keys, sample data, translations, page IDs, and behavior for compatibility.
- Supabase is prepared through `src/lib/supabaseClient.js`; add values to `.env.local` when integration begins.
