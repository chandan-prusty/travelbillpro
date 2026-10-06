import { useId } from 'react'
import { m } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Catmull-Rom → cubic bezier for smooth lines
function smoothPath(pts) {
  if (pts.length < 2) return ''
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`
  }
  return d
}

function toPoints(data, w, h, pad = 6, max, min = 0) {
  const mx = max ?? Math.max(...data) * 1.1
  const step = (w - pad * 2) / (data.length - 1)
  return data.map((v, i) => [pad + i * step, h - pad - ((v - min) / (mx - min)) * (h - pad * 2)])
}

export function AreaChart({ data, data2, w = 560, h = 160, color = '#6a08db', color2 = '#94A3B8', grid = true, labels, dots = true }) {
  const id = useId().replace(/:/g, '')
  const all = [...data, ...(data2 || [])]
  const hi = Math.max(...all), lo = Math.min(...all)
  const max = hi + (hi - lo) * 0.18
  const min = Math.max(0, lo - (hi - lo) * 0.6)
  const labelSpace = labels ? 18 : 0
  const ch = h - labelSpace
  const pts = toPoints(data, w, ch, 8, max, min)
  const line = smoothPath(pts)
  const area = `${line} L${pts.at(-1)[0]},${ch} L${pts[0][0]},${ch} Z`
  const pts2 = data2 ? toPoints(data2, w, ch, 8, max, min) : null
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`a${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {grid && [0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" x2={w} y1={ch * g} y2={ch * g} stroke="#E2E8F0" strokeDasharray="3 4" />
      ))}
      <m.path d={area} fill={`url(#a${id})`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} />
      {pts2 && (
        <m.path d={smoothPath(pts2)} fill="none" stroke={color2} strokeWidth="2" strokeDasharray="5 5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: EASE }} />
      )}
      <m.path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: EASE }} />
      {dots && (
        <m.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>
          <circle cx={pts.at(-1)[0]} cy={pts.at(-1)[1]} r="9" fill={color} opacity="0.18" />
          <circle cx={pts.at(-1)[0]} cy={pts.at(-1)[1]} r="4.5" fill="#fff" stroke={color} strokeWidth="2.5" />
        </m.g>
      )}
      {labels && labels.map((l, i) => (
        <text key={l} x={pts[i]?.[0]} y={h - 3} textAnchor="middle" fontSize="10" fill="#94A3B8" fontFamily="Inter">{l}</text>
      ))}
    </svg>
  )
}

export function BarChart({ data, data2, w = 300, h = 140, color = '#A66CFF', color2 = '#FBBF24', labels, radius = 4 }) {
  const max = Math.max(...data, ...(data2 || [])) * 1.1
  const labelSpace = labels ? 16 : 0
  const ch = h - labelSpace
  const groupW = w / data.length
  const barW = data2 ? groupW * 0.3 : groupW * 0.52
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
      {data.map((v, i) => {
        const bh = (v / max) * ch
        const x = i * groupW + (groupW - (data2 ? barW * 2 + 3 : barW)) / 2
        return (
          <g key={i}>
            <m.rect x={x} width={barW} rx={radius} fill={color}
              initial={{ height: 0, y: ch }} whileInView={{ height: bh, y: ch - bh }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }} />
            {data2 && (
              <m.rect x={x + barW + 3} width={barW} rx={radius} fill={color2}
                initial={{ height: 0, y: ch }} whileInView={{ height: (data2[i] / max) * ch, y: ch - (data2[i] / max) * ch }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05 + 0.1, ease: EASE }} />
            )}
            {labels && <text x={i * groupW + groupW / 2} y={h - 2} textAnchor="middle" fontSize="9.5" fill="#94A3B8" fontFamily="Inter">{labels[i]}</text>}
          </g>
        )
      })}
    </svg>
  )
}

export function Donut({ segments, size = 120, stroke = 16, children }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const total = segments.reduce((s, x) => s + x.value, 0)
  let offset = 0
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F1F5F9" strokeWidth={stroke} />
        {segments.map((s, i) => {
          const len = (s.value / total) * c
          const el = (
            <m.circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={s.color} strokeWidth={stroke}
              strokeLinecap="butt" strokeDashoffset={-offset}
              initial={{ strokeDasharray: `0 ${c}` }} whileInView={{ strokeDasharray: `${Math.max(len - 2, 0)} ${c}` }}
              viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.3 + i * 0.15, ease: EASE }} />
          )
          offset += len
          return el
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>
  )
}

export function Sparkline({ data, color = '#6a08db', w = 90, h = 28 }) {
  const pts = toPoints(data, w, h, 2, Math.max(...data) * 1.05, Math.min(...data) * 0.9)
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
      <m.path d={smoothPath(pts)} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE }} />
    </svg>
  )
}

export function ProgressBar({ value, color = '#6a08db', className = 'h-1.5' }) {
  return (
    <div className={`w-full overflow-hidden rounded-full bg-slate-100 ${className}`}>
      <m.div className="h-full rounded-full" style={{ background: color }}
        initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: EASE, delay: 0.2 }} />
    </div>
  )
}
