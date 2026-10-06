import { Bell, Plus, MapPin, Navigation, Phone, CheckCircle2, Route, Home, CalendarCheck, Receipt, User, Clock } from 'lucide-react'
import { AreaChart } from './Charts'
import { WhatsAppIcon } from '../ui'

const StatusBar = ({ dark }) => (
  <div className={`flex h-9 items-center justify-between px-6 pt-1 text-[11px] font-semibold ${dark ? 'text-white' : 'text-navy'}`}>
    <span>9:41</span>
    <span className="flex items-center gap-1">
      <span className="flex items-end gap-[1.5px]">{[4, 6, 8, 10].map((h) => <span key={h} className={`w-[2.5px] rounded-sm ${dark ? 'bg-white' : 'bg-navy'}`} style={{ height: h }} />)}</span>
      <span className={`ml-1 h-[10px] w-[20px] rounded-[3px] border ${dark ? 'border-white/70' : 'border-navy/70'} p-[1.5px]`}><span className={`block h-full w-3/4 rounded-[1.5px] ${dark ? 'bg-white' : 'bg-navy'}`} /></span>
    </span>
  </div>
)

const TabBar = ({ active = 0 }) => (
  <div className="absolute inset-x-0 bottom-0 flex h-16 items-start justify-around border-t border-slate-100 bg-white/95 pt-2.5 backdrop-blur">
    {[Home, CalendarCheck, Receipt, User].map((I, i) => (
      <span key={i} className={`flex flex-col items-center gap-0.5 text-[9px] font-semibold ${i === active ? 'text-teal' : 'text-slate-500'}`}>
        <I className="size-5" strokeWidth={i === active ? 2.2 : 1.8} />
        {['Home', 'Trips', 'Invoices', 'Profile'][i]}
      </span>
    ))}
  </div>
)

