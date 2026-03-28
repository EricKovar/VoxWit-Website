import { aggregates, posts } from '@/lib/vw/mockData'
import { ScoreCard } from '@/components/vw/ScoreCard'
import { MetricCard } from '@/components/vw/MetricCard'
import { TrendChart } from '@/components/vw/TrendChart'
import { InsightCard } from '@/components/vw/InsightCard'
import { RecommendationCard } from '@/components/vw/RecommendationCard'

export default function Dashboard() {
  const trend = posts.slice(0, 20).map((p, i) => ({ date: `${20-i}`, value: p.vwScore }))
  const insights = [
    { text: 'Curiosity hooks are outperforming other types by 14% last 14d', tag: 'hooks' },
    { text: 'Short-form on TikTok shows rising engagement after 5pm PT', tag: 'timing' },
  ]
  const recs = [
    { text: 'Increase curiosity hooks to 40-50% of output next week', impact: 'high' as const },
    { text: 'Batch produce 3 shorts with strong first-2s motion cues', impact: 'med' as const },
    { text: 'Test statistic hooks on LinkedIn with contrarian angle', impact: 'low' as const },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <ScoreCard label="VW Score" score={aggregates.vwScore} subtitle="Last 30 days" />
        <MetricCard label="Total Posts" value={aggregates.totalPosts} />
        <MetricCard label="Total Comments" value={aggregates.totalComments} />
        <MetricCard label="Total Impressions" value={aggregates.totalImpressions.toLocaleString()} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <MetricCard label="Avg Engagement Rate" value={(aggregates.avgEngagementRate*100).toFixed(2) + '%'} />
        <MetricCard label="Top Hook Type" value={aggregates.topHookType} />
        <MetricCard label="Posting Cadence" value={`~${Math.round(aggregates.totalPosts/30)} / day`} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <TrendChart label="VW Score Trend" data={trend} />
        </div>
        <div className="space-y-4">
          <InsightCard title="Insights" items={insights} />
          <RecommendationCard title="Recommendations" items={recs} />
        </div>
      </div>
    </div>
  )
}
