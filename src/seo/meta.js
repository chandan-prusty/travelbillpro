// Central SEO registry: titles, descriptions, canonical URLs, social cards and JSON-LD for every route.
// Used by the build-time prerenderer (static <head>) and by the client on in-app navigation.
import { SITE } from '../data/site'
import { FAQ, PRICING, STEPS, FEATURES } from '../data/content'
import { LANDING_PAGES } from '../data/landing'
import { ARTICLES } from '../data/articles'

const BRAND = SITE.name
const abs = (p = '/') => SITE.url + (p === '/' ? '/' : p)
const ORG_ID = `${SITE.url}/#organization`
const SITE_ID = `${SITE.url}/#website`
const APP_ID = `${SITE.url}/#software`

const PAGES = {
  '/': {
    title: 'Travel Bill Pro: Travel Billing & Agency Software India',
    description: 'Travel Bill Pro is travel billing and travel agency software for India. Create GST invoices in seconds and manage bookings, fleet, drivers, payments and reports.',
    name: 'Home',
  },
  '/features': {
    title: 'Features: GST Billing, Bookings & Fleet | Travel Bill Pro',
    description: 'Explore Travel Bill Pro features: booking management, one-click GST invoices, fleet and driver management, payroll, customer CRM, WhatsApp automation and reports.',
    name: 'Features',
  },
  '/solutions': {
    title: 'Travel Agency Software for Taxi & Tours | Travel Bill Pro',
    description: 'Travel agency software for taxi operators, tour agencies, tempo travellers, corporate and employee transport, airport taxis and luxury fleets across India.',
    name: 'Solutions',
  },
  '/pricing': {
    title: 'Travel Billing Software Pricing from ₹999 | Travel Bill Pro',
    description: 'Simple pricing for Travel Bill Pro travel billing software: Starter ₹999/month, Professional ₹2,499/month and custom Enterprise plans. Free demo, no setup fees.',
    name: 'Pricing',
  },
  '/about': {
    title: 'About Us | Travel Billing Software from Hyderabad',
    description: 'Travel Bill Pro is a Hyderabad-based team building simple travel billing and travel agency software for India\'s taxi, tour and fleet businesses.',
    name: 'About',
  },
  '/contact': {
    title: 'Contact Travel Bill Pro | Call or WhatsApp +91 84569 70530',
    description: 'Contact Travel Bill Pro for a free demo of our travel billing software. Call or WhatsApp +91 84569 70530 or email accounts@travelbillpro.com.',
    name: 'Contact',
  },
  '/demo': {
    title: 'Book a Free Demo of Travel Billing Software | Travel Bill Pro',
    description: 'Book a free 30-minute live demo of Travel Bill Pro. See GST billing, bookings, fleet and driver payroll set up for your own travel business.',
    name: 'Book a Demo',
  },
  '/blog': {
    title: 'Travel Billing & Agency Software Guides | Travel Bill Pro',
    description: 'Practical guides on travel billing software, GST invoices for travel agencies, choosing travel agency software and moving from Excel to software.',
    name: 'Blog',
  },
  '/privacy': {
    title: 'Privacy Policy | Travel Bill Pro',
    description: 'How Travel Bill Pro collects, uses, stores and protects your business and personal data.',
    name: 'Privacy Policy',
  },
  '/terms': {
    title: 'Terms & Conditions | Travel Bill Pro',
    description: 'Terms and conditions for using the Travel Bill Pro website and travel billing software subscription.',
    name: 'Terms & Conditions',
  },
}
for (const l of LANDING_PAGES) PAGES[l.path] = { title: l.metaTitle, description: l.metaDescription, name: l.keyword, landing: l }
for (const a of ARTICLES) PAGES[a.path] = { title: a.metaTitle, description: a.metaDescription, name: a.title, article: a }

export const NOT_FOUND = { title: 'Page not found | Travel Bill Pro', description: 'This page does not exist. Explore Travel Bill Pro travel billing software.', noindex: true }

/** Every indexable route, in sitemap order. */
export const INDEXABLE_PATHS = Object.keys(PAGES)

/* ---------- Schema builders ---------- */
const sameAs = Object.values(SITE.social).filter(Boolean)

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND,
  alternateName: 'TravelBillPro',
  url: abs('/'),
  logo: { '@type': 'ImageObject', url: abs('/brand/travel-bill-pro-logo-1200.png'), width: 1200, height: 291 },
  image: abs('/brand/travel-bill-pro-mark-512.png'),
  email: SITE.email,
  telephone: SITE.phoneE164,
  address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: [{
    '@type': 'ContactPoint', telephone: SITE.phoneE164, email: SITE.email, contactType: 'sales',
    areaServed: 'IN', availableLanguage: ['English', 'Hindi', 'Telugu'],
  }],
  ...(sameAs.length ? { sameAs } : {}),
}

