import { Check, X } from 'lucide-react'
import { Seo } from '../components/Layout'
import { Button, Reveal } from '../components/ui'
import { PageHeader, SectionTitle, Testimonials, CTABlock } from '../components/blocks'
import { BUSINESS_TYPES, STEPS, COMPARISON } from '../data/content'

export default function Solutions() {
  return (
    <>
      <Seo title="Solutions for Taxi, Tour & Fleet Businesses" path="/solutions"
        description="Travel Bill Pro solutions for taxi operators, tempo travellers, tour agencies, corporate travel, school & employee transport, airport taxis and luxury fleets." />
      <PageHeader pill="Solutions" title="Built for the way" accent="Indian travel works."
        sub="Per-km, package, monthly B2B or route-wise billing. Travel Bill Pro fits your business model.">
        <Button to="/demo" className="!min-h-12 !px-7">Get a tailored demo</Button>
      </PageHeader>

      <section className="section !pt-10">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUSINESS_TYPES.map(({ icon: I, title, desc }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.06} className="surface p-7 transition duration-300 hover:-translate-y-1">
              <span className="icon-circle"><I className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
              <h3 className="mt-6 text-xl">{title}</h3>
              <p className="mt-2 text-[15px] text-ink-700">{desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="how" className="section scroll-mt-20">
        <div className="container-x">
          <SectionTitle title="Live in" accent="four simple steps." sub="Most businesses send their first GST invoice within 30 minutes of signing up." />
          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.08} className="surface p-8">
                <span className="text-5xl text-accent/25">{s.n}</span>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-[15px] text-ink-700">{s.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="compare" className="section scroll-mt-20">
        <div className="container-x">
          <SectionTitle title="Travel Bill Pro vs" accent="the traditional way." />
          <Reveal className="surface mx-auto mt-14 max-w-4xl overflow-hidden">
            <table className="w-full text-left">
              <caption className="sr-only">Travel Bill Pro compared with manual methods</caption>
              <thead>
                <tr className="text-sm text-ink-500">
                  <th scope="col" className="px-6 py-5 font-normal">Capability</th>
                  <th scope="col" className="hidden px-4 py-5 font-normal sm:table-cell">Traditional</th>
                  <th scope="col" className="bg-accent-soft/60 px-4 py-5 font-medium text-accent">Travel Bill Pro</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.row} className="border-t border-ink-900/6">
                    <th scope="row" className="px-6 py-4 font-normal">{r.row}</th>
                    <td className="hidden px-4 py-4 text-[15px] text-ink-500 sm:table-cell"><span className="flex items-center gap-2"><X className="size-4 shrink-0 text-danger" aria-label="No" />{r.old}</span></td>
                    <td className="bg-accent-soft/40 px-4 py-4 text-[15px]"><span className="flex items-center gap-2"><Check className="size-4 shrink-0 text-accent" strokeWidth={2.5} aria-label="Yes" />{r.tbp}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
      <Testimonials />
      <CTABlock />
    </>
  )
}
