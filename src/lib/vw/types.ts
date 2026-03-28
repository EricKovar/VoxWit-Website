export type Platform = 'twitter' | 'tiktok' | 'instagram' | 'youtube' | 'linkedin'
export type ContentType = 'short' | 'image' | 'thread' | 'longform' | 'carousel'
export type HookType = 'controversial' | 'curiosity' | 'novelty' | 'challenge' | 'question' | 'statistic'

export interface Post {
  id: string
  date: string // ISO
  platform: Platform
  previewUrl?: string
  content: string
  contentType: ContentType
  hookType: HookType
  impressions: number
  likes: number
  comments: number
  shares: number
  engagementRate: number // 0..1
  vwScore: number // 0..100
}

export interface CommentItem {
  id: string
  postId: string
  date: string
  platform: Platform
  content: string
  sentiment: 'positive' | 'neutral' | 'negative'
  responseQuality: number // 0..1
  vwScore: number // 0..100
}

export interface Aggregates {
  totalPosts: number
  totalComments: number
  totalImpressions: number
  avgEngagementRate: number
  topHookType: HookType
  vwScore: number
}
