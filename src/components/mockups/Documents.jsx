import { QrArt } from './Mobile'

/** GST tax invoice — rendered at 560px wide design size */
export function InvoiceDoc() {
  const items = [
    ['Airport transfer — Begumpet → RGIA', 'Innova Crysta · TS09EA4521', '996601', 1, 2200],
    ['Local rental — 8 hrs / 80 km', 'Swift Dzire · TS08UB2231', '996601', 12, 2200],
    ['Outstation — Hyderabad → Srisailam', 'Tempo Traveller 12S · 426 km', '996601', 1, 14800],
    ['Toll & parking (reimbursement)', 'As per receipts', '996601', 1, 1640],
  ]
  const taxable = items.reduce((s, i) => s + i[3] * i[4], 0)
  const cgst = Math.round(taxable * 0.025)
  const total = taxable + cgst * 2
  const f = (n) => '₹' + n.toLocaleString('en-IN')
  return (
    <div className="w-[560px] bg-white p-7 font-sans text-[11px] text-navy">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand-gradient font-display text-[14px] font-bold text-ink">DC</span>
          <div>
            <div className="font-display text-[15px] font-bold">Deccan Cabs Pvt Ltd</div>
            <div className="text-[10px] text-slate-500">Plot 42, Madhapur, Hyderabad 500081</div>
            <div className="text-[10px] text-slate-500">GSTIN 36AAKCD4521M1Z8</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-display text-[16px] font-bold tracking-wide text-teal-dark">TAX INVOICE</div>
          <div className="text-[10px] text-slate-500">INV/25-26/0312</div>
          <div className="text-[10px] text-slate-500">Date: 24 Sep 2025</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-3.5">
        <div>
          <div className="text-[9.5px] font-semibold tracking-wide text-slate-500 uppercase">Billed to</div>
          <div className="mt-0.5 font-semibold">Cyberlink Solutions Pvt Ltd</div>
          <div className="text-[10px] text-slate-500">Hitech City, Hyderabad · GSTIN 36AAFCC9812K1ZQ</div>
        </div>
        <div className="text-right">
          <div className="text-[9.5px] font-semibold tracking-wide text-slate-500 uppercase">Place of supply</div>
          <div className="mt-0.5 font-semibold">Telangana (36)</div>
          <div className="text-[10px] text-slate-500">Due: 04 Oct 2025</div>
        </div>
      </div>
      <table className="mt-4 w-full text-left">
        <thead className="border-b border-slate-200 text-[9.5px] tracking-wide text-slate-500 uppercase">
          <tr><th className="pb-2 font-semibold">Description</th><th className="pb-2 font-semibold">SAC</th><th className="pb-2 text-center font-semibold">Qty</th><th className="pb-2 text-right font-semibold">Amount</th></tr>
        </thead>
        <tbody>
          {items.map(([d, s, sac, q, r]) => (
            <tr key={d} className="border-b border-slate-100">
              <td className="py-2"><div className="font-medium">{d}</div><div className="text-[9.5px] text-slate-500">{s}</div></td>
              <td className="py-2 text-slate-500">{sac}</td>
              <td className="py-2 text-center">{q}</td>
              <td className="py-2 text-right font-semibold">{f(q * r)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 flex items-end justify-between gap-6">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-2.5">
          <QrArt size={64} />
          <div>
            <div className="text-[10px] font-semibold">Pay via UPI</div>
            <div className="text-[9.5px] text-slate-500">deccancabs@okhdfcbank</div>
            <div className="mt-1 text-[9px] text-slate-500">GPay · PhonePe · Paytm · BHIM</div>
          </div>
        </div>
        <div className="w-[210px] text-[10.5px]">
          {[['Taxable value', f(taxable)], ['CGST @ 2.5%', f(cgst)], ['SGST @ 2.5%', f(cgst)]].map(([k, v]) => (
            <div key={k} className="flex justify-between py-0.5"><span className="text-slate-500">{k}</span><span>{v}</span></div>
          ))}
          <div className="mt-1.5 flex justify-between rounded-lg bg-navy px-3 py-2 text-[12px] font-bold text-white"><span>Total</span><span>{f(total)}</span></div>
        </div>
      </div>
      <div className="mt-4 border-t border-dashed border-slate-200 pt-2.5 text-[9.5px] text-slate-500">
        Computer-generated invoice. Rent-a-cab service under SAC 996601 · GST @ 5% without ITC.
      </div>
    </div>
  )
}

/* ---------- Vehicle illustrations (flat, side view) ---------- */
export function CarArt({ body = '#0F172A', accent = '#6a08db', className = '' }) {
  return (
    <svg viewBox="0 0 240 110" className={className} aria-hidden="true">
      <ellipse cx="120" cy="100" rx="104" ry="6" fill="#0F172A" opacity=".10" />
      <path d="M18 74c0-8 5-13 14-15l28-6 26-20c6-5 13-7 21-7h46c9 0 16 3 22 9l20 19 22 4c8 2 13 7 13 15v10c0 4-3 7-7 7H25c-4 0-7-3-7-7V74z" fill={body} />
      <path d="M92 36c4-3 9-5 15-5h19v24H71l21-19zM132 31h19c7 0 12 2 16 7l14 17h-49V31z" fill="#BAE6FD" opacity=".85" />
      <rect x="128" y="31" width="4" height="24" fill={body} />
      <path d="M18 78h204" stroke={accent} strokeWidth="3" />
      <rect x="205" y="62" width="14" height="6" rx="3" fill="#FDE68A" />
      <rect x="20" y="64" width="10" height="5" rx="2.5" fill="#FCA5A5" />
      {[62, 180].map((x) => (
        <g key={x}>
          <circle cx={x} cy="88" r="16" fill="#1E293B" />
          <circle cx={x} cy="88" r="8" fill="#CBD5E1" />
          <circle cx={x} cy="88" r="3" fill="#475569" />
        </g>
      ))}
    </svg>
  )
}

export function VanArt({ body = '#F8FAFC', accent = '#A66CFF', className = '' }) {
  return (
    <svg viewBox="0 0 240 110" className={className} aria-hidden="true">
      <ellipse cx="120" cy="100" rx="108" ry="6" fill="#0F172A" opacity=".10" />
      <path d="M14 30c0-8 6-14 14-14h142c8 0 15 3 20 9l28 30c4 4 8 9 8 15v16c0 4-3 7-7 7H21c-4 0-7-3-7-7V30z" fill={body} stroke="#CBD5E1" strokeWidth="2" />
      {[26, 60, 94, 128].map((x) => <rect key={x} x={x} y="28" width="28" height="22" rx="4" fill="#BAE6FD" />)}
      <path d="M166 28h10c5 0 9 2 12 6l18 20h-40V28z" fill="#BAE6FD" />
      <rect x="14" y="62" width="212" height="6" fill={accent} />
      <rect x="214" y="72" width="12" height="6" rx="3" fill="#FDE68A" />
      {[56, 184].map((x) => (
        <g key={x}>
          <circle cx={x} cy="88" r="15" fill="#1E293B" />
          <circle cx={x} cy="88" r="7" fill="#CBD5E1" />
        </g>
      ))}
    </svg>
  )
}
