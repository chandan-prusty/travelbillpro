import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { PageHeader, CTABlock } from '../components/blocks'
import { Breadcrumbs, RelatedLinks } from '../components/seo-ui'
import { ARTICLES } from '../data/articles'

const fmt = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default function Blog() {
  return (
    <>
      <PageHeader breadcrumb={<Breadcrumbs path="/blog" />} title="Guides for" accent="smarter travel billing."
        sub="Practical advice on travel billing software, GST invoices, choosing travel agency software and moving your business off Excel." />
      <section className="pb-20 sm:pb-28" aria-label="Articles">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {ARTICLES.map((a) => (
            <article key={a.path} className="surface flex flex-col p-8 sm:p-10">
              <p className="flex items-center gap-3 text-sm text-ink-500">
                <time dateTime={a.published}>{fmt(a.published)}</time>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1"><Clock className="size-3.5" aria-hidden="true" />{a.readMins} min read</span>
              </p>
              <h2 className="mt-4 text-2xl"><Link to={a.path} className="hover:text-accent">{a.title}</Link></h2>
              <p className="mt-3 flex-1 text-ink-700">{a.excerpt}</p>
              <Link to={a.path} className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start text-accent" aria-label={`Read: ${a.title}`}>Read guide <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
      <RelatedLinks title="Explore the software" paths={['/travel-billing-software', '/travel-agency-software', '/travel-billing-management-software']} />
      <CTABlock />
    </>
  )
}
