# Travel Bill Pro — Marketing Website

React 19 + Vite 6 + Tailwind CSS 4 + Framer Motion 12 + Lucide.

```bash
npm install
npm run dev       # http://localhost:5180
npm run build     # production build → dist/
npm run preview   # serve dist/ on :4180
```

## Design
Clean soft-UI system inspired by quirgo.com: one typeface (Outfit), one accent (`--color-accent` #6A08DB,
white text passes WCAG AA), soft borderless `.surface` cards on a `#F4F7FB` canvas. Tokens live in `src/index.css`.
The previous "premium glass" version is kept in `_v1-backup/` for reference.

## Structure
- `src/data/site.js` — brand, contact details, nav (phone & WhatsApp: +91 84569 70530)
- `src/data/content.js` — all copy: features, modules, pricing, FAQ, testimonials, timeline
- `src/components/blocks.jsx` — page sections (hero, problem/fix, features, product tabs, pricing, FAQ, CTA…)
- `src/components/forms.jsx` — demo/contact lead form
- `src/components/mockups/` — code-drawn dashboard screens, invoice, charts (no image assets)
- `src/pages/` — route pages, lazy-loaded per route

## Lead forms
Set `VITE_LEAD_ENDPOINT` (e.g. a Supabase Edge Function or Formspree URL) in `.env` to POST
demo/contact submissions as JSON. Without it, the form hands the enquiry off to WhatsApp prefilled.

## Before launch
- Replace sample client names (`CLIENTS`) and testimonials (`TESTIMONIALS`) with real, approved ones
- Confirm plan limits in `src/pages/Pricing.jsx` (comparison matrix)
- Add `public/og-image.png` (1200×630) — referenced by Open Graph / Twitter tags
- Update `https://travelbillpro.com` in `index.html`, `public/sitemap.xml`, `public/robots.txt` if the domain differs
- SPA fallback is configured for Netlify (`public/_redirects`) and Vercel (`vercel.json`)
