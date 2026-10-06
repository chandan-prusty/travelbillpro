import { Clock } from 'lucide-react'
import { Reveal } from '../components/ui'
import { PageHeader } from '../components/blocks'
import { LeadForm, CONTACT_CARDS } from '../components/forms'

export default function Contact() {
  return (
    <>
      <PageHeader pill="Contact" title="Let's talk about" accent="your business." sub="Questions about pricing, moving from Excel or a custom setup? We're one message away." />
      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col gap-4">
            {CONTACT_CARDS.map(({ icon: I, label, value, href, ext }, i) => {
              const inner = (<>
                <span className="icon-circle shrink-0"><I className="size-5" aria-hidden="true" /></span>
                <div className="min-w-0"><div className="text-sm text-ink-500">{label}</div><div className="text-[17px]">{value.includes('@') ? <>{value.split('@')[0]}@<wbr />{value.split('@')[1]}</> : value}</div></div>
              </>)
              return (
                <Reveal key={label} delay={i * 0.05}>
                  {href
                    ? <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="surface flex items-center gap-4 p-5 transition hover:-translate-y-0.5">{inner}</a>
                    : <div className="surface flex items-center gap-4 p-5">{inner}</div>}
                </Reveal>
              )
            })}
            <Reveal delay={0.2} className="surface flex gap-4 p-5">
              <span className="icon-circle shrink-0"><Clock className="size-5" aria-hidden="true" /></span>
              <div><div className="text-sm text-ink-500">Support hours</div><div className="text-[17px]">Mon–Sat, 9 AM – 8 PM IST</div><div className="mt-1 text-sm text-ink-500">English, Telugu & Hindi</div></div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="surface p-6 sm:p-10">
            <h2 className="text-3xl">Book your free demo</h2>
            <p className="mt-2 mb-8 text-ink-700">30 minutes, tailored to your business. No obligation.</p>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
