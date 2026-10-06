import { Target, Eye } from 'lucide-react'
import { Reveal } from '../components/ui'
import { PageHeader, SectionTitle, StatsBand, CTABlock } from '../components/blocks'
import { TIMELINE } from '../data/content'

export default function About() {
  return (
    <>
      <PageHeader pill="About us" title="Empowering India's travel businesses" accent="with smart technology." />

      <section className="section !pt-6">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-4xl">It started with a notebook full of bills.</h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5 text-lg text-ink-700">
            <p>In 2021 we sat with a Hyderabad cab operator running 20 vehicles. The first week of every month vanished into handwritten invoices, GST calculations and phone calls chasing payments.</p>
            <p>Existing software was built for large enterprises, too complex for his staff, or didn't understand travel billing: per-km rates, driver bata, toll add-ons and monthly corporate statements.</p>
            <p>So we built Travel Bill Pro: as simple as WhatsApp, powerful enough to run an entire travel enterprise. Today more than 500 businesses rely on it every day.</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[[Target, 'Our mission', "Empowering India's travel businesses with smart technology, so owners spend less time on paperwork and more time growing."],
            [Eye, 'Our vision', 'To be the operating system behind every travel business in India, from a single-cab owner in Warangal to a 1,000-vehicle fleet in Bengaluru.']].map(([I, t, d], i) => (
            <Reveal key={t} delay={i * 0.08} className="surface p-10">
              <span className="icon-circle"><I className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
              <h3 className="mt-6 text-2xl">{t}</h3>
              <p className="mt-3 text-lg text-ink-700">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsBand />

      <section className="section !pt-0">
        <div className="container-x">
          <SectionTitle title="Our journey" />
          <ol className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
            {TIMELINE.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 0.05} className="surface flex flex-col gap-2 p-7 sm:flex-row sm:gap-8">
                <span className="w-16 shrink-0 text-2xl text-accent">{t.year}</span>
                <div><h3 className="text-xl">{t.title}</h3><p className="mt-1 text-[15px] text-ink-700">{t.desc}</p></div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <CTABlock />
    </>
  )
}
