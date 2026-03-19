import type { Post, Comment } from './types';

const POSTS_KEY = 'vw_posts_v1';
const COMMENTS_KEY = 'vw_comments_v1';

export function loadPosts(): Post[] {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(POSTS_KEY) : null;
    return raw ? (JSON.parse(raw) as Post[]) : seedPosts();
  } catch {
    return seedPosts();
  }
}

export function loadComments(): Comment[] {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(COMMENTS_KEY) : null;
    return raw ? (JSON.parse(raw) as Comment[]) : seedComments();
  } catch {
    return seedComments();
  }
}

export function savePosts(posts: Post[]) {
  if (typeof window !== 'undefined') localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}
export function saveComments(comments: Comment[]) {
  if (typeof window !== 'undefined') localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}

export function resetSeed() {
  const p = seedPosts();
  const c = seedComments();
  savePosts(p);
  saveComments(c);
  return { posts: p, comments: c };
}

function iso(d: Date) { return d.toISOString(); }

function seedPosts(): Post[] {
  const now = new Date();
  return [
    {
      id: 'p1',
      content: 'Contrarian take: Most “viral” posts aren’t viral — they’re just well-structured.',
      platform: 'linkedin',
      impressions: 12000,
      likes: 240,
      comments: 85,
      reposts: 40,
      createdAt: iso(new Date(now.getTime()-86400000*6)),
      hookType: 'contrarian',
    },
    {
      id: 'p2',
      content: 'Thread: 3 insights from testing 100 hooks last month.',
      platform: 'x',
      impressions: 58000,
      likes: 910,
      comments: 140,
      reposts: 220,
      createdAt: iso(new Date(now.getTime()-86400000*3)),
      hookType: 'insight',
    },
    {
      id: 'p3',
      content: 'Authority check: Our model beat baseline by 37% on cold starts.',
      platform: 'linkedin',
      impressions: 26000,
      likes: 300,
      comments: 60,
      reposts: 35,
      createdAt: iso(new Date(now.getTime()-86400000*1)),
      hookType: 'authority',
    },
    {
      id: 'p4',
      content: 'Tension: Why your “short posts” underperform after week 2 (and how to fix it).',
      platform: 'facebook',
      impressions: 18000,
      likes: 150,
      comments: 52,
      reposts: 18,
      createdAt: iso(new Date(now.getTime()-86400000*2)),
      hookType: 'tension',
    },
  ];
}

function seedComments(): Comment[] {
  const now = new Date();
  return [
    {
      id: 'c1',
      content: 'This hook template is money. Saw +2x clicks.',
      postId: 'p2',
      likes: 34,
      replies: 5,
      estimatedViews: 2000,
      createdAt: iso(new Date(now.getTime()-3600*1000*30)),
    },
    {
      id: 'c2',
      content: 'Counterpoint: structure matters less than timing in my niche.',
      postId: 'p1',
      likes: 12,
      replies: 9,
      estimatedViews: 1100,
      createdAt: iso(new Date(now.getTime()-3600*1000*20)),
    },
  ];
}
