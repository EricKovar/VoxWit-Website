type Props = { title: string; items: { text: string; tag?: string }[] }
export function InsightCard({ title, items }: Props) {
  return (
    <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
      <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">{title}</div>
      <div className="px-4 py-3 space-y-2">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start justify-between gap-3">
            <p className="text-sm text-slate-200">{it.text}</p>
            {it.tag && <span className="inline-flex items-center rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs text-slate-300">{it.tag}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
