import { m } from 'framer-motion'
import { Monitor, Tablet, Smartphone, Wifi, Globe, RefreshCw, ShieldCheck, CheckCircle2, Cloud } from 'lucide-react'
import { Reveal, EASE } from './ui'
import { SectionTitle } from './blocks'
import { ScaledScreen } from './mockups/Frames'
import { DashboardScreen, InvoicesScreen } from './mockups/Screens'
import { MobilePayment } from './mockups/Mobile'

/* ---------- Device frames (clean, thin dark bezels) ---------- */
function DesktopFrame({ children }) {
  return (
    <div>
      <div className="rounded-[14px] bg-ink-900 p-[1.1%] shadow-[var(--shadow-lift)]">
        <div className="overflow-hidden rounded-[6px] bg-white">{children}</div>
      </div>
      {/* stand */}
      <div className="mx-auto h-[38px] w-[16%] bg-gradient-to-b from-[#D1D5DB] to-[#E5E7EB] [clip-path:polygon(18%_0,82%_0,100%_100%,0_100%)]" />
      <div className="mx-auto h-2 w-[30%] rounded-full bg-[#D1D5DB] shadow-[0_8px_16px_-8px_rgb(17_24_39/0.35)]" />
    </div>
  )
}

function TabletFrame({ children }) {
  return (
    <div className="rounded-[22px] bg-ink-900 p-[2.6%] shadow-[var(--shadow-lift)]">
      <div className="overflow-hidden rounded-[10px] bg-white">{children}</div>
    </div>
  )
}

function PhoneDevice({ children }) {
  return (
    <div className="relative rounded-[26px] bg-ink-900 p-[5%] shadow-[var(--shadow-lift)]">
      <span className="absolute top-[3.2%] left-1/2 z-10 h-[2.4%] w-[30%] -translate-x-1/2 rounded-full bg-ink-900" aria-hidden="true" />
      <div className="overflow-hidden rounded-[20px] bg-white">{children}</div>
    </div>
  )
}

function SyncBadge({ icon: I, title, sub, className, delay }) {
  return (
    <m.div className={`absolute z-30 hidden md:block ${className}`} aria-hidden="true"
      initial={{ opacity: 0, y: 12, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: EASE }}>
      <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-lift)]">
        <span className="flex size-9 items-center justify-center rounded-full bg-accent-soft text-accent"><I className="size-[18px]" /></span>
        <div className="text-left">
          <div className="text-[14px] text-ink-900">{title}</div>
          <div className="text-xs text-ink-500">{sub}</div>
        </div>
      </div>
    </m.div>
  )
}

const DEVICES = [
  { icon: Monitor, name: 'Desktop', desc: 'The full dashboard for your office team: bookings, GST billing, payroll and reports on a big screen.', tag: 'Best for office & accounts' },
  { icon: Tablet, name: 'Tablet', desc: 'Take bookings at the counter, airport desk or travel fair, and print or share invoices instantly.', tag: 'Best for front desk' },
  { icon: Smartphone, name: 'Mobile', desc: 'Create GST bills, collect UPI payments and check today\'s revenue while you are on the road.', tag: 'Best for owners on the move' },
]

const PERKS = [
  { icon: Wifi, title: 'Just needs internet', desc: 'Wi-Fi or mobile data is all it takes.' },
  { icon: Globe, title: 'Nothing to install', desc: 'Works in Chrome, Safari and Edge.' },
  { icon: RefreshCw, title: 'Live sync', desc: 'A bill made on your phone shows up in the office instantly.' },
  { icon: ShieldCheck, title: 'Safe in the cloud', desc: 'Lost your phone? Your data is backed up daily.' },
]

export function DeviceShowcase() {
  return (
    <section id="devices" className="section scroll-mt-20 overflow-hidden">
      <div className="container-x">
        <SectionTitle title="Your business on every screen." accent="Bill from anywhere."
          sub="Travel Bill Pro runs in the cloud. Open it on your office desktop, a tablet at the counter or your phone on the road. All you need is an internet connection." />

        {/* Device composition */}
        <Reveal y={30} className="relative mx-auto mt-16 aspect-[1200/690] w-full max-w-[1100px]"
          role="img" aria-label="Travel Bill Pro open on a desktop dashboard, a tablet showing GST invoices and a phone showing an invoice with UPI payment">
          <div className="absolute top-0 left-0 w-[70%]" aria-hidden="true">
            <DesktopFrame><ScaledScreen><DashboardScreen /></ScaledScreen></DesktopFrame>
          </div>
          <div className="absolute right-0 bottom-[3%] z-10 w-[41%]" aria-hidden="true">
            <TabletFrame><ScaledScreen><InvoicesScreen /></ScaledScreen></TabletFrame>
          </div>
          <div className="absolute bottom-0 left-[56%] z-20 w-[15%]" aria-hidden="true">
            <PhoneDevice><ScaledScreen width={280} height={590}><MobilePayment /></ScaledScreen></PhoneDevice>
          </div>
          <SyncBadge icon={Smartphone} title="Bill created on mobile" sub="INV/25-26/0312 · ₹2,500" className="bottom-[3%] left-[30%]" delay={0.5} />
          <SyncBadge icon={Cloud} title="Synced to office desktop" sub="Just now · all devices" className="top-[6%] right-[1%]" delay={0.8} />
        </Reveal>

        {/* Device cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {DEVICES.map(({ icon: I, name, desc, tag }, i) => (
            <Reveal key={name} delay={i * 0.08} className="surface p-6 sm:p-8">
              <span className="icon-circle"><I className="size-5" strokeWidth={1.7} aria-hidden="true" /></span>
              <h3 className="mt-6 text-xl">{name}</h3>
              <p className="mt-3 text-[15px] text-ink-700">{desc}</p>
              <p className="mt-5 flex items-center gap-2 text-sm text-accent"><CheckCircle2 className="size-4" aria-hidden="true" />{tag}</p>
            </Reveal>
          ))}
        </div>

        {/* All you need is internet */}
        <Reveal className="surface mt-6 grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-ink-900/6">
          {PERKS.map(({ icon: I, title, desc }) => (
            <div key={title} className="flex gap-4 lg:px-6 lg:first:pl-0">
              <I className="mt-0.5 size-6 shrink-0 text-accent" strokeWidth={1.7} aria-hidden="true" />
              <div><div className="font-medium">{title}</div><div className="mt-1 text-sm text-ink-500">{desc}</div></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
