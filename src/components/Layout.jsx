import { Suspense, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { NAV, SITE } from '../data/site'
import { Button, WhatsAppIcon, SocialIcon, EASE } from './ui'

/* ---------- Logo (brand artwork: public/brand/) ---------- */
export function Logo({ className = '' }) {
  return (
    <Link to="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label="Travel Bill Pro home">
      <picture>
        <source srcSet="/brand/travel-bill-pro-logo-680.webp" type="image/webp" />
        <img src="/brand/travel-bill-pro-logo-680.png" alt="Travel Bill Pro" width="680" height="165"
          className="h-9 w-auto sm:h-10" decoding="async" fetchPriority="high" />
      </picture>
    </Link>
  )
}

/* ---------- Head tags on client-side navigation (static HTML already has them from prerender) ---------- */
function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector)
  if (!value) { el?.remove(); return }
  if (!el) { el = create(); document.head.appendChild(el) }
  el.setAttribute(attr, value)
}
const metaEl = (key, val) => () => { const m = document.createElement('meta'); m.setAttribute(key, val); return m }

function RouteHead() {
  const { pathname } = useLocation()
  useEffect(() => {
    let live = true
    // Loaded on demand: the first page already has its head from the prerendered HTML.
    import('../seo/meta').then(({ getHead }) => {
    if (!live) return
    const h = getHead(pathname.replace(/\/+$/, '') || '/')
    document.title = h.title
    setTag('meta[name="description"]', metaEl('name', 'description'), 'content', h.description)
    setTag('meta[name="robots"]', metaEl('name', 'robots'), 'content', h.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setTag('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l }, 'href', h.canonical)
    for (const [k, v] of [['og:title', h.title], ['og:description', h.description], ['og:url', h.canonical], ['og:type', h.ogType]]) setTag(`meta[property="${k}"]`, metaEl('property', k), 'content', v)
    for (const [k, v] of [['twitter:title', h.title], ['twitter:description', h.description]]) setTag(`meta[name="${k}"]`, metaEl('name', k), 'content', v)
    })
    return () => { live = false }
  }, [pathname])
  return null
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-canvas/90 shadow-[0_1px_0_rgb(17_24_39/0.06)] backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container-x flex h-20 items-center justify-between gap-6" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <li key={n.to}>
              <NavLink to={n.to} end={n.to === '/'}
                className={({ isActive }) => `relative py-2 text-[16px] transition-colors ${isActive ? 'text-accent after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-accent' : 'text-ink-700 hover:text-ink-900'}`}>
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 lg:flex">
          <Button to={SITE.loginUrl} variant="secondary" className="!min-h-10 !px-5 text-sm">Log In</Button>
          <Button to="/demo" className="!min-h-10 !px-5 text-sm">Book Demo</Button>
        </div>
        <button className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-ink-900 shadow-[var(--shadow-soft)] lg:hidden"
          onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: EASE }}
            className="h-[calc(100dvh-80px)] overflow-y-auto bg-canvas lg:hidden">
            <ul className="container-x flex flex-col gap-2 pt-4">
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.to === '/'}
                    className={({ isActive }) => `block rounded-2xl px-5 py-4 text-xl ${isActive ? 'bg-white text-accent shadow-[var(--shadow-soft)]' : 'text-ink-900'}`}>
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="container-x mt-6 flex flex-col gap-3 pb-10">
              <Button to="/demo" className="w-full !min-h-12">Book Free Demo</Button>
              <Button to={SITE.loginUrl} variant="secondary" className="w-full !min-h-12">Log In</Button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- Footer ---------- */
const FOOTER = [
  { title: 'Product', links: [['Features', '/features'], ['GST Billing', '/features#billing'], ['All Modules', '/features#modules'], ['Works on Every Device', '/features#devices'], ['Pricing', '/pricing']] },
  { title: 'Software', links: [['Travel Billing Software', '/travel-billing-software'], ['Travel Agency Software', '/travel-agency-software'], ['Travel Billing Management Software', '/travel-billing-management-software'], ['Solutions by Business', '/solutions']] },
  { title: 'Resources', links: [['Blog & Guides', '/blog'], ['GST Invoice Format', '/blog/gst-invoice-format-for-travel-agencies'], ['Software vs Excel', '/blog/travel-billing-software-vs-excel'], ['FAQs', '/pricing#faq']] },
  { title: 'Company', links: [['About Us', '/about'], ['Contact', '/contact'], ['Book a Demo', '/demo']] },
]

function Footer() {
  return (
    <footer className="bg-white pb-24 lg:pb-0">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_2.4fr]">
        <div>
          <Logo />
          <p className="mt-2 text-xs tracking-wider text-ink-500 uppercase">{SITE.tagline}</p>
          <p className="mt-5 max-w-xs text-[15px] text-ink-700">Bookings, GST billing, fleet, drivers, payroll and reports for India's travel businesses, all in one place.</p>
          <ul className="mt-5 flex flex-col gap-2 text-[15px]">
            <li><a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-ink-900 hover:text-accent"><Phone className="size-4 text-accent" aria-hidden="true" />Call {SITE.phoneDisplay}</a></li>
            <li><a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-900 hover:text-accent"><WhatsAppIcon className="size-4 text-[#128C4B]" />WhatsApp {SITE.phoneDisplay}</a></li>
          </ul>
          <div className="mt-6 flex gap-2">
            {Object.entries(SITE.social).filter(([, href]) => href).map(([k, href]) => (
              <a key={k} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Travel Bill Pro on ${k === 'x' ? 'X' : k[0].toUpperCase() + k.slice(1)}`}
                className="inline-flex size-10 items-center justify-center rounded-full bg-canvas text-ink-500 transition hover:text-accent">
                <SocialIcon name={k} />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER.map((col) => (
            <div key={col.title}>
              <h2 className="text-[16px] font-medium tracking-normal">{col.title}</h2>
              <ul className="mt-5 flex flex-col gap-3 text-[15px]">
                {col.links.map(([label, to]) => (
                  <li key={label}><Link to={to} className="text-ink-500 transition-colors hover:text-accent">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-900/8 py-7 text-sm text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Travel Bill Pro · {SITE.location}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
            <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Mobile sticky CTA ---------- */
function MobileCTA() {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (pathname === '/demo' || pathname === '/contact') return null
  return (
    <AnimatePresence>
      {show && (
        <m.div initial={{ y: 90 }} animate={{ y: 0 }} exit={{ y: 90 }} transition={{ duration: 0.3, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-40 bg-canvas/95 px-4 pt-3 shadow-[0_-8px_24px_-12px_rgb(17_24_39/0.2)] backdrop-blur lg:hidden"
          style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
          <div className="mx-auto flex max-w-md gap-2">
            <a href={SITE.phoneHref} aria-label="Call Travel Bill Pro" className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-ink-900 shadow-[var(--shadow-soft)]"><Phone className="size-5" /></a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#128C4B] shadow-[var(--shadow-soft)]"><WhatsAppIcon /></a>
            <Button to="/demo" className="h-12 flex-1">Book Free Demo</Button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <ScrollManager />
      <RouteHead />
      <Navbar />
      <main id="main" className="min-h-[70vh]">
        <Suspense fallback={<div className="min-h-[80vh]" role="status" aria-label="Loading page" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
