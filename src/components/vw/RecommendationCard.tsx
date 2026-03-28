type Props = { title: string; items: { text: string; impact?: 'low'|'med'|'high' }[] }
export function RecommendationCard({ title, items }: Props) {
  const chip = (i?: 'low'|'med'|'high') => i === 'high' ? 'bg-emerald-600/20 text-emerald-300 border-emerald-700' : i === 'med' ? 'bg-yellow-600/20 text-yellow-300 border-yellow-700' : 'bg-slate-700 text-slate-300 border-slate-600'
  return (
    <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
      <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">{title}</div>
      <div className="px-4 py-3 space-y-2">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start justify-between gap-3">
            <p className="text-sm text-slate-200">{it.text}</p>
            <span className={`inline-flex items-center rounded border px-2 py-0.5 text-xs ${chip(it.impact)}`}>{it.impact ?? 'low'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
