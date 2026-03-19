import type { Post } from './types';
import { calculateVWScore } from './score';

export function generateInsights(posts: Post[]) {
  const insights: string[] = [];
  if (!posts.length) return insights;

  const highPerformers = posts.filter((p) => calculateVWScore(p) > 70);
  if (highPerformers.length > 0) insights.push('High-performing posts share strong hooks.');

  const shortPosts = posts.filter((p) => p.content.length < 200);
  if (shortPosts.length > posts.length / 2) insights.push('Shorter posts are outperforming longer ones.');

  const byHook: Record<string, number[]> = {};
  posts.forEach((p) => {
    const h = p.hookType || 'none';
    byHook[h] = byHook[h] || [];
    byHook[h].push(calculateVWScore(p));
  });
  const entries = Object.entries(byHook).map(([h, arr]) => [h, arr.reduce((a,b)=>a+b,0)/arr.length] as const);
  entries.sort((a,b)=> (b[1]||0) - (a[1]||0));
  if (entries.length > 1 && entries[0][0] !== 'none') {
    insights.push(`Hooks like "${entries[0][0]}" are trending above others this period.`);
  }

  return insights.slice(0, 3);
}
