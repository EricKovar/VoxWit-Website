import { posts } from '@/lib/vw/mockData'
import { TrendChart } from '@/components/vw/TrendChart'

export default function AnalyticsPage() {
  const scoreTrend = posts.slice(0, 30).map((p,i)=>({ date: `${30-i}`, value: p.vwScore }))
  const engageTrend = posts.slice(0, 30).map((p,i)=>({ date: `${30-i}`, value: Math.round(p.engagementRate*1000)/10 }))
  const byHook = Object.entries(posts.reduce<Record<string, number>>((m,p)=>{ m[p.hookType]=(m[p.hookType]||0)+p.vwScore; return m },{})).map(([k,v])=>({ date: k, value: Math.round(v / posts.filter(p=>p.hookType===k).length) }))
  const byType = Object.entries(posts.reduce<Record<string, number>>((m,p)=>{ m[p.contentType]=(m[p.contentType]||0)+p.vwScore; return m },{})).map(([k,v])=>({ date: k, value: Math.round(v / posts.filter(p=>p.contentType===k).length) }))
  const byDay = Array.from({ length: 7 }).map((_,i)=>{
    const day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][i]
    const vals = posts.filter(p=> new Date(p.date).getDay()===i).map(p=>p.vwScore)
    const avg = vals.length? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0
    return { date: day, value: avg }
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <TrendChart label="VW Score Trend" data={scoreTrend} />
      <TrendChart label="Engagement Trend (%)" data={engageTrend} />
      <TrendChart label="Hook Type Performance (avg VW)" data={byHook} />
      <TrendChart label="Content Type Performance (avg VW)" data={byType} />
      <TrendChart label="Time/Day Performance (avg VW)" data={byDay} />
    </div>
  )
}
