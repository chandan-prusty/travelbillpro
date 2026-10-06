import {
  IndianRupee, Clock, Route, FileText, Plus, Download, Filter, MapPin, Phone,
  Fuel, Wrench, Receipt, Coffee, Star, MessageCircle, TrendingUp, Calendar, CheckCircle2,
} from 'lucide-react'
import { AppShell, Panel, Chip, MiniBtn } from './Frames'
import { AreaChart, BarChart, Donut, Sparkline, ProgressBar } from './Charts'

const Kpi = ({ label, value, delta, tone = 'green', icon: I, spark, sub }) => (
  <Panel className="flex flex-col gap-1.5">
    <div className="flex items-center justify-between text-[10.5px] font-medium text-slate-500">
      <span className="flex items-center gap-1.5">{I && <I className="size-3.5" />} {label}</span>
      {delta && <Chip tone={tone}>{delta}</Chip>}
    </div>
    <div className="flex items-end justify-between gap-2">
      <div>
        <div className="font-display text-[20px] leading-none font-semibold tracking-tight">{value}</div>
        {sub && <div className="mt-1 text-[10px] text-slate-400">{sub}</div>}
      </div>
      {spark && <div className="h-7 w-20"><Sparkline data={spark} color={tone === 'amber' ? '#F59E0B' : '#6a08db'} /></div>}
    </div>
  </Panel>
)

