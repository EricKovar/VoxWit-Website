"use client"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

type Props = { data: { date: string; value: number }[]; label?: string }
export function TrendChart({ data, label }: Props) {
  return (
    <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
      <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">{label ?? 'Trend'}</div>
      <div className="px-2 py-2 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
            <XAxis dataKey="date" hide/>
            <YAxis width={40}/>
            <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1f2937', color: '#e2e8f0' }}/>
            <Line type="monotone" dataKey="value" stroke="#4c7bff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
