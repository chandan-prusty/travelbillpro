import { useEffect, useState } from 'react'
import { Check, Clock, Video, Languages } from 'lucide-react'
import { Reveal } from '../components/ui'
import { LeadForm } from '../components/forms'

const AGENDA = [
  'A walkthrough using your real routes, rates and vehicles',
  'Live GST invoice creation and WhatsApp sharing',
  'Driver payroll, fleet reminders and reports',
  'A free migration plan for your Excel or Tally data',
]
const SLOTS = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM', '6:30 PM']

function nextWorkingDays(n) {
  const out = []
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  while (out.length < n) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0) out.push(new Date(d)) }
  return out
}

export default function Demo() {
  // Dates depend on the visitor's clock, so compute them after mount (prerendered HTML can't know today's date).
  const [days, setDays] = useState([])
  useEffect(() => setDays(nextWorkingDays(6)), [])
  const [day, setDay] = useState(0)
  const [slot, setSlot] = useState(null)
  const dayLabel = days[day]?.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }) ?? ''

  return (
    <>
      <section className="pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal className="pill"><span className="size-2 rounded-full bg-accent" />Free live demo</Reveal>
            <Reveal as="h1" delay={0.05} className="mt-7 text-[40px] sm:text-[56px]">See Travel Bill Pro<br /><span className="text-accent">run your business.</span></Reveal>
            <Reveal as="p" delay={0.1} className="mt-6 text-lg text-ink-700">A 30-minute, one-on-one session with a product specialist. No sales pressure, just your workflow on a better system.</Reveal>
            <Reveal as="ul" delay={0.15} className="mt-8 flex flex-col gap-4">
              {AGENDA.map((a) => <li key={a} className="flex gap-3 text-ink-700"><Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />{a}</li>)}
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
              {[[Clock, '30 minutes'], [Video, 'Google Meet or call'], [Languages, 'English, Telugu, Hindi']].map(([I, t]) => (
                <span key={t} className="pill"><I className="size-4 text-accent" aria-hidden="true" />{t}</span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="surface p-6 sm:p-10">
            <h2 className="text-2xl">Pick a time <span className="text-base text-ink-500">(IST)</span></h2>
            <div className="no-scrollbar -mx-1 mt-5 flex min-h-[88px] gap-2 overflow-x-auto px-1 pb-1" role="radiogroup" aria-label="Demo date">
              {days.map((d, i) => (
                <button key={d.toISOString()} role="radio" aria-checked={day === i} onClick={() => setDay(i)}
                  className={`flex min-w-[68px] shrink-0 flex-col items-center rounded-2xl px-3 py-3 transition ${day === i ? 'bg-accent text-white shadow-[var(--shadow-accent)]' : 'bg-canvas text-ink-900 hover:text-accent'}`}>
                  <span className={`text-xs ${day === i ? 'text-white/85' : 'text-ink-500'}`}>{d.toLocaleDateString('en-IN', { weekday: 'short' })}</span>
                  <span className="text-xl">{d.getDate()}</span>
                  <span className={`text-xs ${day === i ? 'text-white/85' : 'text-ink-500'}`}>{d.toLocaleDateString('en-IN', { month: 'short' })}</span>
                </button>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Demo time">
              {SLOTS.map((s) => (
                <button key={s} role="radio" aria-checked={slot === s} onClick={() => setSlot(s)}
                  className={`min-h-11 rounded-xl text-[15px] transition ${slot === s ? 'bg-accent-soft text-accent shadow-[inset_0_0_0_1.5px_var(--color-accent)]' : 'bg-canvas text-ink-700 hover:text-accent'}`}>{s}</button>
              ))}
            </div>
            <p className="mt-3 text-sm text-ink-500" aria-live="polite">{slot ? <>Selected: <span className="text-ink-900">{dayLabel}, {slot}</span></> : 'Choose a slot, or skip it and we will call you to schedule.'}</p>
            <div className="my-8 h-px bg-ink-900/6" />
            <LeadForm extra={slot ? { slot: `${dayLabel}, ${slot} IST` } : undefined} submitLabel="Confirm Free Demo" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
