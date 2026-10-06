import { useParams, Link } from 'react-router-dom'
import { Check, Clock } from 'lucide-react'
import { Button } from '../components/ui'
import { FAQList, CTABlock } from '../components/blocks'
import { Breadcrumbs, RelatedLinks } from '../components/seo-ui'
import { ARTICLES } from '../data/articles'
import NotFound from './NotFound'

const fmt = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default function Article() {
  const { slug } = useParams()
  const a = ARTICLES.find((x) => x.path === `/blog/${slug}`)
  if (!a) return <NotFound />
  return (
    <>
      <article>
        <header className="pt-32 pb-10 sm:pt-40">
          <div className="container-x max-w-3xl text-center">
            <Breadcrumbs path={a.path} />
            <h1 className="text-[36px] sm:text-5xl">{a.title}</h1>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm whitespace-nowrap text-ink-500">
              <span>By Travel Bill Pro team</span><span aria-hidden="true">·</span>
              <time dateTime={a.published}>{fmt(a.published)}</time><span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1"><Clock className="size-3.5" aria-hidden="true" />{a.readMins} min read</span>
            </p>
          </div>
        </header>
        <div className="container-x max-w-3xl pb-16">
          <div className="surface p-6 sm:p-12">
            <p className="text-xl text-ink-700">{a.excerpt}</p>
            {a.sections.map((s) => (
              <section key={s.h2} className="mt-12">
                <h2 className="text-3xl">{s.h2}</h2>
                {s.paras?.map((t) => <p key={t} className="mt-4 text-[17px] leading-relaxed text-ink-700">{t}</p>)}
                {s.bullets && (
                  <ul className="mt-5 flex flex-col gap-3">
                    {s.bullets.map((b) => <li key={b} className="flex gap-3 text-[17px] text-ink-700"><Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />{b}</li>)}
                  </ul>
                )}
                {s.table && (
                  <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-ink-900/6">
                    <table className="w-full min-w-[560px] text-left text-[15px]">
                      <thead className="bg-canvas"><tr>{s.table.head.map((h) => <th key={h} scope="col" className="px-4 py-3 font-medium">{h}</th>)}</tr></thead>
                      <tbody>{s.table.rows.map((r) => (
                        <tr key={r[0]} className="border-t border-ink-900/6">
                          <th scope="row" className="px-4 py-3 font-normal">{r[0]}</th>
                          <td className="px-4 py-3 text-ink-500">{r[1]}</td>
                          <td className="px-4 py-3 text-ink-900">{r[2]}</td>
                        </tr>
                      ))}</tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
            <aside className="mt-14 rounded-2xl bg-accent-soft p-8">
              <h2 className="text-2xl">Try Travel Bill Pro</h2>
              <p className="mt-2 text-ink-700">See how <Link to="/travel-billing-software" className="text-accent underline underline-offset-4 hover:decoration-2">travel billing software</Link> handles your own trips in a free 30-minute demo.</p>
              <Button to="/demo" className="mt-6">Book a Free Demo</Button>
            </aside>
          </div>
        </div>
      </article>
      {a.faq?.length > 0 && <FAQList items={a.faq} title="Frequently asked questions" />}
      <RelatedLinks paths={a.related} />
      <CTABlock />
    </>
  )
}
