import { useState } from 'react'
import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { ArrowRight, Loader2, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'
import { Button, WhatsAppIcon } from './ui'
import { SITE } from '../data/site'

export const BUSINESS_OPTIONS = ['Taxi Operator', 'Tempo Traveller Operator', 'Tour Agency', 'Corporate Travel', 'School Transport', 'Employee Transport', 'Airport Taxi', 'Luxury Fleet', 'Other']
export const FLEET_OPTIONS = ['1–5 vehicles', '6–15 vehicles', '16–50 vehicles', '51–150 vehicles', '150+ vehicles']

const EMPTY = { name: '', business: '', phone: '', email: '', type: '', fleet: '', message: '' }
const validators = {
  name: (v) => (v.trim().length < 2 ? 'Please enter your full name.' : ''),
  business: (v) => (v.trim().length < 2 ? 'Please enter your business name.' : ''),
  phone: (v) => (/^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(v.trim()) ? '' : 'Enter a valid 10-digit Indian mobile number.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email, e.g. name@business.com'),
  type: (v) => (v ? '' : 'Please choose your business type.'),
  fleet: (v) => (v ? '' : 'Please choose your fleet size.'),
}

function Field({ label, name, error, optional, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink-900">{label}{optional && <span className="font-normal text-ink-500"> (optional)</span>}</label>
      {children}
      {error && <p id={`${name}-err`} className="text-[13px] text-danger" role="alert">{error}</p>}
    </div>
  )
}

const selectBg = "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236b7280%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-10"

/**
 * POSTs JSON to VITE_LEAD_ENDPOINT when configured; otherwise hands the enquiry to WhatsApp
 * (prefilled) so no lead is silently lost.
 */
export function LeadForm({ extra, submitLabel = 'Book Free Demo' }) {
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [channel, setChannel] = useState('api')

  const set = (k) => (e) => {
    setV((s) => ({ ...s, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: validators[k]?.(e.target.value) || '' }))
  }
  const blur = (k) => () => validators[k] && setErrors((er) => ({ ...er, [k]: validators[k](v[k]) }))
  const a11y = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })

  const submit = async (e) => {
    e.preventDefault()
    const next = Object.fromEntries(Object.keys(validators).map((k) => [k, validators[k](v[k])]))
    setErrors(next)
    const bad = Object.keys(next).find((k) => next[k])
    if (bad) { document.getElementById(bad)?.focus(); return }

    const endpoint = import.meta.env.VITE_LEAD_ENDPOINT
    setStatus('sending')
    if (endpoint) {
      try {
        const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...v, ...(extra || {}), source: location.pathname, submittedAt: new Date().toISOString() }) })
        if (!res.ok) throw new Error(String(res.status))
        setChannel('api'); setStatus('done')
      } catch { setStatus('error') }
      return
    }
    const lines = ['Hi Travel Bill Pro, I would like a free demo.', `Name: ${v.name}`, `Business: ${v.business}`, `Phone: ${v.phone}`, `Email: ${v.email}`, `Type: ${v.type}`, `Fleet: ${v.fleet}`, extra?.slot && `Preferred slot: ${extra.slot}`, v.message && `Message: ${v.message}`].filter(Boolean)
    window.open(`https://wa.me/${SITE.phoneHref.replace(/\D/g, '')}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
    setChannel('whatsapp'); setStatus('done')
  }

  if (status === 'done') {
    return (
      <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center py-12 text-center" role="status">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent-soft text-accent"><CheckCircle2 className="size-8" aria-hidden="true" /></span>
        <h3 className="mt-6 text-2xl">{channel === 'whatsapp' ? 'Almost there!' : 'Demo request received'}</h3>
        <p className="mt-3 max-w-sm text-ink-700">
          {channel === 'whatsapp'
            ? 'WhatsApp opened with your details filled in. Tap send and our team will confirm your demo slot.'
            : `Thanks ${v.name.split(' ')[0]}! We'll call you on ${v.phone} within one business hour.`}
        </p>
        <button onClick={() => { setStatus('idle'); setV(EMPTY) }} className="mt-6 text-sm text-accent underline-offset-4 hover:underline">Submit another enquiry</button>
      </m.div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}><input id="name" autoComplete="name" className="field" value={v.name} onChange={set('name')} onBlur={blur('name')} placeholder="Ravi Kumar" {...a11y('name')} /></Field>
        <Field label="Business name" name="business" error={errors.business}><input id="business" autoComplete="organization" className="field" value={v.business} onChange={set('business')} onBlur={blur('business')} placeholder="Deccan Cabs" {...a11y('business')} /></Field>
        <Field label="Phone" name="phone" error={errors.phone}><input id="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" value={v.phone} onChange={set('phone')} onBlur={blur('phone')} placeholder="98xxx xxxxx" {...a11y('phone')} /></Field>
        <Field label="Email" name="email" error={errors.email}><input id="email" type="email" inputMode="email" autoComplete="email" className="field" value={v.email} onChange={set('email')} onBlur={blur('email')} placeholder="you@business.com" {...a11y('email')} /></Field>
        <Field label="Business type" name="type" error={errors.type}>
          <select id="type" className={`field ${selectBg}`} value={v.type} onChange={set('type')} onBlur={blur('type')} {...a11y('type')}>
            <option value="">Select type</option>{BUSINESS_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field label="Vehicles count" name="fleet" error={errors.fleet}>
          <select id="fleet" className={`field ${selectBg}`} value={v.fleet} onChange={set('fleet')} onBlur={blur('fleet')} {...a11y('fleet')}>
            <option value="">Select fleet size</option>{FLEET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Message" name="message" optional>
        <textarea id="message" rows={4} className="field resize-none" value={v.message} onChange={set('message')} placeholder="Tell us how you bill today, e.g. 12 cabs, monthly corporate billing in Excel…" />
      </Field>
      {status === 'error' && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-danger" role="alert">Something went wrong. Please try again, or message us on WhatsApp at {SITE.phoneDisplay}.</p>}
      <Button type="submit" disabled={status === 'sending'} className="w-full !min-h-13 text-base disabled:opacity-70">
        {status === 'sending' ? <><Loader2 className="size-5 animate-spin" aria-hidden="true" />Sending…</> : <>{submitLabel}<ArrowRight className="size-4" aria-hidden="true" /></>}
      </Button>
      <p className="text-center text-xs text-ink-500">By submitting you agree to our <Link to="/privacy" className="text-accent underline underline-offset-2">Privacy Policy</Link>. We never share your data.</p>
    </form>
  )
}

export const CONTACT_CARDS = [
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: WhatsAppIcon, label: 'WhatsApp', value: 'Chat with our team', href: SITE.whatsappHref, ext: true },
  { icon: Phone, label: 'Call', value: SITE.phoneDisplay, href: SITE.phoneHref },
  { icon: MapPin, label: 'Office', value: SITE.location },
]