/* ============ Hero overview ============ */
export function DashboardScreen() {
  return (
    <AppShell active="dashboard" title="Good morning, Ravi" subtitle="Wednesday, 24 September · Deccan Cabs"
      action={<div className="flex gap-2"><MiniBtn dark><Download className="size-3.5" />Export</MiniBtn><MiniBtn><Plus className="size-3.5" />New Booking</MiniBtn></div>}>
      <div className="grid grid-cols-4 gap-3.5">
        <Kpi label="Today's Revenue" value="₹1,84,250" delta="+12.4%" icon={IndianRupee} spark={[4, 6, 5, 8, 7, 9, 12]} />
        <Kpi label="Pending Payments" value="₹3,42,800" delta="18 invoices" tone="amber" icon={Clock} spark={[9, 8, 9, 7, 8, 6, 7]} />
        <Kpi label="Active Trips" value="27" delta="Live" icon={Route} sub="9 outstation · 18 local" />
        <Kpi label="GST Invoices" value="312" delta="Sep" tone="blue" icon={FileText} sub="₹4.21L GST collected" />
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3.5">
        <Panel className="col-span-2 flex flex-col">
          <div className="flex items-center justify-between">
            <div><div className="text-[12px] font-semibold">Revenue overview</div><div className="text-[10.5px] text-slate-400">This month vs last month</div></div>
            <div className="flex gap-1 rounded-lg bg-slate-100 p-0.5 text-[10px] font-semibold"><span className="rounded-md bg-white px-2 py-1 shadow-sm">30D</span><span className="px-2 py-1 text-slate-500">90D</span><span className="px-2 py-1 text-slate-500">1Y</span></div>
          </div>
          <div className="mt-2 min-h-0 flex-1">
            <AreaChart data={[32, 38, 35, 46, 42, 55, 51, 63, 60, 72, 69, 84]} data2={[28, 30, 33, 31, 38, 36, 40, 42, 45, 44, 48, 52]} w={520} h={150}
              labels={['1', '3', '6', '9', '11', '14', '16', '18', '20', '22', '23', '24']} />
          </div>
        </Panel>
        <Panel className="flex flex-col">
          <div className="text-[12px] font-semibold">Vehicle availability</div>
          <div className="text-[10.5px] text-slate-400">48 vehicles in fleet</div>
          <div className="flex flex-1 items-center gap-3">
            <Donut size={104} stroke={14} segments={[{ value: 27, color: '#6a08db' }, { value: 15, color: '#A66CFF' }, { value: 6, color: '#F59E0B' }]}>
              <div className="font-display text-[18px] font-semibold">87%</div><div className="text-[9px] text-slate-400">utilised</div>
            </Donut>
            <ul className="flex flex-col gap-1.5 text-[10.5px]">
              <li className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#6a08db]" />On trip · 27</li>
              <li className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#A66CFF]" />Available · 15</li>
              <li className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#F59E0B]" />Service · 6</li>
            </ul>
          </div>
        </Panel>
      </div>
      <div className="grid grid-cols-3 gap-3.5">
        <Panel className="col-span-2 !p-0">
          <div className="flex items-center justify-between px-3.5 pt-3 pb-2"><span className="text-[12px] font-semibold">Recent trips</span><span className="text-[10.5px] font-semibold text-teal">View all</span></div>
          <table className="w-full text-left text-[10.5px]">
            <tbody>
              {[
                ['TBP-2418', 'Gachibowli → RGIA Airport', 'Innova Crysta', '₹2,450', 'green', 'Paid'],
                ['TBP-2417', 'Hyderabad → Srisailam', 'Tempo Traveller 12S', '₹14,800', 'amber', 'Due'],
                ['TBP-2416', 'Hitech City · 8h local', 'Swift Dzire', '₹2,200', 'blue', 'On trip'],
              ].map(([id, route, car, amt, tone, st]) => (
                <tr key={id} className="border-t border-slate-100">
                  <td className="px-3.5 py-2 font-medium text-slate-500">{id}</td>
                  <td className="py-2 font-medium">{route}</td>
                  <td className="py-2 text-slate-500">{car}</td>
                  <td className="py-2 font-semibold">{amt}</td>
                  <td className="py-2 pr-3.5 text-right"><Chip tone={tone}>{st}</Chip></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel>
          <div className="mb-2 flex items-center justify-between"><span className="text-[12px] font-semibold">Driver status</span><Chip tone="green">32 on duty</Chip></div>
          {[['Srinivas R.', 'On trip · Srisailam', 'green'], ['Abdul Kareem', 'Available · Madhapur', 'blue'], ['Mahesh Goud', 'Leave today', 'slate']].map(([n, s, t]) => (
            <div key={n} className="flex items-center gap-2 py-1">
              <span className={`size-2 rounded-full ${t === 'green' ? 'bg-emerald-500' : t === 'blue' ? 'bg-sky-500' : 'bg-slate-300'}`} />
              <span className="text-[10.5px] font-semibold">{n}</span>
              <span className="ml-auto text-[10px] text-slate-400">{s}</span>
            </div>
          ))}
        </Panel>
      </div>
    </AppShell>
  )
}

/* ============ Bookings ============ */
export function BookingsScreen() {
  const days = ['Mon 22', 'Tue 23', 'Wed 24', 'Thu 25', 'Fri 26', 'Sat 27', 'Sun 28']
  const rows = [
    ['06:30', 'Anvika Pharma Pvt Ltd', 'Begumpet → RGIA Airport', 'Innova Crysta · TS09EA4521', 'Srinivas R.', 'green', 'Confirmed'],
    ['08:00', 'Lakshmi Narayana', 'Hyderabad → Tirupati (3 days)', 'Tempo Traveller 17S', 'Venkatesh K.', 'blue', 'On trip'],
    ['09:15', 'Cyberlink Solutions', 'Hitech City · 8hr/80km', 'Swift Dzire · TS08UB2231', 'Abdul Kareem', 'green', 'Confirmed'],
    ['11:00', 'Priya Sharma', 'Secunderabad → Warangal', 'Ertiga · TS07FK8890', 'Unassigned', 'amber', 'Pending'],
    ['14:30', 'Hitech Infra LLP', 'Kondapur → Shamshabad', 'Toyota Etios · TS09UC1123', 'Raju P.', 'green', 'Confirmed'],
    ['18:45', 'Rahul Verma', 'Jubilee Hills → Nagarjuna Sagar', 'Innova · TS10EZ5567', 'Prakash M.', 'violet', 'Quote sent'],
  ]
  return (
    <AppShell active="bookings" title="Bookings" subtitle="42 trips this week · 6 today"
      action={<div className="flex gap-2"><MiniBtn dark><Filter className="size-3.5" />Filter</MiniBtn><MiniBtn><Plus className="size-3.5" />New Booking</MiniBtn></div>}>
      <div className="grid grid-cols-7 gap-2">
        {days.map((d, i) => (
          <div key={d} className={`rounded-xl border px-3 py-2 ${i === 2 ? 'border-transparent bg-navy text-white' : 'border-slate-200 bg-white'}`}>
            <div className={`text-[10px] ${i === 2 ? 'text-slate-300' : 'text-slate-400'}`}>{d.split(' ')[0]}</div>
            <div className="font-display text-[16px] font-semibold">{d.split(' ')[1]}</div>
            <div className={`text-[9.5px] font-semibold ${i === 2 ? 'text-violet-300' : 'text-teal'}`}>{[5, 8, 6, 7, 9, 4, 3][i]} trips</div>
          </div>
        ))}
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3.5">
        <Panel className="col-span-2 !p-0">
          <table className="w-full text-left text-[10.5px]">
            <thead className="text-[10px] text-slate-400"><tr><th className="px-3.5 py-2.5 font-medium">Time</th><th className="font-medium">Customer & Route</th><th className="font-medium">Vehicle</th><th className="font-medium">Driver</th><th className="pr-3.5 text-right font-medium">Status</th></tr></thead>
            <tbody>
              {rows.map(([t, c, r, v, d, tone, st]) => (
                <tr key={t} className="border-t border-slate-100">
                  <td className="px-3.5 py-2.5 font-semibold">{t}</td>
                  <td className="py-2.5"><div className="font-semibold">{c}</div><div className="text-slate-400">{r}</div></td>
                  <td className="py-2.5 pr-2"><div className="font-medium text-slate-600">{v.split(' · ')[0]}</div><div className="text-slate-400">{v.split(' · ')[1] || 'Assigned'}</div></td>
                  <td className={`py-2.5 ${d === 'Unassigned' ? 'font-semibold text-amber-600' : ''}`}>{d}</td>
                  <td className="py-2.5 pr-3.5 text-right"><Chip tone={tone}>{st}</Chip></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel className="flex flex-col gap-3">
          <div className="text-[12px] font-semibold">Trip TBP-2419</div>
          <div className="relative h-[130px] overflow-hidden rounded-lg bg-[linear-gradient(135deg,#ECFDF5,#E0F2FE)]">
            <svg viewBox="0 0 220 130" className="absolute inset-0 h-full w-full">
              <path d="M0 40 H220 M0 95 H220 M60 0 V130 M150 0 V130" stroke="#fff" strokeWidth="6" />
              <path d="M30 105 C 70 100, 80 60, 120 58 S 170 30, 195 22" fill="none" stroke="#A66CFF" strokeWidth="3" strokeDasharray="6 5" />
              <circle cx="30" cy="105" r="6" fill="#6a08db" stroke="#fff" strokeWidth="2.5" />
              <circle cx="195" cy="22" r="6" fill="#0F172A" stroke="#fff" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="flex flex-col gap-2 text-[10.5px]">
            <div className="flex gap-2"><MapPin className="size-3.5 text-emerald-600" /><span><b>Pickup</b> · Begumpet, 06:30</span></div>
            <div className="flex gap-2"><MapPin className="size-3.5 text-navy" /><span><b>Drop</b> · RGIA Terminal 1</span></div>
            <div className="flex gap-2"><Phone className="size-3.5 text-slate-400" /><span>Srinivas R. · Innova Crysta</span></div>
          </div>
          <div className="mt-auto flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Fare (incl. toll)</span><b className="font-display text-[14px]">₹2,450</b></div>
        </Panel>
      </div>
    </AppShell>
  )
}

/* ============ Invoices ============ */
export function InvoicesScreen() {
  const rows = [
    ['INV/25-26/0312', 'Cyberlink Solutions Pvt Ltd', '24 Sep', '₹48,600', '₹2,430', '₹2,430', 'green', 'Paid'],
    ['INV/25-26/0311', 'Anvika Pharma Pvt Ltd', '23 Sep', '₹1,12,000', '₹5,600', '₹5,600', 'amber', 'Due 5d'],
    ['INV/25-26/0310', 'Lakshmi Narayana', '23 Sep', '₹14,800', '₹370', '₹370', 'green', 'Paid'],
    ['INV/25-26/0309', 'Hitech Infra LLP', '21 Sep', '₹36,250', '₹1,812', '₹1,812', 'red', 'Overdue'],
    ['INV/25-26/0308', 'BluSky Holidays (IGST)', '20 Sep', '₹22,400', '—', '₹1,120', 'green', 'Paid'],
    ['INV/25-26/0307', 'Rahul Verma', '19 Sep', '₹6,300', '₹157', '₹157', 'blue', 'Sent'],
  ]
  return (
    <AppShell active="invoices" title="GST Invoices" subtitle="FY 2025-26 · GSTIN 36AAKCD4521M1Z8"
      action={<div className="flex gap-2"><MiniBtn dark><Download className="size-3.5" />GSTR-1</MiniBtn><MiniBtn><Plus className="size-3.5" />Create Invoice</MiniBtn></div>}>
      <div className="grid grid-cols-4 gap-3.5">
        <Kpi label="Invoiced (Sep)" value="₹18.4L" delta="+18%" icon={Receipt} />
        <Kpi label="Collected" value="₹15.0L" delta="81%" icon={CheckCircle2} />
        <Kpi label="Outstanding" value="₹3.42L" delta="18" tone="amber" icon={Clock} />
        <Kpi label="GST Payable" value="₹92,040" delta="Due 20 Oct" tone="blue" icon={FileText} />
      </div>
      <Panel className="min-h-0 flex-1 !p-0">
        <table className="w-full text-left text-[10.5px]">
          <thead className="text-[10px] text-slate-400"><tr><th className="px-3.5 py-2.5 font-medium">Invoice #</th><th className="font-medium">Customer</th><th className="font-medium">Date</th><th className="font-medium">Taxable</th><th className="font-medium">CGST</th><th className="font-medium">SGST/IGST</th><th className="pr-3.5 text-right font-medium">Status</th></tr></thead>
          <tbody>
            {rows.map(([n, c, d, t, cg, sg, tone, st]) => (
              <tr key={n} className="border-t border-slate-100">
                <td className="px-3.5 py-3 font-semibold text-teal-dark">{n}</td>
                <td className="py-3 font-medium">{c}</td>
                <td className="py-3 text-slate-500">{d}</td>
                <td className="py-3 font-semibold">{t}</td>
                <td className="py-3 text-slate-500">{cg}</td>
                <td className="py-3 text-slate-500">{sg}</td>
                <td className="py-3 pr-3.5 text-right"><Chip tone={tone}>{st}</Chip></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-2 border-t border-slate-100 px-3.5 py-2.5 text-[10.5px] text-slate-500">
          <MessageCircle className="size-3.5 text-emerald-600" /> 6 invoices auto-shared on WhatsApp today
        </div>
      </Panel>
    </AppShell>
  )
}

/* ============ Drivers ============ */
export function DriversScreen() {
  const drivers = [
    ['Srinivas Reddy', 'SR', 'Innova Crysta', 96, '₹24,500', 'On trip', 'green', 'from-violet-300 to-purple-500'],
    ['Abdul Kareem', 'AK', 'Swift Dzire', 92, '₹21,000', 'Available', 'blue', 'from-sky-300 to-indigo-400'],
    ['Venkatesh K.', 'VK', 'Tempo Traveller', 100, '₹28,800', 'On trip', 'green', 'from-amber-300 to-orange-400'],
    ['Mahesh Goud', 'MG', 'Ertiga', 84, '₹19,200', 'Leave', 'slate', 'from-violet-300 to-fuchsia-400'],
    ['Raju Pothula', 'RP', 'Toyota Etios', 88, '₹20,400', 'Available', 'blue', 'from-rose-300 to-pink-400'],
    ['Prakash M.', 'PM', 'Innova', 94, '₹23,700', 'On trip', 'green', 'from-teal-300 to-cyan-400'],
  ]
  return (
    <AppShell active="drivers" title="Drivers" subtitle="36 drivers · September payroll ready"
      action={<MiniBtn><IndianRupee className="size-3.5" />Run Payroll</MiniBtn>}>
      <div className="grid grid-cols-3 gap-3.5">
        {drivers.map(([n, ini, car, att, sal, st, tone, g]) => (
          <Panel key={n} className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <span className={`flex size-9 items-center justify-center rounded-full bg-gradient-to-br ${g} text-[11px] font-bold text-white`}>{ini}</span>
              <div><div className="text-[12px] font-semibold">{n}</div><div className="text-[10px] text-slate-400">{car}</div></div>
              <span className="ml-auto"><Chip tone={tone}>{st}</Chip></span>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-[10px] text-slate-500"><span>Attendance</span><b className="text-navy">{att}%</b></div>
              <ProgressBar value={att} color={att > 90 ? '#6a08db' : '#F59E0B'} />
            </div>
            <div className="flex justify-between rounded-lg bg-slate-50 px-2.5 py-1.5 text-[10.5px]"><span className="text-slate-500">Net salary</span><b>{sal}</b></div>
          </Panel>
        ))}
      </div>
      <Panel className="flex items-center gap-6 text-[10.5px]">
        <span className="font-semibold">Payroll summary</span>
        <span className="text-slate-500">Gross <b className="text-navy">₹8,42,600</b></span>
        <span className="text-slate-500">Bata <b className="text-navy">₹96,400</b></span>
        <span className="text-slate-500">Advances <b className="text-rose-600">−₹58,000</b></span>
        <span className="ml-auto"><Chip tone="green">Ready to pay · 36</Chip></span>
      </Panel>
    </AppShell>
  )
}

/* ============ Expenses ============ */
export function ExpensesScreen() {
  const cats = [['Fuel', 312000, '#6a08db', Fuel], ['Maintenance', 128000, '#A66CFF', Wrench], ['Tolls & Parking', 64000, '#0EA5E9', Route], ['Driver Bata', 96400, '#F59E0B', Coffee], ['EMI & Insurance', 184000, '#8B5CF6', Calendar]]
  const total = cats.reduce((s, c) => s + c[1], 0)
  return (
    <AppShell active="expenses" title="Expenses" subtitle="September · ₹7,84,400 spent"
      action={<MiniBtn><Plus className="size-3.5" />Add Expense</MiniBtn>}>
      <div className="grid min-h-0 flex-1 grid-cols-5 gap-3.5">
        <Panel className="col-span-2 flex flex-col gap-3">
          <div className="text-[12px] font-semibold">By category</div>
          <div className="flex items-center justify-center py-1">
            <Donut size={140} stroke={18} segments={cats.map((c) => ({ value: c[1], color: c[2] }))}>
              <div className="text-[9.5px] text-slate-400">Total</div><div className="font-display text-[17px] font-semibold">₹7.84L</div>
            </Donut>
          </div>
          {cats.map(([n, v, c, I]) => (
            <div key={n} className="flex items-center gap-2 text-[10.5px]">
              <span className="flex size-6 items-center justify-center rounded-md" style={{ background: c + '1f', color: c }}><I className="size-3.5" /></span>
              <span className="font-medium">{n}</span>
              <span className="ml-auto font-semibold">₹{v.toLocaleString('en-IN')}</span>
              <span className="w-9 text-right text-slate-400">{Math.round((v / total) * 100)}%</span>
            </div>
          ))}
        </Panel>
        <div className="col-span-3 flex min-h-0 flex-col gap-3.5">
          <Panel className="flex h-[190px] flex-col">
            <div className="flex items-center justify-between"><span className="text-[12px] font-semibold">Daily spend</span><Chip tone="green">−8% vs Aug</Chip></div>
            <div className="mt-2 min-h-0 flex-1"><BarChart data={[18, 24, 21, 30, 26, 19, 34, 28, 22, 31, 25, 20, 27, 23]} w={420} h={130} color="#A66CFF" /></div>
          </Panel>
          <Panel className="flex-1 !p-0">
            {[['HP Petrol Pump, Kukatpally', 'Fuel · TS09EA4521', '₹4,850', Fuel], ['Sri Sai Motors', 'Service · Swift Dzire', '₹7,200', Wrench], ['ORR Toll Plaza', 'Toll · Tempo Traveller', '₹385', Route], ['ICICI Lombard', 'Insurance · Innova', '₹38,400', Calendar]].map(([n, s, a, I]) => (
              <div key={n} className="flex items-center gap-2.5 border-b border-slate-100 px-3.5 py-2.5 last:border-0">
                <span className="flex size-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600"><I className="size-3.5" /></span>
                <div><div className="text-[11px] font-semibold">{n}</div><div className="text-[10px] text-slate-400">{s}</div></div>
                <span className="ml-auto text-[11px] font-semibold">{a}</span>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </AppShell>
  )
}

/* ============ Reports ============ */
export function ReportsScreen() {
  return (
    <AppShell active="reports" title="Reports & Analytics" subtitle="April – September 2025"
      action={<div className="flex gap-2"><MiniBtn dark><Download className="size-3.5" />PDF</MiniBtn><MiniBtn><Download className="size-3.5" />Excel for CA</MiniBtn></div>}>
      <div className="grid grid-cols-4 gap-3.5">
        <Kpi label="Revenue" value="₹98.6L" delta="+22%" icon={TrendingUp} />
        <Kpi label="Expenses" value="₹61.2L" delta="+9%" tone="amber" icon={Receipt} />
        <Kpi label="Net Profit" value="₹37.4L" delta="38% margin" icon={IndianRupee} />
        <Kpi label="Trips" value="4,812" delta="+640" tone="blue" icon={Route} />
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3.5">
        <Panel className="col-span-2 flex flex-col">
          <div className="flex items-center justify-between"><span className="text-[12px] font-semibold">Revenue vs Expenses</span>
            <span className="flex gap-3 text-[10px] text-slate-500"><span className="flex items-center gap-1"><span className="size-2 rounded-sm bg-teal" />Revenue</span><span className="flex items-center gap-1"><span className="size-2 rounded-sm bg-amber-400" />Expenses</span></span></div>
          <div className="mt-2 min-h-0 flex-1"><BarChart data={[14.2, 15.1, 16.4, 16.0, 17.8, 19.1]} data2={[9.6, 9.9, 10.4, 10.1, 10.8, 10.4]} labels={['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']} w={500} h={200} /></div>
        </Panel>
        <Panel className="flex flex-col gap-2.5">
          <div className="text-[12px] font-semibold">GST summary · Sep</div>
          {[['Output CGST', '₹46,020'], ['Output SGST', '₹46,020'], ['Output IGST', '₹8,960'], ['Input credit', '−₹8,960']].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-dashed border-slate-200 pb-1.5 text-[10.5px]"><span className="text-slate-500">{k}</span><b>{v}</b></div>
          ))}
          <div className="flex justify-between rounded-lg bg-violet-50 px-2.5 py-2 text-[11px]"><span className="font-semibold text-violet-800">Net payable</span><b className="text-violet-800">₹92,040</b></div>
          <div className="mt-auto text-[10px] text-slate-400">GSTR-1 & 3B ready · Export in one click</div>
        </Panel>
      </div>
    </AppShell>
  )
}

/* ============ CRM ============ */
export function CrmScreen() {
  const list = [
    ['Cyberlink Solutions', 'Corporate · 312 trips', '₹0', 5, true],
    ['Anvika Pharma', 'Corporate · 188 trips', '₹1,12,000', 5],
    ['BluSky Holidays', 'B2B Agent · 96 trips', '₹22,400', 4],
    ['Lakshmi Narayana', 'Retail · 14 trips', '₹0', 5],
    ['Hitech Infra LLP', 'Corporate · 72 trips', '₹36,250', 3],
  ]
  return (
    <AppShell active="crm" title="Customers" subtitle="1,284 customers · 86 corporate accounts"
      action={<MiniBtn><Plus className="size-3.5" />Add Customer</MiniBtn>}>
      <div className="grid min-h-0 flex-1 grid-cols-5 gap-3.5">
        <Panel className="col-span-2 !p-0">
          {list.map(([n, s, bal, r, active]) => (
            <div key={n} className={`flex items-center gap-2.5 border-b border-slate-100 px-3.5 py-3 last:border-0 ${active ? 'bg-violet-50/70' : ''}`}>
              <span className="flex size-8 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">{n.split(' ').map((x) => x[0]).slice(0, 2).join('')}</span>
              <div className="min-w-0"><div className="truncate text-[11.5px] font-semibold">{n}</div><div className="text-[10px] text-slate-400">{s}</div></div>
              <div className="ml-auto text-right"><div className={`text-[11px] font-semibold ${bal === '₹0' ? 'text-emerald-600' : 'text-amber-600'}`}>{bal}</div>
                <div className="flex justify-end">{Array.from({ length: r }).map((_, i) => <Star key={i} className="size-2.5 fill-gold text-gold" />)}</div></div>
            </div>
          ))}
        </Panel>
        <Panel className="col-span-3 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-gradient font-display text-[14px] font-bold text-ink">CS</span>
            <div><div className="font-display text-[15px] font-semibold">Cyberlink Solutions Pvt Ltd</div><div className="text-[10.5px] text-slate-400">GSTIN 36AAFCC9812K1ZQ · Hitech City, Hyderabad</div></div>
            <span className="ml-auto"><Chip tone="green">Monthly billing</Chip></span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {[['Lifetime value', '₹14.8L'], ['Trips this month', '46'], ['Avg. pay time', '6 days']].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-slate-50 px-3 py-2"><div className="text-[10px] text-slate-400">{k}</div><div className="font-display text-[15px] font-semibold">{v}</div></div>
            ))}
          </div>
          <div className="h-[110px]"><AreaChart data={[12, 18, 15, 22, 26, 24, 31, 35, 33, 40]} w={500} h={110} color="#A66CFF" /></div>
          <div className="text-[11px] font-semibold">Recent activity</div>
          {[['Invoice INV/25-26/0312 paid via UPI', '2h ago'], ['Airport drop · Gachibowli → RGIA', 'Today 06:10'], ['Monthly statement shared on WhatsApp', 'Yesterday']].map(([t, w]) => (
            <div key={t} className="flex items-center gap-2 text-[10.5px]"><span className="size-1.5 rounded-full bg-emerald-500" />{t}<span className="ml-auto text-slate-400">{w}</span></div>
          ))}
        </Panel>
      </div>
    </AppShell>
  )
}

export const SHOWCASE_SCREENS = [
  { key: 'bookings', label: 'Bookings', Screen: BookingsScreen },
  { key: 'invoices', label: 'Invoices', Screen: InvoicesScreen },
  { key: 'drivers', label: 'Drivers', Screen: DriversScreen },
  { key: 'expenses', label: 'Expenses', Screen: ExpensesScreen },
  { key: 'reports', label: 'Reports', Screen: ReportsScreen },
  { key: 'crm', label: 'CRM', Screen: CrmScreen },
]

