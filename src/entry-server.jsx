// Build-time prerender entry (vite build --ssr). Renders each route to static HTML so every URL
// ships real content and its own <head> to search engines and AI crawlers.
import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export { renderHeadTags, INDEXABLE_PATHS } from './seo/meta'
export { LANDING_PAGES } from './data/landing'
export { ARTICLES } from './data/articles'
export { SITE } from './data/site'

async function renderOnce(url) {
  const { prelude } = await prerenderToNodeStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    // Never outline large Suspense boundaries into a later inline swap; static HTML must be complete in place.
    { progressiveChunkSize: Number.POSITIVE_INFINITY },
  )
  let html = ''
  for await (const chunk of prelude) html += chunk
  return html
}

export async function render(url) {
  // First pass resolves the route's lazy() modules; the second renders with everything resolved. Any boundary
  // that is suspended or outlined would ship a fallback plus an inline swap script, causing a large layout shift.
  await renderOnce(url)
  const html = await renderOnce(url)
  if (html.includes('<template id="B:')) throw new Error(`Prerender of ${url} still contains a streamed Suspense fallback`)
  return html
}