/** 280×590 mobile dashboard */
export function MobileDashboard() {
  return (
    <div className="relative h-[590px] w-[280px] overflow-hidden bg-[#F6F8FB] font-sans text-navy">
      <div className="bg-navy pb-16 text-white">
        <StatusBar dark />
        <div className="flex items-center justify-between px-5 pt-2">
          <div><div className="text-[10px] text-slate-500">Deccan Cabs</div><div className="font-display text-[15px] font-semibold">Hi, Ravi</div></div>
          <span className="relative flex size-8 items-center justify-center rounded-full bg-white/10"><Bell className="size-4" /><span className="absolute top-1.5 right-2 size-1.5 rounded-full bg-gold" /></span>
        </div>
        <div className="px-5 pt-4">
          <div className="text-[10px] text-slate-500">Today's revenue</div>
          <div className="font-display text-[26px] leading-tight font-semibold">₹1,84,250</div>
          <div className="text-[10px] font-semibold text-emerald-300">▲ 12.4% vs yesterday</div>
        </div>
      </div>
      <div className="-mt-12 px-4">
        <div className="rounded-2xl bg-white p-3 shadow-[0_10px_30px_-12px_rgb(15_23_42/0.25)]">
          <div className="h-[70px]"><AreaChart data={[4, 6, 5, 8, 7, 9, 8, 12]} w={240} h={70} grid={false} /></div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {[['Active trips', '27', Route, 'text-violet-700 bg-violet-50'], ['Pending', '₹3.4L', Clock, 'text-amber-700 bg-amber-50']].map(([k, v, I, c]) => (
            <div key={k} className="rounded-2xl bg-white p-3 shadow-sm">
              <span className={`inline-flex size-7 items-center justify-center rounded-lg ${c}`}><I className="size-3.5" /></span>
              <div className="mt-1.5 text-[10px] text-slate-500">{k}</div>
              <div className="font-display text-[16px] font-semibold">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[11px] font-semibold">Today's trips</div>
        {[['06:30', 'Begumpet → RGIA', 'Confirmed'], ['09:15', 'Hitech City · 8hr', 'On trip']].map(([t, r, s]) => (
          <div key={t} className="mt-2 flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-sm">
            <span className="rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-bold">{t}</span>
            <span className="text-[10.5px] font-semibold">{r}</span>
            <span className="ml-auto text-[9px] font-semibold text-emerald-600">{s}</span>
          </div>
        ))}
      </div>
      <span className="absolute right-4 bottom-20 flex size-11 items-center justify-center rounded-full bg-brand-gradient text-ink shadow-[0_10px_20px_-6px_rgb(106_8_219/0.5)]"><Plus className="size-5" /></span>
      <TabBar active={0} />
    </div>
  )
}

/** 280×590 driver trip screen (Android) */
export function MobileDriverTrip() {
  return (
    <div className="relative h-[590px] w-[280px] overflow-hidden bg-white font-sans text-navy">
      <div className="relative h-[270px] bg-[linear-gradient(160deg,#E6F9EE,#E0F2FE)]">
        <StatusBar />
        <svg viewBox="0 0 280 240" className="absolute inset-x-0 bottom-0 h-[235px] w-full">
          <path d="M0 60 H280 M0 150 H280 M70 0 V240 M190 0 V240 M0 210 L280 110" stroke="#fff" strokeWidth="9" />
          <path d="M40 200 C 90 190, 110 120, 150 115 S 220 70, 240 45" fill="none" stroke="#A66CFF" strokeWidth="4" strokeLinecap="round" />
          <circle cx="40" cy="200" r="8" fill="#6a08db" stroke="#fff" strokeWidth="3" />
          <circle cx="240" cy="45" r="8" fill="#0F172A" stroke="#fff" strokeWidth="3" />
          <g transform="translate(135 108)"><circle r="14" fill="#6a08db" opacity=".2" /><circle r="7" fill="#6a08db" stroke="#fff" strokeWidth="2.5" /></g>
        </svg>
        <span className="absolute top-12 left-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold shadow">ETA 18 min · 11.4 km</span>
      </div>
      <div className="relative -mt-5 rounded-t-3xl bg-white px-5 pt-4">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-200" />
        <div className="flex items-center justify-between"><div className="font-display text-[14px] font-semibold">Trip TBP-2419</div><span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9.5px] font-bold text-emerald-700">In progress</span></div>
        <div className="mt-3 flex flex-col gap-2.5 text-[10.5px]">
          <div className="flex gap-2"><MapPin className="size-4 text-emerald-600" /><div><b>Begumpet</b><div className="text-slate-500">Picked up 06:28</div></div></div>
          <div className="flex gap-2"><Navigation className="size-4 text-navy" /><div><b>RGIA Airport, Terminal 1</b><div className="text-slate-500">Drop · Flight 6E 5214</div></div></div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[['Start KM', '48,210'], ['Toll', '₹120'], ['Parking', '₹60']].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-slate-50 py-2"><div className="text-[9px] text-slate-500">{k}</div><div className="text-[11px] font-bold">{v}</div></div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl border border-slate-200"><Phone className="size-4" /></span>
          <span className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-navy text-[11px] font-semibold text-white"><CheckCircle2 className="size-4 text-emerald-400" /> End trip & bill</span>
        </div>
      </div>
    </div>
  )
}

/** 280×590 invoice + UPI payment screen */
export function MobilePayment() {
  return (
    <div className="relative h-[590px] w-[280px] overflow-hidden bg-[#F6F8FB] font-sans text-navy">
      <StatusBar />
      <div className="px-5 pt-2">
        <div className="text-[10px] text-slate-500">Invoice</div>
        <div className="font-display text-[15px] font-semibold">INV/25-26/0312</div>
      </div>
      <div className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between text-[10.5px]"><span className="text-slate-500">Billed to</span><b>Cyberlink Solutions</b></div>
        <div className="my-3 border-t border-dashed border-slate-200" />
        {[['Airport drop (Innova)', '₹2,200'], ['Toll & parking', '₹180'], ['CGST 2.5%', '₹60'], ['SGST 2.5%', '₹60']].map(([k, v]) => (
          <div key={k} className="flex justify-between py-0.5 text-[10.5px]"><span className="text-slate-500">{k}</span><span className="font-medium">{v}</span></div>
        ))}
        <div className="mt-2 flex justify-between rounded-lg bg-violet-50 px-2.5 py-2 text-[12px]"><b className="text-violet-800">Total</b><b className="text-violet-800">₹2,500</b></div>
      </div>
      <div className="mx-4 mt-3 flex flex-col items-center rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-2 text-[10.5px] font-semibold">Scan to pay with any UPI app</div>
        <QrArt size={116} />
        <div className="mt-2 text-[9.5px] text-slate-500">deccancabs@okhdfcbank</div>
      </div>
      <div className="mx-4 mt-3 flex h-11 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-[11px] font-semibold text-white"><WhatsAppIcon className="size-4" /> Share on WhatsApp</div>
      <TabBar active={2} />
    </div>
  )
}

/** Deterministic QR-like pattern (decorative) */
export function QrArt({ size = 120, color = '#0F172A' }) {
  const n = 21
  const cell = size / n
  const finder = (x, y) => (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7)
  const cells = []
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    if (finder(x, y)) continue
    if ((x * 7 + y * 13 + x * y) % 5 < 2) cells.push(<rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill={color} />)
  }
  const F = ({ x, y }) => (
    <g transform={`translate(${x * cell} ${y * cell})`}>
      <rect width={cell * 7} height={cell * 7} rx={cell * 1.5} fill={color} />
      <rect x={cell} y={cell} width={cell * 5} height={cell * 5} rx={cell} fill="#fff" />
      <rect x={cell * 2} y={cell * 2} width={cell * 3} height={cell * 3} rx={cell * 0.8} fill={color} />
    </g>
  )
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
      {cells}
      <F x={0} y={0} /><F x={n - 7} y={0} /><F x={0} y={n - 7} />
    </svg>
  )
}

