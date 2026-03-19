import type { Post, Comment } from './types';

export function calculateVWScore(post: Post): number {
  const impressions = Number(post.impressions) || 0;
  if (!impressions) return 0;
  const likes = Number(post.likes) || 0;
  const comments = Number(post.comments) || 0;
  const reposts = Number(post.reposts) || 0;

  const score = (likes * 1 + comments * 3 + reposts * 5) / impressions;
  return Number((score * 100).toFixed(1));
}

export function calculateCommentScore(comment: Comment): number {
  const views = Number(comment.estimatedViews) || 0;
  if (!views) return 0;
  const likes = Number(comment.likes) || 0;
  const replies = Number(comment.replies) || 0;

  const score = (likes + replies * 2) / views;
  return Number((score * 100).toFixed(1));
}

export function getKPI(posts: Post[]) {
  const totalImpressions = posts.reduce((a, p) => a + (Number(p.impressions) || 0), 0);
  const totalEngagement = posts.reduce(
    (a, p) => a + (Number(p.likes) || 0) + (Number(p.comments) || 0) + (Number(p.reposts) || 0),
    0
  );

  const avgVW =
    posts.reduce((a, p) => a + calculateVWScore(p), 0) / (posts.length || 1);

  return {
    totalImpressions,
    totalEngagement,
    avgVW: Number(avgVW.toFixed(1)),
  };
}
