import Link from 'next/link'
import { Post } from '@/lib/vw/types'

export function ContentTable({ rows }: { rows: Post[] }) {
  return (
    <div className="rounded-lg border border-slate-200/10 bg-slate-900/60 shadow-sm">
      <div className="border-b border-slate-200/10 px-4 py-3 text-sm text-slate-300">Posts</div>
      <div className="px-4 py-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Date</th>
              <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Platform</th>
              <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Preview</th>
              <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Content Type</th>
              <th className="border-b border-slate-800 px-3 py-2 text-left text-slate-400 font-normal">Hook Type</th>
              <th className="border-b border-slate-800 px-3 py-2 text-right text-slate-400 font-normal">Impressions</th>
              <th className="border-b border-slate-800 px-3 py-2 text-right text-slate-400 font-normal">Likes</th>
              <th className="border-b border-slate-800 px-3 py-2 text-right text-slate-400 font-normal">Comments</th>
              <th className="border-b border-slate-800 px-3 py-2 text-right text-slate-400 font-normal">Shares</th>
              <th className="border-b border-slate-800 px-3 py-2 text-right text-slate-400 font-normal">Eng. Rate</th>
              <th className="border-b border-slate-800 px-3 py-2 text-right text-slate-400 font-normal">VW Score</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p => (
              <tr key={p.id} className="hover:bg-slate-800/40">
                <td className="border-b border-slate-800 px-3 py-2"><Link className="text-blue-400 hover:underline" href={`/dashboard/posts/${p.id}`}>{new Date(p.date).toLocaleDateString()}</Link></td>
                <td className="border-b border-slate-800 px-3 py-2 uppercase text-slate-400">{p.platform}</td>
                <td className="border-b border-slate-800 px-3 py-2 text-slate-400">–</td>
                <td className="border-b border-slate-800 px-3 py-2 capitalize">{p.contentType}</td>
                <td className="border-b border-slate-800 px-3 py-2 capitalize">{p.hookType}</td>
                <td className="border-b border-slate-800 px-3 py-2 text-right tabular-nums">{p.impressions.toLocaleString()}</td>
                <td className="border-b border-slate-800 px-3 py-2 text-right tabular-nums">{p.likes.toLocaleString()}</td>
                <td className="border-b border-slate-800 px-3 py-2 text-right tabular-nums">{p.comments.toLocaleString()}</td>
                <td className="border-b border-slate-800 px-3 py-2 text-right tabular-nums">{p.shares.toLocaleString()}</td>
                <td className="border-b border-slate-800 px-3 py-2 text-right tabular-nums">{(p.engagementRate*100).toFixed(1)}%</td>
                <td className="border-b border-slate-800 px-3 py-2 text-right tabular-nums font-semibold">{p.vwScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )}
