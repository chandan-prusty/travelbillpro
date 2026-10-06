import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, ReceiptIndianRupee, Briefcase, ChartColumn, BookOpen } from 'lucide-react'
import { Reveal } from './ui'
import { SectionTitle } from './blocks'
import { breadcrumbTrail } from '../seo/meta'
import { LANDING_PAGES } from '../data/landing'
import { ARTICLES } from '../data/articles'

/** Visible breadcrumb trail (mirrors the BreadcrumbList schema). */
export function Breadcrumbs({ path }) {
  const trail = breadcrumbTrail(path)
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="mx-auto flex max-w-full items-center justify-center gap-1 text-sm text-ink-500">
        {trail.map((c, i) => (
          <li key={c.path} className={`flex items-center gap-1 ${i === trail.length - 1 ? 'min-w-0' : 'shrink-0'}`}>
            {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
            {i === trail.length - 1
              ? <span aria-current="page" className="truncate text-ink-700">{c.name}</span>
              : <Link to={c.path} className="hover:text-accent">{c.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

const ALL = [
  ...LANDING_PAGES.map((p) => ({ path: p.path, title: p.keyword, desc: p.metaDescription, kind: 'Software' })),
  ...ARTICLES.map((a) => ({ path: a.path, title: a.title, desc: a.excerpt, kind: 'Guide' })),
  { path: '/pricing', title: 'Travel Bill Pro pricing', desc: 'Plans from ₹999 per month with free onboarding and a free demo.', kind: 'Pricing' },
  { path: '/features', title: 'All Travel Bill Pro features', desc: 'Bookings, GST billing, fleet, drivers, payroll, CRM and reports.', kind: 'Product' },
]

/** "Related reading" cards for internal linking. */
export function RelatedLinks({ paths, title = 'Related reading' }) {
  const items = paths.map((p) => ALL.find((x) => x.path === p)).filter(Boolean)
  if (!items.length) return null
  return (
    <section className="section !pt-0" aria-labelledby="related-title">
      <div className="container-x">
        <h2 id="related-title" className="text-center text-3xl sm:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <Link key={it.path} to={it.path} className="surface group flex flex-col p-7 transition hover:-translate-y-1">
              <span className="text-xs tracking-wider text-accent uppercase">{it.kind}</span>
              <span className="mt-3 text-xl text-ink-900">{it.title}</span>
              <span className="mt-2 flex-1 text-[15px] text-ink-700">{it.desc}</span>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] text-accent">Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const ICONS = { '/travel-billing-software': ReceiptIndianRupee, '/travel-agency-software': Briefcase, '/travel-billing-management-software': ChartColumn }

/** Homepage hub linking to the keyword pages and guides (keyword-rich internal anchors). */
export function SoftwareLinks() {
  return (
    <section className="section" aria-labelledby="software-hub">
      <div className="container-x">
        <SectionTitle title="One platform," accent="three ways to run a better travel business." sub="Whether you are looking for travel billing software, travel agency software or complete billing management, Travel Bill Pro covers it." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {LANDING_PAGES.map((p, i) => {
            const I = ICONS[p.path]
            return (
              <Reveal key={p.path} delay={i * 0.06}>
                <Link to={p.path} className="surface group flex h-full flex-col p-8 transition hover:-translate-y-1">
                  <span className="icon-circle"><I className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
                  <h3 className="mt-6 text-xl">{p.keyword}</h3>
                  <p className="mt-3 flex-1 text-[15px] text-ink-700">{p.answer.split('. ')[0]}.</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[15px] text-accent">Explore {p.keyword.toLowerCase()} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[20px] bg-white/60 p-6 sm:flex-row sm:items-center">
          <p className="flex items-center gap-3 text-ink-700"><BookOpen className="size-5 text-accent" aria-hidden="true" />New to travel billing? Read our guides on GST invoices, choosing software and moving off Excel.</p>
          <Link to="/blog" className="btn btn-secondary shrink-0">Browse guides</Link>
        </Reveal>
      </div>
    </section>
  )
}
