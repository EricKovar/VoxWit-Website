import { getPostById, posts } from '@/lib/vw/mockData'
import { notFound } from 'next/navigation'

export default function PostDetail({ params }: { params: { id: string } }) {
  const post = getPostById(params.id)
  if (!post) return notFound()
  const benchmark = Math.round(posts.reduce((s,p)=>s+p.vwScore,0)/posts.length)

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
        <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Post Content</div>
        <div className="px-4 py-3 space-y-2">
          <div className="text-slate-400 text-sm">{new Date(post.date).toLocaleString()} • {post.platform.toUpperCase()}</div>
          <p className="text-slate-100 whitespace-pre-wrap">{post.content}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
          <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Performance Metrics</div>
          <div className="px-4 py-3 grid grid-cols-2 gap-3 text-sm">
            <div>Impressions<br/><span className="text-xl font-semibold">{post.impressions.toLocaleString()}</span></div>
            <div>Engagement Rate<br/><span className="text-xl font-semibold">{(post.engagementRate*100).toFixed(2)}%</span></div>
            <div>Likes<br/><span className="text-xl font-semibold">{post.likes.toLocaleString()}</span></div>
            <div>Comments<br/><span className="text-xl font-semibold">{post.comments.toLocaleString()}</span></div>
            <div>Shares<br/><span className="text-xl font-semibold">{post.shares.toLocaleString()}</span></div>
            <div>VW Score<br/><span className="text-xl font-semibold">{post.vwScore}</span></div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
          <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Hook Analysis</div>
          <div className="px-4 py-3 text-sm space-y-2">
            <div>Hook Type: <span className="inline-flex items-center rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs capitalize">{post.hookType}</span></div>
            <p>First-2s strength: moderate. Pattern-break potential: good. Curiosity gap: adequate.</p>
            <p>Suggested variants: invert premise, amp novelty with concrete stat, add time-bound challenge.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
          <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Benchmark Comparison</div>
          <div className="px-4 py-3 text-sm">
            <p>VW Score vs cohort average: <span className="font-semibold">{post.vwScore}</span> vs <span className="font-semibold">{benchmark}</span></p>
            <p className="mt-2">This post ranks in the top {Math.max(1, Math.round((1 - (post.vwScore/100)) * 100))} percentile by VW Score.</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
          <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Learnings</div>
          <div className="px-4 py-3 text-sm space-y-2">
            <ul className="list-disc pl-5 space-y-1">
              <li>Lead with visual motion and a concrete outcome in the first sentence.</li>
              <li>Trim setup; get to the core payoff by 3s in shorts.</li>
              <li>Repost on a different daypart; current cohort peaks 5-7pm PT.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
