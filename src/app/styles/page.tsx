"use client";
import { useState } from 'react';

const styles = [
  'Setup → Punchline',
  'Rule of Three',
  'Corporate Satire · Misdirection',
  'Escalation',
  'Contrarian',
  'Authority Flex',
  'Tension',
  'Analogy',
  'List Tease',
  'Question Hook',
];

const HUMOR_ENGINE_URL = process.env.NEXT_PUBLIC_HUMOR_ENGINE_URL ?? 'https://voxwit-humor-engine.onrender.com/generate-hooks';

export default function StylesPage() {
  const [text, setText] = useState('Paste a topic or draft…');
  const [results, setResults] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    const out: Record<string,string> = {};
    for (const s of styles) {
      try {
        const res = await fetch(HUMOR_ENGINE_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ post_text: text, tone: 'clever', style: s, max_hooks: 1 })});
        const data = await res.json();
        out[s] = data.hooks?.[0]?.text ?? '—';
      } catch {
        out[s] = 'Error generating';
      }
    }
    setResults(out);
    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-2xl font-semibold mb-2">10 Hook Styles (Live)</h1>
      <p className="text-slate-400 mb-4">Enter a topic or draft, then generate one example per style.</p>
      <textarea className="w-full rounded-lg border border-slate-700/50 bg-slate-900 p-3 text-slate-100" rows={4} value={text} onChange={e=>setText(e.target.value)} />
      <div className="mt-3">
        <button onClick={run} disabled={loading} className="rounded bg-violet-600 px-4 py-2 font-semibold text-white disabled:opacity-60">{loading? 'Generating…' : 'Generate all'}</button>
      </div>

      <div className="mt-6 grid gap-3">
        {styles.map((s)=> (
          <div key={s} className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
            <div className="text-sm font-semibold">{s}</div>
            <p className="mt-1 text-slate-200">{results[s] ?? '—'}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
