import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, ShieldCheck, NotebookPen, FileSpreadsheet, Calculator, MessageCircle, Receipt,
  PhoneCall, CalendarCheck, ReceiptIndianRupee, Car, Wallet, Database, Zap, ChartColumn, Plus, Star, Play,
} from 'lucide-react'
import { Reveal, Button, Typewriter, Counter, EASE } from './ui'
import { ScaledScreen } from './mockups/Frames'
import { DashboardScreen, SHOWCASE_SCREENS } from './mockups/Screens'
import { FEATURES, STATS, TESTIMONIALS, FAQ, PRICING } from '../data/content'
import { SITE } from '../data/site'

/* ============ Page header (inner pages) ============ */
export function PageHeader({ pill, title, accent, sub, children, breadcrumb }) {
  return (
    <section className="pt-32 pb-10 sm:pt-40 sm:pb-14 [@media(max-height:500px)]:pt-24">
      <div className="container-x flex flex-col items-center text-center">
        {breadcrumb}
        {pill && <span className="pill"><span className="size-2 rounded-full bg-accent" aria-hidden="true" />{pill}</span>}
        <h1 className="mt-7 max-w-4xl text-[32px] min-[360px]:text-[40px] sm:text-6xl">
          {title}{accent && <><br /><span className="text-accent">{accent}</span></>}
        </h1>
        {sub && <p className="mt-6 max-w-2xl text-lg text-ink-700 sm:text-xl">{sub}</p>}
        {children && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  )
}

/* ============ Home hero ============ */
const HERO_WORDS = ['In One Dashboard', 'With One-Click GST', 'Across Every Vehicle', 'From Your Phone']

export function Hero() {
  return (
    <section className="pt-36 sm:pt-44 [@media(max-height:500px)]:pt-24">
      <div className="container-x flex flex-col items-center text-center">
        <span className="pill"><span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" /><span className="sm:hidden">Travel Billing Software</span><span className="hidden sm:inline">Travel Billing Software · {SITE.tagline}</span></span>
        <h1 className="mt-8 text-[34px] leading-[1.08] min-[360px]:text-[42px] sm:text-6xl lg:text-[72px]">
          Manage Your Entire Travel Business
          <span className="mt-2 block min-h-[2.3em] text-accent sm:min-h-[1.15em]"><Typewriter words={HERO_WORDS} /></span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-700 sm:text-xl">
          Say goodbye to registers and Excel sheets. Travel Bill Pro is <Link to="/travel-billing-software" className="text-accent underline underline-offset-4 hover:decoration-2">travel billing software</Link> that brings <b className="font-medium text-ink-900">bookings</b>, <b className="font-medium text-ink-900">GST invoices</b>, <b className="font-medium text-ink-900">fleet</b>, <b className="font-medium text-ink-900">driver payroll</b> and <b className="font-medium text-ink-900">reports</b> into one beautifully simple platform.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button to="/demo" className="!min-h-14 !px-8 text-[17px]">Start Free Demo <ArrowRight className="size-5" aria-hidden="true" /></Button>
            <Button href="#video" variant="secondary" className="!min-h-14 !px-6 text-[17px]">
              <span className="flex size-7 items-center justify-center rounded-full bg-accent text-white"><Play className="size-3 fill-current" aria-hidden="true" /></span>
              Watch the 30-sec video
            </Button>
          </div>
          <p className="text-center text-sm text-ink-500"><ShieldCheck className="mr-1.5 inline size-4 align-[-3px] text-accent" aria-hidden="true" />No credit card required · Set up in 10 minutes</p>
        </div>
      </div>
      <ModuleMarquee />
      <div className="container-x mt-6">
        <Reveal y={30}><MacWindow label="Travel Bill Pro dashboard with today's revenue, pending payments, active trips, GST invoices, vehicle availability and driver status"><DashboardScreen /></MacWindow></Reveal>
      </div>
    </section>
  )
}

/* ============ Product video ============ */
const VIDEO = {
  hd: '/media/travel-bill-pro-tour-1080.mp4',
  sd: '/media/travel-bill-pro-tour-720.mp4',
  poster: '/media/travel-bill-pro-tour-poster.jpg',
}

export function VideoTour() {
  const [playing, setPlaying] = useState(false)
  // Phones get the lighter 720p file; the video only downloads after the visitor presses play.
  const src = typeof window !== 'undefined' && window.innerWidth < 768 ? VIDEO.sd : VIDEO.hd
  return (
    <section id="video" className="section scroll-mt-24">
      <div className="container-x">
        <SectionTitle title="See Travel Bill Pro" accent="in 30 seconds." sub="From scattered bookings and missed payments to one organised dashboard. Here's how it works." />
        <Reveal y={30} className="surface mx-auto mt-14 max-w-5xl p-3 sm:p-4">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink-900">
            {playing ? (
              <video className="h-full w-full" src={src} poster={VIDEO.poster} controls autoPlay playsInline preload="auto"
                aria-label="Travel Bill Pro product tour video">
                Your browser does not support embedded video. <a href={VIDEO.hd}>Download the tour video</a>.
              </video>
            ) : (
              <button onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full" aria-label="Play the 30-second Travel Bill Pro product tour (with sound)">
                <picture>
                  <source srcSet="/media/travel-bill-pro-tour-poster.webp" type="image/webp" />
                  <img src={VIDEO.poster} alt="Travel Bill Pro product tour: booking confirmed, driver assigned and payment marked paid" width="1280" height="720" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </picture>
                <span className="absolute inset-0 bg-ink-900/10 transition-colors duration-300 group-hover:bg-ink-900/20" aria-hidden="true" />
                <span className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center" aria-hidden="true">
                  <span className="absolute size-24 animate-ping rounded-full bg-accent/25 motion-reduce:hidden" />
                  <span className="relative flex size-20 items-center justify-center rounded-full bg-accent text-white shadow-[var(--shadow-accent)] transition-transform duration-300 group-hover:scale-110 sm:size-24">
                    <Play className="ml-1 size-8 fill-current sm:size-9" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm text-ink-900 backdrop-blur" aria-hidden="true">0:30 · Sound on</span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ============ Module marquee ============ */
const MARQUEE = FEATURES.slice(0, 8)
export function ModuleMarquee() {
  return (
    <div className="relative mt-20 overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]" aria-label="Modules included">
      <ul className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
        {[...MARQUEE, ...MARQUEE].map(({ icon: I, title }, i) => (
          <li key={i} aria-hidden={i >= MARQUEE.length} className="surface flex w-56 shrink-0 flex-col items-center gap-3 px-6 py-6">
            <span className="icon-circle"><I className="size-5" strokeWidth={1.7} /></span>
            <span className="text-[16px] text-ink-900">{title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ============ Mac-style window ============ */
export function MacWindow({ children, label, className = '' }) {
  return (
    <div className={`surface p-4 sm:p-6 ${className}`} role="img" aria-label={label}>
      <div className="mb-4 flex gap-2" aria-hidden="true">
        <span className="size-3 rounded-full bg-[#FF5F57]" /><span className="size-3 rounded-full bg-[#FEBC2E]" /><span className="size-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="overflow-hidden rounded-xl" aria-hidden="true"><ScaledScreen>{children}</ScaledScreen></div>
    </div>
  )
}

/* ============ Problem → fix ============ */
const OLD_TOOLS = [[NotebookPen, 'Registers', -6], [FileSpreadsheet, 'Excel', 4], [Calculator, 'Calculator', -3], [MessageCircle, 'WhatsApp', 5], [Receipt, 'Paper bills', -4], [PhoneCall, 'Phone calls', 3]]
const FIXED = [[CalendarCheck, 'Bookings'], [ReceiptIndianRupee, 'GST Billing'], [Car, 'Fleet & Drivers'], [Wallet, 'Payroll']]

export function ProblemFix() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionTitle title="Registers, Excel and WhatsApp" accent="holding your business back" />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="surface flex flex-col items-center px-6 py-12 text-center sm:px-12">
            <h3 className="text-2xl">Scattered tools slow you down</h3>
            <p className="mt-4 max-w-md text-ink-700">Copying trips into bills, calculating GST by hand and chasing payments on the phone is slow, error-prone and costs you money every month.</p>
            <div className="relative mt-12 grid w-full max-w-sm grid-cols-3 gap-x-4 gap-y-8" aria-hidden="true">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                <path d="M50 40 C 120 90, 180 10, 250 40 M50 160 C 110 110, 190 190, 250 160 M50 40 L 150 160 L 250 40" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 6" />
              </svg>
              {OLD_TOOLS.map(([I, label, rot]) => (
                <div key={label} className="relative flex flex-col items-center gap-2" style={{ transform: `rotate(${rot}deg)` }}>
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-ink-900 text-white shadow-lg"><I className="size-6" strokeWidth={1.6} /></span>
                  <span className="text-xs text-ink-500">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="surface flex flex-col items-center bg-gradient-to-br from-white to-accent-soft/60 px-6 py-12 text-center sm:px-12">
            <h3 className="text-2xl">Let's fix it</h3>
            <p className="mt-4 max-w-md text-ink-700">Run bookings, GST billing, fleet, drivers and payroll in one connected platform, with every number updated live.</p>
            <div className="relative mt-12 grid w-full max-w-sm grid-cols-2 gap-4">
              {FIXED.map(([I, label]) => (
                <div key={label} className="flex flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 shadow-[var(--shadow-soft)]">
                  <span className="icon-circle !size-10"><I className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
                  <span className="text-[15px]">{label}</span>
                </div>
              ))}
              <m.span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-accent text-white shadow-[var(--shadow-accent)]"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.3 }} aria-hidden="true">
                <Check className="size-8" strokeWidth={3} />
              </m.span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ============ Why choose (3 centered cards) ============ */
const WHY = [
  [Database, 'One source of truth', 'Every trip, invoice, driver and payment lives in one place. No more copying between notebooks, Excel and WhatsApp.'],
  [Zap, 'No more busywork', 'Close a trip and the GST invoice, WhatsApp message and ledger entry happen on their own. Payroll runs in one click.'],
  [ChartColumn, 'Decisions from real numbers', 'See revenue, profit per vehicle and pending payments live, and export CA-ready GST reports anytime.'],
]
export function WhyChoose() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionTitle title="Why choose Travel Bill Pro?" sub="Everything you need to run your travel business smoothly, built for how India actually travels." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {WHY.map(([I, t, d], i) => (
            <Reveal key={t} delay={i * 0.08} className="surface flex flex-col items-center px-6 py-8 text-center sm:px-8 sm:py-10">
              <span className="icon-circle"><I className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
              <h3 className="mt-6 text-xl">{t}</h3>
              <p className="mt-3 text-[15px] text-ink-700">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ Feature grid ============ */
export function FeatureGrid({ items = FEATURES, title = 'Everything your travel business needs', accent, sub }) {
  return (
    <section id="features" className="section scroll-mt-20">
      <div className="container-x">
        <SectionTitle title={title} accent={accent} sub={sub} />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: I, title: t, desc }, i) => (
            <Reveal key={t} delay={(i % 3) * 0.06} className="surface group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-8">
              <span className="icon-circle transition-colors group-hover:bg-accent group-hover:text-white"><I className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
              <h3 className="mt-6 text-xl">{t}</h3>
              <p className="mt-3 text-[15px] text-ink-700">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ Product tabs (segmented control + window) ============ */
export function ProductTabs() {
  const [i, setI] = useState(0)
  const { Screen, key, label } = SHOWCASE_SCREENS[i]
  const onKey = (e) => {
    if (e.key === 'ArrowRight') setI((v) => (v + 1) % SHOWCASE_SCREENS.length)
    if (e.key === 'ArrowLeft') setI((v) => (v - 1 + SHOWCASE_SCREENS.length) % SHOWCASE_SCREENS.length)
  }
  return (
    <section id="product" className="section scroll-mt-20">
      <div className="container-x">
        <SectionTitle title="One login." accent="Every part of your business." sub="Six workspaces that share one database, so nothing is ever typed twice." />
        <Reveal className="mt-12 flex justify-center">
          <div role="tablist" aria-label="Product workspaces" onKeyDown={onKey} className="no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-2xl bg-white p-1.5 shadow-[var(--shadow-soft)]">
            {SHOWCASE_SCREENS.map((s, idx) => (
              <button key={s.key} role="tab" id={`tab-${s.key}`} aria-selected={idx === i} aria-controls="tab-panel" tabIndex={idx === i ? 0 : -1} onClick={() => setI(idx)}
                className={`min-h-11 shrink-0 rounded-xl px-5 text-[15px] transition ${idx === i ? 'bg-accent text-white shadow-[var(--shadow-accent)]' : 'text-ink-700 hover:text-ink-900'}`}>
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div id="tab-panel" role="tabpanel" aria-labelledby={`tab-${key}`} className="mt-10">
          <AnimatePresence mode="wait" initial={false}>
            <m.div key={key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
              <MacWindow label={`${label} workspace in Travel Bill Pro`}><Screen /></MacWindow>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

/* ============ Stats band ============ */
export function StatsBand() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-x">
        <Reveal className="surface grid grid-cols-2 gap-y-10 px-6 py-10 lg:grid-cols-4 lg:divide-x lg:divide-ink-900/6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl text-ink-900 sm:text-5xl"><Counter {...s} /></div>
              <div className="mt-2 text-[15px] text-ink-500">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ============ Testimonials ============ */
export function Testimonials({ count = 3 }) {
  return (
    <section className="section">
      <div className="container-x">
        <SectionTitle title="Loved by travel operators" accent="across India" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, count).map((t, i) => (
            <Reveal as="figure" key={t.name} delay={i * 0.08} className="surface flex flex-col p-6 sm:p-8">
              <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">{Array.from({ length: 5 }).map((_, s) => <Star key={s} className="size-4 fill-gold text-gold" aria-hidden="true" />)}</div>
              <blockquote className="mt-5 flex-1 text-[16px] text-ink-700">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent-soft text-sm font-medium text-accent">{t.name.split(' ').map((x) => x[0]).slice(0, 2).join('')}</span>
                <div><div className="font-medium">{t.name}</div><div className="text-sm text-ink-500">{t.role} · {t.city}</div></div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ Pricing cards ============ */
export function PricingCards() {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-3">
      {PRICING.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.08} className={`relative flex h-full flex-col rounded-[24px] p-6 min-[360px]:p-8 sm:p-10 ${p.highlight ? 'bg-accent text-white shadow-[var(--shadow-accent)]' : 'surface'}`}>
          {p.highlight && <span className="absolute top-6 right-6 rounded-full bg-white/15 px-3 py-1 text-xs tracking-wide">Most popular</span>}
          <h3 className={`text-xl ${p.highlight ? 'text-white' : ''}`}>{p.name}</h3>
          <p className={`mt-2 text-[15px] ${p.highlight ? 'text-white/85' : 'text-ink-700'}`}>{p.blurb}</p>
          <div className="mt-8 flex items-end gap-1.5">
            {p.price
              ? <><span className="text-5xl tracking-tight">₹{p.price.toLocaleString('en-IN')}</span><span className={`mb-1.5 ${p.highlight ? 'text-white/85' : 'text-ink-500'}`}>/month</span></>
              : <span className="text-4xl tracking-tight">Custom</span>}
          </div>
          <p className={`mt-1 text-sm ${p.highlight ? 'text-white/80' : 'text-ink-500'}`}>{p.price ? '+ 18% GST, billed monthly' : 'Tailored to your fleet & branches'}</p>
          <ul className="mt-8 flex flex-1 flex-col gap-3.5">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[15px]">
                <Check className={`mt-0.5 size-5 shrink-0 ${p.highlight ? 'text-white' : 'text-accent'}`} strokeWidth={2.2} aria-hidden="true" />
                <span className={p.highlight ? 'text-white' : 'text-ink-700'}>{f}</span>
              </li>
            ))}
          </ul>
          <Button to={p.price ? '/demo' : '/contact'} variant={p.highlight ? 'light' : 'secondary'} className="mt-10 w-full !min-h-12">{p.cta}</Button>
        </Reveal>
      ))}
    </div>
  )
}

/* ============ FAQ ============ */
export function FAQList({ items = FAQ, title = 'Frequently asked questions' }) {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section scroll-mt-20">
      <div className="container-x max-w-3xl">
        <SectionTitle title={title} />
        <div className="mt-12 flex flex-col gap-3">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={Math.min(i, 4) * 0.04} className="surface overflow-hidden">
                <h3 className="text-[17px]">
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-4 text-left">
                    {f.q}
                    <Plus className={`size-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div id={`faq-${i}`} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
                      <p className="px-6 pb-6 text-[15px] text-ink-700">{f.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============ CTA block ============ */
export function CTABlock() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[28px] bg-accent px-5 py-12 text-center text-white shadow-[var(--shadow-accent)] sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full bg-black/10 blur-3xl" aria-hidden="true" />
          <h2 className="relative mx-auto max-w-2xl text-[28px] text-white min-[360px]:text-[34px] sm:text-5xl">Ready to run your travel business from one place?</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/90">Join 500+ taxi operators, tour agencies and fleet owners who bill faster and get paid sooner with Travel Bill Pro.</p>
          <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/demo" variant="light" className="!min-h-13 !px-7">Book Free Demo</Button>
            <Button href={SITE.whatsappHref} variant="outline-light" className="!min-h-13 !px-7" target="_blank" rel="noopener noreferrer">Talk to Sales</Button>
          </div>
          <p className="relative mt-7 flex items-center justify-center gap-2 text-sm text-white/85"><ShieldCheck className="size-4" aria-hidden="true" />No credit card required. Cancel anytime.</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- shared title ---------- */
export function SectionTitle({ title, accent, sub, align = 'center' }) {
  return (
    <Reveal className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-[28px] min-[360px]:text-[34px] sm:text-5xl">{title}{accent && <><br /><span className="text-accent">{accent}</span></>}</h2>
      {sub && <p className={`mt-5 text-lg text-ink-700 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>{sub}</p>}
    </Reveal>
  )
}

