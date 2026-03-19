"use client";
import { useEffect, useState } from 'react';
import { KPIHeader } from '../../components/dashboard/KPIHeader';
import { PostTable } from '../../components/dashboard/PostTable';
import { CommentPanel } from '../../components/dashboard/CommentPanel';
import { InsightsPanel } from '../../components/dashboard/InsightsPanel';
import type { Post, Comment } from '../../components/dashboard/types';
import { loadPosts, loadComments, savePosts, saveComments, resetSeed } from '../../components/dashboard/store';

export default function DashboardPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(()=>{
    setPosts(loadPosts());
    setComments(loadComments());
  },[]);

  const onImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(String(reader.result));
        if (json.posts) { setPosts(json.posts); savePosts(json.posts); }
        if (json.comments) { setComments(json.comments); saveComments(json.comments); }
      } catch {}
    };
    reader.readAsText(file);
  };

  const onExport = () => {
    const blob = new Blob([JSON.stringify({ posts, comments }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'voxwit-demo-data.json'; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-2">Engagement Intelligence Dashboard (Beta demo)</h1>
      <p className="text-slate-500 mb-3">MVP Dashboard powered by VW Score. Seed data is stored in your browser.</p>

      <div className="flex flex-wrap gap-2 mb-3">
        <button onClick={()=>{ const r=resetSeed(); setPosts(r.posts); setComments(r.comments); }} className="bg-violet-600 text-white px-3 py-2 rounded">Reset Seed Data</button>
        <label className="inline-flex items-center gap-2 border border-slate-200 px-3 py-2 rounded bg-white text-slate-900">
          <input type="file" accept="application/json" onChange={onImport} /> Import JSON
        </label>
        <button onClick={onExport} className="border border-slate-200 px-3 py-2 rounded bg-white text-slate-900">Export JSON</button>
      </div>

      <KPIHeader posts={posts} />
      <PostTable posts={posts} />
      <CommentPanel comments={comments} />
      <InsightsPanel posts={posts} />
    </div>
  );
}
