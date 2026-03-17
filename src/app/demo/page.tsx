'use client';

import { FormEvent, useMemo, useState } from 'react';

interface HookResult {
  structure: string;
  text: string;
  score: number;
}

interface LogEntry {
  id: string;
  time: string;
  snippet: string;
  hooks: number;
}

const industries = ['SaaS', 'Fintech', 'Healthcare', 'Manufacturing', 'Consulting'];
const tones = ['professional', 'bold', 'warm'];
const defaultPost =
  'Product teams should talk to customers earlier. We wait for churn before we run an interview, which is upside-down.';

const HUMOR_ENGINE_URL =
  process.env.NEXT_PUBLIC_HUMOR_ENGINE_URL ?? 'https://voxwit-humor-engine.onrender.com/generate-hooks';

export default function DemoPage() {
  const [postText, setPostText] = useState(defaultPost);
  const [industry, setIndustry] = useState('SaaS');
  const [tone, setTone] = useState('professional');
  const [maxHooks, setMaxHooks] = useState(4);
  const [hooks, setHooks] = useState<HookResult[]>([]);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const topScore = useMemo(() => hooks[0]?.score ?? null, [hooks]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!postText.trim()) {
      setErrorMessage('Please paste a LinkedIn draft first.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch(HUMOR_ENGINE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post_text: postText,
          industry,
          tone,
          max_hooks: maxHooks,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      const data = (await response.json()) as { hooks?: HookResult[] };
      const newHooks = data.hooks ?? [];
      setHooks(newHooks);
      setStatus('idle');

      setLog((previous) => [
        {
          id: crypto.randomUUID(),
          time: new Date().toLocaleTimeString(),
          snippet: postText.slice(0, 80),
          hooks: newHooks.length,
        },
        ...previous,
      ].slice(0, 5));
    } catch (error) {
      setStatus('error');
      setErrorMessage((error as Error).message ?? 'Unknown error');
    }
  };

  return (
    <main className="demo-app-shell">
      <header>
        <div>
          <p className="demo-eyebrow">VoxWit · Humor Engine</p>
          <h1>Demo clever hooks live in the browser</h1>
          <p className="demo-subtitle">
            Paste a LinkedIn draft, tweak tone, and watch the live API respond from
            <a href="https://voxwit.com" target="_blank" rel="noreferrer"> voxwit.com</a>.
          </p>
        </div>
        <div className="demo-status-card">
          <p className="demo-label">Top score</p>
          <p className="demo-value">{topScore ? topScore.toFixed(3) : '—'}</p>
          <p className="demo-label">Hooks ready</p>
          <p className="demo-value">{hooks.length || '—'}</p>
        </div>
      </header>

      <section className="demo-panel">
        <form onSubmit={handleSubmit} className="demo-form">
          <label htmlFor="postText">LinkedIn draft</label>
          <textarea
            id="postText"
            value={postText}
            onChange={(event) => setPostText(event.target.value)}
            rows={6}
            placeholder="Paste or write a LinkedIn hook..."
          />

          <div className="demo-form-grid">
            <label>
              Industry
              <select value={industry} onChange={(event) => setIndustry(event.target.value)}>
                {industries.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Tone
              <select value={tone} onChange={(event) => setTone(event.target.value)}>
                {tones.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Max hooks
              <input
                type="number"
                min={3}
                max={6}
                value={maxHooks}
                onChange={(event) => setMaxHooks(Number(event.target.value))}
              />
            </label>
          </div>

          <div className="demo-actions">
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Generating…' : 'Generate hooks'}
            </button>
            <button type="button" className="demo-ghost" onClick={() => setPostText(defaultPost)}>
              Load sample copy
            </button>
          </div>

          {status === 'error' && errorMessage && <p className="demo-error">{errorMessage}</p>}
        </form>
      </section>

      <section className="demo-panel">
        <div className="demo-results-header">
          <h2>Hooks</h2>
          <span>{hooks.length ? `${hooks.length} results` : 'No hooks yet'}</span>
        </div>
        <div className="demo-hook-grid">
          {hooks.map((hook) => (
            <article key={`${hook.structure}-${hook.text}`} className="demo-hook-card">
              <div className="demo-hook-meta">
                <span className="demo-structure">{hook.structure}</span>
                <span className="demo-score">Score {hook.score.toFixed(3)}</span>
              </div>
              <p>{hook.text}</p>
              <button type="button" onClick={() => navigator.clipboard.writeText(hook.text)}>
                Copy hook
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="demo-panel">
        <div className="demo-results-header">
          <h2>Live requests</h2>
          <span>Most recent 5</span>
        </div>
        <ul className="demo-log-list">
          {log.length === 0 && <li className="demo-muted">Run a request to populate the log.</li>}
          {log.map((entry) => (
            <li key={entry.id}>
              <p className="demo-log-snippet">
                {entry.snippet}
                {entry.snippet.length === 80 ? '…' : ''}
              </p>
              <p className="demo-log-meta">
                {entry.time} · {entry.hooks} hooks
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
