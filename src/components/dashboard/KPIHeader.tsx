import { getKPI } from './score';
import type { Post } from './types';

export function KPIHeader({ posts }: { posts: Post[] }) {
  const kpi = getKPI(posts);
  const Card = ({ label, value }: { label: string; value: string | number }) => (
    <div className="bg-white rounded-lg border border-slate-200 p-4 min-w-40 shadow-sm">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
    </div>
  );

  return (
    <div className="flex gap-3 flex-wrap">
      <Card label="Avg VW Score" value={kpi.avgVW} />
      <Card label="Total Impressions" value={kpi.totalImpressions.toLocaleString()} />
      <Card label="Total Engagement" value={kpi.totalEngagement.toLocaleString()} />
    </div>
  );
}
