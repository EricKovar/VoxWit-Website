import { calculateVWScore } from './score';
import type { Post } from './types';
import { useMemo, useState } from 'react';

export function PostTable({ posts }: { posts: Post[] }) {
  const [platform, setPlatform] = useState<string>('all');
  const [hook, setHook] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('vw');

  const rows = useMemo(() => {
    let r = posts.slice();
    if (platform !== 'all') r = r.filter(p => p.platform === platform);
    if (hook !== 'all') r = r.filter(p => (p.hookType || 'none') === hook);

    r.sort((a,b)=>{
      if (sortBy === 'vw') return calculateVWScore(b) - calculateVWScore(a);
      if (sortBy === 'impr') return (b.impressions||0) - (a.impressions||0);
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    return r;
  }, [posts, platform, hook, sortBy]);

  const Th = ({ children }: any) => <th className="text-left p-2 text-xs text-slate-500">{children}</th>;
  const Td = ({ children, mono=false }: any) => <td className={`p-2 ${mono? 'font-mono' : ''}`}>{children}</td>;

  return (
    <div className="mt-4">
      <div className="flex gap-3 items-center mb-2">
        <label>Platform: </label>
        <select value={platform} onChange={e=>setPlatform(e.target.value)}>
          <option value="all">All</option>
          <option value="linkedin">LinkedIn</option>
          <option value="x">X</option>
          <option value="facebook">Facebook</option>
        </select>
        <label>Hook: </label>
        <select value={hook} onChange={e=>setHook(e.target.value)}>
          <option value="all">All</option>
          <option value="contrarian">contrarian</option>
          <option value="insight">insight</option>
          <option value="tension">tension</option>
          <option value="authority">authority</option>
          <option value="none">none</option>
        </select>
        <label>Sort: </label>
        <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
          <option value="vw">VW Score</option>
          <option value="impr">Impressions</option>
          <option value="date">Newest</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white border border-slate-200 rounded-lg overflow-hidden text-slate-900">
          <thead className="bg-slate-50">
            <tr>
              <Th>Post Content</Th>
              <Th>VW Score</Th>
              <Th>Impressions</Th>
              <Th>Likes</Th>
              <Th>Comments</Th>
              <Th>Reposts</Th>
              <Th>Hook Type</Th>
              <Th>Created</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p => (
              <tr key={p.id} className="border-t border-slate-100">
                <Td>{p.content}</Td>
                <Td mono><span className="bg-indigo-50 text-indigo-800 font-bold px-2 py-0.5 rounded-full">{calculateVWScore(p)}</span></Td>
                <Td mono>{p.impressions.toLocaleString()}</Td>
                <Td mono>{p.likes}</Td>
                <Td mono>{p.comments}</Td>
                <Td mono>{p.reposts}</Td>
                <Td>{p.hookType || '—'}</Td>
                <Td mono>{new Date(p.createdAt).toLocaleDateString()}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
