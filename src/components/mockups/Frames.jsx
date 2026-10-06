import { useLayoutEffect, useRef, useState } from 'react'
import {
  LayoutDashboard, CalendarCheck, ReceiptIndianRupee, Car, IdCard, Users, Wallet, ChartColumn,
  Settings, Search, Bell, Sparkles,
} from 'lucide-react'

/**
 * Renders children at a fixed design size and scales them to fit the container width.
 * Keeps mockups pixel-consistent from 320px phones to 1440px desktops.
 */
export function ScaledScreen({ width = 1000, height = 625, children, className = '' }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(0)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(el.clientWidth / width)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])
  return (
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <div className="absolute top-0 left-0 origin-top-left" style={{ width, height, transform: `scale(${scale})`, visibility: scale ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </div>
  )
}

export function LaptopFrame({ children, label, className = '' }) {
  return (
    <div className={`relative ${className}`} role="img" aria-label={label}>
      <div className="relative rounded-[18px] bg-gradient-to-b from-slate-700 to-slate-900 p-[1.4%] pb-[1.8%] shadow-[0_50px_100px_-30px_rgb(15_23_42/0.45),0_30px_60px_-30px_rgb(0_150_136/0.35)] ring-1 ring-slate-900/10">
        <div className="absolute top-[0.55%] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-slate-600" />
        <div className="overflow-hidden rounded-[8px] bg-white" aria-hidden="true">{children}</div>
      </div>
      <div className="relative mx-[-4%] h-3 rounded-b-[14px] bg-gradient-to-b from-slate-300 to-slate-400 shadow-[0_18px_30px_-12px_rgb(15_23_42/0.4)] sm:h-4">
        <div className="absolute top-0 left-1/2 h-1.5 w-[14%] -translate-x-1/2 rounded-b-md bg-slate-400/80" />
      </div>
    </div>
  )
}

export function PhoneFrame({ children, variant = 'iphone', label, className = '' }) {
  return (
    <div className={`relative ${className}`} role="img" aria-label={label}>
      <div className="relative rounded-[2.4rem] border border-white/60 bg-white/40 p-[7px] shadow-[0_40px_80px_-24px_rgb(15_23_42/0.45)] ring-1 ring-slate-900/10 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-900/10" aria-hidden="true">
          {variant === 'iphone' ? (
            <div className="absolute top-2 left-1/2 z-10 h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-navy" />
          ) : (
            <div className="absolute top-2.5 left-1/2 z-10 size-3 -translate-x-1/2 rounded-full bg-navy" />
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

const SIDEBAR = [
  { icon: LayoutDashboard, label: 'Dashboard', key: 'dashboard' },
  { icon: CalendarCheck, label: 'Bookings', key: 'bookings' },
  { icon: ReceiptIndianRupee, label: 'Invoices', key: 'invoices' },
  { icon: Car, label: 'Fleet', key: 'fleet' },
  { icon: IdCard, label: 'Drivers', key: 'drivers' },
  { icon: Wallet, label: 'Expenses', key: 'expenses' },
  { icon: Users, label: 'Customers', key: 'crm' },
  { icon: ChartColumn, label: 'Reports', key: 'reports' },
]

/** Fixed 1000×625 app chrome: light sidebar + topbar (soft UI) */
export function AppShell({ active = 'dashboard', title, subtitle, action, children }) {
  return (
    <div className="flex h-[625px] w-[1000px] bg-[#F4F7FB] font-sans text-[12px] text-[#111827]">
      <aside className="flex w-[176px] shrink-0 flex-col px-3 py-4 text-[#5B6472]">
        <div className="mb-5 flex items-center gap-2 px-2">
          <img src="/brand/travel-bill-pro-mark-128.png" alt="" width="28" height="28" className="size-7" loading="lazy" decoding="async" />
          <span className="text-[13px] font-semibold text-[#111827]">Travel Bill Pro</span>
        </div>
        <nav className="flex flex-col gap-1.5">
          {SIDEBAR.map(({ icon: I, label, key }) => (
            <div key={key} className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 ${active === key ? 'bg-white text-[#6a08db] shadow-[0_4px_12px_-6px_rgb(17_24_39/0.15)]' : 'bg-white/50'}`}>
              <I className="size-4" strokeWidth={1.8} />
              <span className="text-[12px]">{label}</span>
            </div>
          ))}
        </nav>
        <div className="mt-auto rounded-xl bg-[#F3EAFE] p-3">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#6a08db]"><Sparkles className="size-3.5" /> AI Insight</div>
          <p className="mt-1 text-[10.5px] leading-snug text-[#374151]">3 vehicles idle since Monday. Offer them for airport runs.</p>
        </div>
        <div className="mt-3 flex items-center gap-2 px-2 text-[11px]"><Settings className="size-4" /> Settings</div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col py-3 pr-3">
        <div className="flex min-h-0 flex-1 flex-col rounded-2xl bg-white/60">
        <header className="flex h-[52px] shrink-0 items-center gap-3 px-5">
          <div className="flex h-8 w-[260px] items-center gap-2 rounded-lg bg-white px-3 text-[#5B6472] shadow-[0_2px_8px_-4px_rgb(17_24_39/0.12)]"><Search className="size-3.5" /> Search trips, invoices, drivers…</div>
          <div className="ml-auto flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-[#F3EAFE] px-2.5 py-1 text-[10.5px] font-medium text-[#6a08db]"><span className="size-1.5 rounded-full bg-[#6a08db]" /> Live</span>
            <span className="relative"><Bell className="size-4 text-[#5B6472]" /><span className="absolute -top-1 -right-1 size-2 rounded-full bg-gold ring-2 ring-white" /></span>
            <span className="flex size-7 items-center justify-center rounded-full bg-[#111827] text-[11px] font-semibold text-white">RK</span>
          </div>
        </header>
        <div className="flex min-h-0 flex-1 flex-col gap-3.5 px-5 pb-4">
          {(title || action) && (
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[17px] font-medium">{title}</div>
                {subtitle && <div className="text-[11px] text-[#5B6472]">{subtitle}</div>}
              </div>
              {action}
            </div>
          )}
          {children}
        </div>
        </div>
      </div>
    </div>
  )
}

export function Chip({ tone = 'green', children }) {
  const t = {
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
    amber: 'bg-amber-50 text-amber-700 ring-amber-600/15',
    red: 'bg-rose-50 text-rose-700 ring-rose-600/15',
    blue: 'bg-sky-50 text-sky-700 ring-sky-600/15',
    slate: 'bg-slate-100 text-slate-600 ring-slate-500/10',
    violet: 'bg-violet-50 text-violet-700 ring-violet-600/15',
  }[tone]
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ring-1 ${t}`}>{children}</span>
}

export function Panel({ className = '', children }) {
  return <div className={`rounded-xl bg-white p-3.5 shadow-[0_6px_18px_-10px_rgb(17_24_39/0.18)] ${className}`}>{children}</div>
}

export function MiniBtn({ children, dark }) {
  return <span className={`inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-[11px] font-medium ${dark ? 'bg-white text-[#111827] shadow-[0_2px_8px_-4px_rgb(17_24_39/0.2)]' : 'bg-[#6a08db] text-white'}`}>{children}</span>
}
