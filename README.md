# Travel Bill Pro — Marketing Website

React 19 + Vite 6 + Tailwind CSS 4 + Framer Motion 12 + Lucide.

```bash
npm install
npm run dev       # http://localhost:5180
npm run build     # client build + prerender every page to static HTML → dist/
npm run preview   # serve dist/ on :4180
```

## Design
Clean soft-UI system inspired by quirgo.com: one typeface (Outfit), one accent (`--color-accent` #6A08DB,
white text passes WCAG AA), soft borderless `.surface` cards on a `#F4F7FB` canvas. Tokens live in `src/index.css`.
The previous "premium glass" version is kept in `_v1-backup/` for reference.

## Structure
- `src/data/site.js` — brand, domain (`url`), contact details (phone & WhatsApp: +91 84569 70530), nav
- `src/data/content.js` — features, modules, pricing, FAQ, testimonials, timeline
- `src/data/landing.js` — keyword landing pages (travel billing / travel agency / billing management software)
- `src/data/articles.js` — blog guides (add new articles here; sitemap, schema and blog index update automatically)
- `src/seo/meta.js` — titles, descriptions, canonical, Open Graph/Twitter and JSON-LD schema for every route
- `src/components/` — layout, sections (`blocks.jsx`), devices, forms, SEO UI (breadcrumbs, related links)
- `src/components/mockups/` — code-drawn dashboard screens, invoice, charts (no image assets)
- `src/pages/` — route pages, lazy-loaded per route
- `scripts/prerender.mjs` — build step: static HTML per route, 404.html, sitemap.xml, robots.txt, llms.txt
- `public/_headers`, `public/_redirects` — Cloudflare Pages security/caching headers and 301 redirects
- `docs/SEO-PLAYBOOK.md` — SEO/GEO/AEO checklist, Search Console steps, backlink strategy, content calendar

## Deploy (Cloudflare Pages)
Build command `npm run build`, output directory `dist`, env `NODE_VERSION=22`.
Every page is prerendered, so each URL ships its own HTML, meta tags and schema.

## Lead forms
Set `VITE_LEAD_ENDPOINT` (e.g. a Supabase Edge Function or Formspree URL) in `.env` to POST
demo/contact submissions as JSON. Without it, the form hands the enquiry off to WhatsApp prefilled.

## Before launch
- Replace sample client names (`CLIENTS`) and testimonials (`TESTIMONIALS`) with real, approved ones
- Confirm plan limits in `src/pages/Pricing.jsx` (comparison matrix)
- Moving to a custom domain? Change only `url` in `src/data/site.js` (see docs/SEO-PLAYBOOK.md)
