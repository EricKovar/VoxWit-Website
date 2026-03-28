type Props = { label: string; score: number; subtitle?: string }
export function ScoreCard({ label, score, subtitle }: Props) {
  const band = score >= 80 ? 'bg-emerald-500' : score >= 60 ? 'bg-yellow-500' : 'bg-rose-500'
  return (
    <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
      <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">{label}</div>
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="text-3xl font-bold text-slate-100">{score}</div>
        <div className={`h-8 w-8 rounded ${band}`} />
      </div>
      {subtitle && <div className="px-4 pb-3 text-xs text-slate-400">{subtitle}</div>}
    </div>
  )
}
