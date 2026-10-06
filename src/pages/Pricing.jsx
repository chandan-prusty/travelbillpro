import { Check, Minus } from 'lucide-react'
import { Reveal } from '../components/ui'
import { PageHeader, PricingCards, SectionTitle, FAQList, CTABlock } from '../components/blocks'

// Proposed plan limits — confirm before launch.
const MATRIX = [
  ['GST invoices', '✓', '✓', '✓'], ['Vehicles', 'Up to 5', 'Unlimited', 'Unlimited'], ['Invoices per month', 'For 5 vehicles', 'Unlimited', 'Unlimited'],
  ['UPI QR on invoices', '✓', '✓', '✓'], ['GSTR-1 / 3B reports', '—', '✓', '✓'], ['Driver payroll', '—', '✓', '✓'],
  ['Fleet document reminders', '—', '✓', '✓'], ['Customer CRM', '✓', '✓', '✓'], ['WhatsApp', 'Sharing', 'Automated', 'Automated'],
  ['AI business dashboard', '—', '✓', '✓'], ['Users', '2', '10', 'Unlimited'], ['Multi-branch', '—', '—', '✓'],
  ['White label & API', '—', '—', '✓'], ['Support', 'Email', 'Priority WhatsApp', 'Dedicated manager'],
]
const Cell = ({ v }) => v === '✓' ? <Check className="mx-auto size-5 text-accent" strokeWidth={2.4} aria-label="Included" />
  : v === '—' ? <Minus className="mx-auto size-5 text-ink-500/40" aria-label="Not included" /> : <span className="text-[15px] text-ink-700">{v}</span>

export default function Pricing() {
  return (
    <>
      <PageHeader pill="Pricing" title="Simple pricing," accent="no surprises." sub="Start small and upgrade anytime. Every plan includes free onboarding, Excel import and mobile apps." />
      <section className="pb-20 sm:pb-28" aria-labelledby="plans-title"><div className="container-x"><h2 id="plans-title" className="sr-only">Travel Bill Pro plans</h2><PricingCards /></div></section>

      <section className="section !pt-0">
        <div className="container-x">
          <SectionTitle title="Compare plans" />
          <Reveal className="surface mx-auto mt-12 max-w-5xl overflow-x-auto">
            <table className="w-full min-w-[620px] text-left">
              <caption className="sr-only">Plan comparison</caption>
              <thead><tr className="text-ink-500">
                <th scope="col" className="px-6 py-5 font-normal">Feature</th>
                {['Starter', 'Professional', 'Enterprise'].map((p) => <th key={p} scope="col" className={`px-4 py-5 text-center font-medium ${p === 'Professional' ? 'text-accent' : 'text-ink-900'}`}>{p}</th>)}
              </tr></thead>
              <tbody>
                {MATRIX.map(([f, a, b, c]) => (
                  <tr key={f} className="border-t border-ink-900/6">
                    <th scope="row" className="px-6 py-4 font-normal">{f}</th>
                    <td className="px-4 py-4 text-center"><Cell v={a} /></td>
                    <td className="bg-accent-soft/40 px-4 py-4 text-center"><Cell v={b} /></td>
                    <td className="px-4 py-4 text-center"><Cell v={c} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
      <FAQList />
      <CTABlock />
    </>
  )
}
