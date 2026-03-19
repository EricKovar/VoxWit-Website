import type { Post } from './types';
import { generateInsights } from './insights';

export function InsightsPanel({ posts }: { posts: Post[] }) {
  const insights = generateInsights(posts);
  if (!insights.length) return null;
  return (
    <div className="mt-4">
      <div className="bg-white border border-slate-200 rounded-lg p-4">
        <h3 className="text-lg font-medium mb-2 text-slate-900">Insights</h3>
        <ul className="list-disc pl-5 text-slate-900">
          {insights.map((i, idx)=> (
            <li key={idx} className="mb-1">{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
