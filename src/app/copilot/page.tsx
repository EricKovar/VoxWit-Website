"use client";
import { useState } from 'react';

const styles = [
  { key: 'setup_punchline', name: 'Setup → Punchline', desc: 'Expectation / twist' },
  { key: 'rule_of_three', name: 'Rule of Three', desc: 'Beat, beat, break the pattern' },
  { key: 'corporate_satire', name: 'Corporate Satire · Misdirection', desc: 'Jargon with a reveal' },
  { key: 'escalation', name: 'Escalation', desc: 'Stack the stakes' },
  { key: 'contrarian', name: 'Contrarian', desc: 'Flip the default take' },
  { key: 'authority_flex', name: 'Authority Flex', desc: 'Prove it in one line' },
  { key: 'tension', name: 'Tension', desc: 'Tease the conflict' },
  { key: 'analogy', name: 'Analogy', desc: 'Make it vivid' },
  { key: 'list_tease', name: 'List Tease', desc: 'X things, one surprise' },
  { key: 'question_hook', name: 'Question Hook', desc: 'Make them answer' },
];

const HUMOR_ENGINE_URL = process.env.NEXT_PUBLIC_HUMOR_ENGINE_URL ?? 'https://voxwit-humor-engine.onrender.com/generate-hooks';

export default function CopilotPage() {
  const [draft, setDraft] = useState('Automated outreach saved us six hours a week, now the team wants its playbook.');
  const [active, setActive] = useState(styles[0].key);
  const [loading, setLoading] = useState(false);
  const [optA, setOptA] = useState<string>('');
  const [optB, setOptB] = useState<string>('');
  const [optC, setOptC] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    if (!draft.trim()) return;
    setLoading(true); setError(null); setOptA(''); setOptB(''); setOptC('');
    try {
      const res = await fetch(HUMOR_ENGINE_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post_text: draft, tone: 'clever', style: active, max_hooks: 3 })
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      const hooks: { text: string }[] = data.hooks ?? [];
      setOptA(hooks[0]?.text ?? '—');
      setOptB(hooks[1]?.text ?? '—');
      setOptC(hooks[2]?.text ?? '—');
    } catch (e:any) {
      setError(e.message ?? 'Unknown error');
    } finally { setLoading(false); }
  };

  const Capsule = ({ children, activeState=false, onClick }:{children:React.ReactNode, activeState?:boolean, onClick?:()=>void}) => (
    <button onClick={onClick} className={`rounded-full px-4 py-2 border ${activeState? 'border-sky-400 bg-sky-400/10':'border-slate-700/60 bg-slate-800/40'} hover:border-sky-400 transition text-sm`}>{children}</button>
  );

  const Tile = ({ s }: { s: typeof styles[number] }) => (
    <Capsule onClick={()=>setActive(s.key)} activeState={active===s.key}>
      <div className="font-semibold text-sm">{s.name}</div>
    </Capsule>
  );

  const Card = ({ title, text }: { title: string; text: string }) => (
    <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs tracking-widest text-slate-400">{title.toUpperCase()}</div>
        <button className="text-xs px-2 py-1 rounded bg-slate-700 hover:bg-slate-600" onClick={()=>navigator.clipboard.writeText(text || '')}>Copy</button>
      </div>
      <div className="rounded-lg bg-slate-900/70 p-3 text-slate-100 min-h-16">{text || 'Hook preview will appear here.'}</div>
    </div>
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-6">
      {/* Brand row */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/30 grid place-items-center">VW</div>
            <div>
              <p className="font-semibold">VoxWit Copilot (Beta)</p>
              <p className="text-xs text-slate-400">Craft clever posts to #StopTheScroll</p>
            </div>
          </div>
          <a href="https://voxwit.com" target="_blank" className="text-sm text-slate-300 hover:text-white">voxwit.com</a>
        </div>

        {/* Status line */}
        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-200 text-xs px-3 py-1">Draft detected</span>
          <span className="text-xs text-slate-400">LinkedIn • live capture</span>
        </div>

        {/* Improve hook header */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Improve hook</p>
            <p className="text-sm text-slate-400">Pick a <span className="text-sky-300">style</span>, generate, copy your fav.</p>
          </div>
          <button onClick={generate} disabled={loading} className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
            {loading? 'Generating…' : 'Generate'}
          </button>
        </div>

        {/* Style buttons (4) */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {styles.slice(0,4).map(s=> <Tile key={s.key} s={s} />)}
        </div>

        {error && <p className="mt-3 text-sm text-rose-400">{error}</p>}

        {/* Options A/B/C */}
        <div className="mt-4 grid gap-4">
          <Card title="Option A • Setup → Punchline" text={optA} />
          <Card title="Option B • Setup → Punchline" text={optB} />
          <Card title="Option C • Setup → Punchline" text={optC} />
        </div>

        {/* Coming soon */}
        <div className="mt-6">
          <p className="text-xs tracking-widest text-slate-500 mb-2">COMING SOON</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 opacity-60">
              <p className="font-medium">Clean rewrite</p>
              <p className="text-xs text-slate-400">Lean version of your full post</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 opacity-60">
              <p className="font-medium">Humor riff</p>
              <p className="text-xs text-slate-400">Light observational wit</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 opacity-60">
              <p className="font-medium">Full rewrite</p>
              <p className="text-xs text-slate-400">Structured story arc</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