// Google site name: WebSite.name on the home page is the primary signal (https://developers.google.com/search/docs/appearance/site-names)
const website = {
  '@type': 'WebSite', '@id': SITE_ID, url: abs('/'), name: BRAND,
  alternateName: ['TravelBillPro', 'Travel Bill Pro India'],
  inLanguage: 'en-IN', publisher: { '@id': ORG_ID },
}

const software = {
  '@type': 'SoftwareApplication',
  '@id': APP_ID,
  name: BRAND,
  alternateName: ['Travel Billing Software', 'Travel Agency Software', 'Travel Billing Management Software'],
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Travel billing and travel agency management software',
  operatingSystem: 'Web browser, Android, iOS',
  url: abs('/'),
  image: abs(SITE.ogImage),
  description: 'Travel billing and travel agency software for India: GST invoices, bookings, fleet, drivers, payroll, CRM, payments and reports in one dashboard.',
  featureList: FEATURES.map((f) => f.title).join(', '),
  publisher: { '@id': ORG_ID },
  offers: PRICING.filter((p) => p.price).map((p) => ({
    '@type': 'Offer', name: p.name, price: String(p.price), priceCurrency: 'INR', url: abs('/pricing'),
    availability: 'https://schema.org/InStock',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: String(p.price), priceCurrency: 'INR', unitText: 'MONTH', valueAddedTaxIncluded: false },
  })),
}

const faqSchema = (items, id) => ({
  '@type': 'FAQPage', '@id': id,
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

export function breadcrumbTrail(path) {
  if (path === '/') return [{ name: 'Home', path: '/' }]
  const trail = [{ name: 'Home', path: '/' }]
  if (path.startsWith('/blog/')) trail.push({ name: 'Blog', path: '/blog' })
  trail.push({ name: PAGES[path]?.name || 'Page', path })
  return trail
}

function pageSchema(path) {
  const page = PAGES[path]
  const url = abs(path)
  const graph = []
  const webpage = {
    '@type': page.article ? 'WebPage' : path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : 'WebPage',
    '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'en-IN',
    isPartOf: { '@id': SITE_ID }, primaryImageOfPage: { '@type': 'ImageObject', url: abs(SITE.ogImage) },
  }
  if (path === '/' || page.landing) webpage.about = { '@id': APP_ID }
  graph.push(webpage)

  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbTrail(path).map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
    })
    webpage.breadcrumb = { '@id': `${url}#breadcrumb` }
  }
  if (path === '/' || path === '/pricing' || page.landing) graph.push(software)
  if (path === '/pricing') graph.push(faqSchema(FAQ, `${url}#faq`))
  if (path === '/solutions') {
    graph.push({
      '@type': 'HowTo', '@id': `${url}#howto`, name: 'How to start billing with Travel Bill Pro',
      step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.desc })),
    })
  }
  if (page.landing) graph.push(faqSchema(page.landing.faq, `${url}#faq`))
  if (page.article) {
    const a = page.article
    graph.push({
      '@type': 'BlogPosting', '@id': `${url}#article`, headline: a.title, description: a.metaDescription,
      datePublished: a.published, dateModified: a.updated || a.published, inLanguage: 'en-IN',
      mainEntityOfPage: { '@id': `${url}#webpage` }, image: abs(SITE.ogImage),
      author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID },
      timeRequired: `PT${a.readMins}M`,
    })
    if (a.faq?.length) graph.push(faqSchema(a.faq, `${url}#faq`))
  }
  if (path === '/blog') {
    graph.push({
      '@type': 'ItemList', '@id': `${url}#posts`,
      itemListElement: ARTICLES.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(a.path), name: a.title })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': [organization, website, ...graph] }
}

/** Full head description for a route. */
export function getHead(path) {
  const page = PAGES[path]
  if (!page) return { ...NOT_FOUND, canonical: null, image: abs(SITE.ogImage), ogType: 'website', jsonLd: null }
  return {
    title: page.title,
    description: page.description,
    canonical: abs(path),
    image: abs(SITE.ogImage),
    imageAlt: 'Travel Bill Pro travel billing software dashboard with GST invoices, bookings and payments',
    ogType: page.article ? 'article' : 'website',
    published: page.article?.published,
    noindex: false,
    jsonLd: pageSchema(path),
  }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Serialised <head> tags for the prerenderer. */
export function renderHeadTags(path) {
  const h = getHead(path)
  const tags = [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    `<meta name="robots" content="${h.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />`,
    h.canonical && `<link rel="canonical" href="${h.canonical}" />`,
    `<meta property="og:type" content="${h.ogType}" />`,
    `<meta property="og:site_name" content="${BRAND}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    h.canonical && `<meta property="og:url" content="${h.canonical}" />`,
    `<meta property="og:image" content="${h.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:alt" content="${esc(h.imageAlt || h.title)}" />`,
    h.published && `<meta property="article:published_time" content="${h.published}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${h.image}" />`,
    `<meta name="twitter:image:alt" content="${esc(h.imageAlt || h.title)}" />`,
    h.jsonLd && `<script type="application/ld+json">${JSON.stringify(h.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ]
  return tags.filter(Boolean).join('\n    ')
}
