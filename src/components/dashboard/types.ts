export type Platform = 'linkedin' | 'x' | 'facebook';

export type Post = {
  id: string;
  content: string;
  platform: Platform;
  impressions: number;
  likes: number;
  comments: number;
  reposts: number;
  createdAt: string; // ISO
  hookType?: 'contrarian' | 'insight' | 'tension' | 'authority';
};

export type Comment = {
  id: string;
  content: string;
  postId?: string;
  likes: number;
  replies: number;
  estimatedViews?: number;
  createdAt: string; // ISO
};
