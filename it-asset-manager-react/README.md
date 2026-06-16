# AMJAAD GROUP IT Asset Manager

Editable Vite React rebuild of the existing static IT Asset Manager.

## Run locally

```bash
npm install
npm run dev
```

## Supabase setup

1. Open `supabase/schema.sql` in your Supabase SQL editor and run it.
2. Add your project credentials to `.env`:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

The app stores system data in Supabase tables. Browser localStorage is no longer used for CRUD persistence.

## Build

```bash
npm run build
```

## Notes

- The original static build is preserved in `outputs/it-asset-manager`.
- This React version keeps the existing sample data, translations, page IDs, and behavior while storing CRUD data in Supabase.
- Supabase is configured through `src/lib/supabaseClient.js`; add values to `.env` locally and to Vercel environment variables for deployment.
