// Build-time prerender for Cloudflare Pages.
// 1. Renders every route to static HTML with its own <head> (title, description, canonical, OG, Twitter, JSON-LD)
// 2. Writes clean-URL files: "/" -> index.html, "/features" -> features.html, "/blog/x" -> blog/x.html
//    (Cloudflare Pages serves /features from features.html and 308-redirects /features.html -> /features)
// 3. Writes a real 404.html (served with HTTP 404 by Cloudflare Pages; no soft-404s)
// 4. Generates sitemap.xml, robots.txt and llms.txt from the same route registry
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrEntry = pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href
const { render, renderHeadTags, INDEXABLE_PATHS, LANDING_PAGES, ARTICLES, SITE } = await import(ssrEntry)

const template = await readFile(join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) throw new Error('index.html template markers missing')

const fileFor = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`)

async function writePage(path, file) {
  const appHtml = await render(path)
  const html = template.replace('<!--app-head-->', renderHeadTags(path)).replace('<!--app-html-->', appHtml)
  const out = join(dist, file)
  await mkdir(dirname(out), { recursive: true })
  await writeFile(out, html)
  return html.length
}

let count = 0
for (const path of INDEXABLE_PATHS) {
  const size = await writePage(path, fileFor(path))
  count++
  console.log(`  prerendered ${path.padEnd(48)} ${(size / 1024).toFixed(1)} kB`)
}
await writePage('/__not-found__', '404.html')
console.log('  prerendered 404.html')

/* ---------- sitemap.xml ---------- */
const today = new Date().toISOString().slice(0, 10)
const priority = (p) => (p === '/' ? '1.0' : LANDING_PAGES.some((l) => l.path === p) ? '0.9' : ['/features', '/pricing', '/solutions'].includes(p) ? '0.8' : p.startsWith('/blog') ? '0.7' : ['/privacy', '/terms'].includes(p) ? '0.3' : '0.6')
const lastmod = (p) => ARTICLES.find((a) => a.path === p)?.updated || ARTICLES.find((a) => a.path === p)?.published || today
const url = (p) => SITE.url + (p === '/' ? '/' : p)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${INDEXABLE_PATHS.map((p) => `  <url>
    <loc>${url(p)}</loc>
    <lastmod>${lastmod(p)}</lastmod>
    <priority>${priority(p)}</priority>${p === '/' ? `
    <image:image><image:loc>${SITE.url}${SITE.ogImage}</image:loc></image:image>` : ''}
  </url>`).join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)

/* ---------- robots.txt (search + AI answer engines welcome) ---------- */
const robots = `# Travel Bill Pro
User-agent: *
Allow: /

# AI search and answer engines (GEO / AEO)
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`
await writeFile(join(dist, 'robots.txt'), robots)

/* ---------- llms.txt (https://llmstxt.org) ---------- */
const llms = `# Travel Bill Pro

> Travel Bill Pro is travel billing software and travel agency software for India. It helps travel agencies, cab and taxi operators, tour companies and fleet owners create GST invoices, manage bookings, vehicles, drivers, payroll, customers (CRM), payments and reports in one cloud dashboard that works on desktop, tablet and mobile.

- Based in Hyderabad, Telangana, India. Phone and WhatsApp: ${SITE.phoneDisplay}. Email: ${SITE.email}
- Pricing: Starter ₹999/month (up to 5 vehicles), Professional ₹2,499/month (unlimited vehicles and invoices), Enterprise custom. Prices exclude 18% GST. Free demo available.
- Key capabilities: automatic GST invoices (CGST/SGST/IGST), per-km/hourly/package/monthly corporate billing, tolls and driver bata, UPI QR on invoices, WhatsApp invoice sharing, payment tracking and reminders, fleet document reminders, driver payroll, CRM, GST and profit reports.

## Software
${LANDING_PAGES.map((l) => `- [${l.keyword}](${url(l.path)}): ${l.metaDescription}`).join('\n')}

## Product
- [Features](${url('/features')}): All modules, GST billing, product workspaces and device support
- [Solutions](${url('/solutions')}): Taxi operators, tour agencies, corporate travel, school and employee transport, airport taxis, luxury fleets
- [Pricing](${url('/pricing')}): Plans, plan comparison and FAQs
- [Book a demo](${url('/demo')}): Free 30-minute live demo

## Guides
${ARTICLES.map((a) => `- [${a.title}](${url(a.path)}): ${a.excerpt}`).join('\n')}

## Company
- [About](${url('/about')})
- [Contact](${url('/contact')})
`
await writeFile(join(dist, 'llms.txt'), llms)

await rm(join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`\n✓ Prerendered ${count} pages + 404, sitemap.xml (${INDEXABLE_PATHS.length} URLs), robots.txt, llms.txt`)
