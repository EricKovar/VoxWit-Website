import { comments } from '@/lib/vw/mockData'

export default function CommentsPage() {
  const metrics = {
    total: comments.length,
    positive: comments.filter(c=>c.sentiment==='positive').length,
    neutral: comments.filter(c=>c.sentiment==='neutral').length,
    negative: comments.filter(c=>c.sentiment==='negative').length,
    avgScore: Math.round(comments.reduce((s,c)=>s+c.vwScore,0)/comments.length)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm"><div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Total Comments</div><div className="px-4 py-3 text-2xl font-semibold">{metrics.total}</div></div>
        <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm"><div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Positive</div><div className="px-4 py-3 text-2xl font-semibold text-emerald-400">{metrics.positive}</div></div>
        <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm"><div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Neutral</div><div className="px-4 py-3 text-2xl font-semibold text-slate-300">{metrics.neutral}</div></div>
        <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm"><div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Negative</div><div className="px-4 py-3 text-2xl font-semibold text-rose-400">{metrics.negative}</div></div>
      </div>

      <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
        <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Comments</div>
        <div className="px-4 py-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Date</th>
                <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Platform</th>
                <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Post</th>
                <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Content</th>
                <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Sentiment</th>
                <th className="border-b border-slate-800 px-3 py-2 text-right text-slate-400 font-normal">Response Quality</th>
                <th className="border-b border-slate-800 px-3 py-2 text-right text-slate-400 font-normal">VW Score</th>
              </tr>
            </thead>
            <tbody>
              {comments.map(c => (
                <tr key={c.id}>
                  <td className="border-b border-slate-800 px-3 py-2">{new Date(c.date).toLocaleString()}</td>
                  <td className="border-b border-slate-800 px-3 py-2 uppercase text-slate-400">{c.platform}</td>
                  <td className="border-b border-slate-800 px-3 py-2 text-slate-300">{c.postId}</td>
                  <td className="border-b border-slate-800 px-3 py-2 max-w-lg truncate text-slate-200" title={c.content}>{c.content}</td>
                  <td className="border-b border-slate-800 px-3 py-2 capitalize">{c.sentiment}</td>
                  <td className="border-b border-slate-800 px-3 py-2 text-right">{Math.round(c.responseQuality*100)}%</td>
                  <td className="border-b border-slate-800 px-3 py-2 text-right font-semibold">{c.vwScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
