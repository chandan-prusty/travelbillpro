import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { Button, Reveal } from '../components/ui'
import { PageHeader, SectionTitle, MacWindow, FAQList, CTABlock } from '../components/blocks'
import { Breadcrumbs, RelatedLinks } from '../components/seo-ui'
import { DashboardScreen, InvoicesScreen, CrmScreen } from '../components/mockups/Screens'
import { LANDING_PAGES } from '../data/landing'
import { COMPARISON, STEPS } from '../data/content'

const SCREENS = {
  '/travel-billing-software': [InvoicesScreen, 'GST invoices list in Travel Bill Pro travel billing software'],
  '/travel-agency-software': [CrmScreen, 'Customer CRM in Travel Bill Pro travel agency software'],
  '/travel-billing-management-software': [DashboardScreen, 'Revenue, pending payments and GST overview in Travel Bill Pro'],
}

export default function Landing({ path }) {
  const p = LANDING_PAGES.find((x) => x.path === path)
  const [Screen, screenLabel] = SCREENS[path]
  return (
    <>
      <PageHeader breadcrumb={<Breadcrumbs path={path} />} title={p.h1} accent={p.h1Accent} sub={p.intro}>
        <Button to="/demo" className="!min-h-12 !px-7">Book a Free Demo</Button>
        <Button to="/pricing" variant="secondary" className="!min-h-12 !px-7">See pricing</Button>
      </PageHeader>

      {/* Direct answer block (AEO / GEO) */}
      <section aria-labelledby="answer-title" className="pb-16">
        <div className="container-x">
          <div className="surface mx-auto max-w-3xl p-8 sm:p-10">
            <h2 id="answer-title" className="text-2xl sm:text-3xl">What is {p.keyword.toLowerCase()}?</h2>
            <p className="mt-4 text-lg text-ink-700">{p.answer}</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x"><Reveal y={30}><MacWindow label={screenLabel}><Screen /></MacWindow></Reveal></div>
      </section>

      <section className="section !pt-0" aria-labelledby="benefits-title">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center"><h2 id="benefits-title" className="text-[34px] sm:text-5xl">Why businesses choose Travel Bill Pro as their <span className="text-accent">{p.keyword.toLowerCase()}</span></h2></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.06} className="surface p-8">
                <Check className="size-6 text-accent" strokeWidth={2.2} aria-hidden="true" />
                <h3 className="mt-4 text-xl">{b.title}</h3>
                <p className="mt-2 text-[15px] text-ink-700">{b.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container-x mx-auto flex max-w-3xl flex-col gap-14">
          {p.sections.map((s) => (
            <Reveal key={s.h2}>
              <h2 className="text-3xl sm:text-4xl">{s.h2}</h2>
              {s.paras?.map((t) => <p key={t} className="mt-4 text-lg text-ink-700">{t}</p>)}
              {s.bullets && (
                <ul className="mt-5 flex flex-col gap-3">
                  {s.bullets.map((b) => <li key={b} className="flex gap-3 text-ink-700"><Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />{b}</li>)}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section !pt-0" aria-labelledby="steps-title">
        <div className="container-x">
          <SectionTitle title="Get started in" accent="four simple steps." />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="surface p-7">
                <span className="text-4xl text-accent/70" aria-hidden="true">{s.n}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-[15px] text-ink-700">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section !pt-0" aria-labelledby="compare-title">
        <div className="container-x">
          <h2 id="compare-title" className="text-center text-[34px] sm:text-5xl">Manual billing vs <span className="text-accent">Travel Bill Pro</span></h2>
          <div className="surface mx-auto mt-12 max-w-4xl overflow-hidden">
            <table className="w-full text-left">
              <caption className="sr-only">Manual billing compared with Travel Bill Pro</caption>
              <thead><tr className="text-sm text-ink-500">
                <th scope="col" className="px-6 py-4 font-normal">Task</th>
                <th scope="col" className="hidden px-4 py-4 font-normal sm:table-cell">Manual / Excel</th>
                <th scope="col" className="bg-accent-soft/60 px-4 py-4 font-medium text-accent">Travel Bill Pro</th>
              </tr></thead>
              <tbody>
                {COMPARISON.slice(0, 7).map((r) => (
                  <tr key={r.row} className="border-t border-ink-900/6">
                    <th scope="row" className="px-6 py-3.5 font-normal">{r.row}</th>
                    <td className="hidden px-4 py-3.5 text-[15px] text-ink-500 sm:table-cell"><span className="flex items-center gap-2"><X className="size-4 shrink-0 text-danger" aria-label="Manual" />{r.old}</span></td>
                    <td className="bg-accent-soft/40 px-4 py-3.5 text-[15px]"><span className="flex items-center gap-2"><Check className="size-4 shrink-0 text-accent" aria-label="Automated" />{r.tbp}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-ink-700">See every module on the <Link to="/features" className="text-accent underline underline-offset-4 hover:decoration-2">features page</Link>, or check <Link to="/pricing" className="text-accent underline underline-offset-4 hover:decoration-2">plans and pricing</Link>.</p>
        </div>
      </section>

      <FAQList items={p.faq} title={`${p.keyword}: frequently asked questions`} />
      <RelatedLinks paths={p.related} />
      <CTABlock />
    </>
  )
}
