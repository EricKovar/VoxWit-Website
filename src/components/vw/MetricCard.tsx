type Props = { label: string; value: string | number; hint?: string }
export function MetricCard({ label, value, hint }: Props) {
  return (
    <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
      <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">{label}</div>
      <div className="px-4 py-3">
        <div className="text-xl font-semibold text-slate-100">{value}</div>
        {hint && <div className="mt-1 text-xs text-slate-400">{hint}</div>}
      </div>
    </div>
  )
}
