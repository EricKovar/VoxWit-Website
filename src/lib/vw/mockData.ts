import { Aggregates, CommentItem, HookType, Platform, Post } from './types'
import { computeVWScore } from './score'

const platforms: Platform[] = ['twitter', 'tiktok', 'instagram', 'youtube', 'linkedin']
const hooks: HookType[] = ['controversial', 'curiosity', 'novelty', 'challenge', 'question', 'statistic']

function rnd(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min }
function choice<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)] }

export const posts: Post[] = Array.from({ length: 60 }).map((_, i) => {
  const impressions = rnd(1_000, 120_000)
  const likes = rnd(Math.floor(impressions * 0.01), Math.floor(impressions * 0.12))
  const comments = rnd(Math.floor(impressions * 0.002), Math.floor(impressions * 0.02))
  const shares = rnd(Math.floor(impressions * 0.001), Math.floor(impressions * 0.03))
  const engagementRate = (likes + comments + shares) / impressions
  const performance = Math.min(1, impressions / 120_000)
  const engagementQuality = Math.min(1, engagementRate / 0.15)
  const consistency = Math.min(1, (i % 7 === 0 ? 0.6 : 0.9))
  const trend = Math.min(1, (i / 60))
  const vwScore = computeVWScore({ performance, engagementQuality, consistency, trend })
  return {
    id: `post-${i+1}`,
    date: new Date(Date.now() - i * 86400000).toISOString(),
    platform: choice(platforms),
    previewUrl: undefined,
    content: `Sample post content #${i+1} — hook <> body <> CTA`,
    contentType: choice(['short', 'image', 'thread', 'longform', 'carousel'] as const),
    hookType: choice(hooks),
    impressions, likes, comments, shares, engagementRate, vwScore
  }
}).sort((a,b) => +new Date(b.date) - +new Date(a.date))

export const comments: CommentItem[] = posts.slice(0, 25).flatMap((p, idx) => {
  return Array.from({ length: rnd(3, 12) }).map((_, j) => {
    const quality = Math.random() * 0.9
    const trend = Math.random()
    const vwScore = computeVWScore({ performance: Math.random(), engagementQuality: quality, consistency: 0.8, trend })
    return {
      id: `c-${idx}-${j}`,
      postId: p.id,
      date: new Date(+new Date(p.date) + j * 3600_000).toISOString(),
      platform: p.platform,
      content: `Comment ${j+1} on ${p.id}: nice take!`,
      sentiment: quality > 0.6 ? 'positive' : quality > 0.3 ? 'neutral' : 'negative',
      responseQuality: quality,
      vwScore
    }
  })
})

export const aggregates: Aggregates = {
  totalPosts: posts.length,
  totalComments: comments.length,
  totalImpressions: posts.reduce((s,p)=>s+p.impressions,0),
  avgEngagementRate: posts.reduce((s,p)=>s+p.engagementRate,0)/posts.length,
  topHookType: hooks.sort((a,b)=> posts.filter(p=>p.hookType===b).length - posts.filter(p=>p.hookType===a).length)[0],
  vwScore: Math.round(posts.reduce((s,p)=>s+p.vwScore,0)/posts.length)
}

export function getPostById(id: string) { return posts.find(p=>p.id===id) }
