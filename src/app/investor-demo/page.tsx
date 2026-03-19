"use client";
import { useState } from "react";

const DEFAULT_DRAFT =
  "Automated outreach saved us six hours a week, now the team wants its playbook.";

const structures = [
  { id: "setup", label: "Setup → Punchline", blurb: "Expectation, twist, done.", sample: "Automate the boring chore, then brag that your inbox asked for PTO." },
  { id: "rule", label: "Rule of Three", blurb: "Beat, beat, unexpected beat.", sample: "Built, tested, bragged—only one of those required caffeine." },
  { id: "misdirection", label: "Misdirection", blurb: "Lead them one way, swing back.", sample: "My boss said we needed ‘hands‑on leadership,’ so I handed it to automation." },
  { id: "comparison", label: "Comparison / Analogy", blurb: "X is like Y because Z.", sample: "Scheduling handoffs was like herding cats, so I gave the cats a calendar." },
  { id: "escalation", label: "Escalation", blurb: "Keep ratcheting the stakes.", sample: "Automated one follow‑up, then the whole sequence, then my boss’s brag post." },
  { id: "reveal", label: "Comic Reveal", blurb: "Hide a detail until the end.", sample: "I said the workflow was hands‑off. Forgot to mention those hands now belong to a bot." },
  { id: "character", label: "Character Perspective", blurb: "Exaggerated POV narrates the joke.", sample: "My inner ops gremlin automated the draft and now HR wants to hire it." },
  { id: "reversal", label: "Reversal", blurb: "Flip the hierarchy.", sample: "Tried to unplug for the weekend. The automation sent me an out‑of‑office reply." },
  { id: "literal", label: "Absurd Literalism", blurb: "Take the phrase literally.", sample: "We needed more touchpoints, so I taught automation to say ‘poke.’" },
  { id: "hyperbole", label: "Exaggeration / Hyperbole", blurb: "Blow it out of proportion.", sample: "My inbox is so calm the automation started a meditation podcast." },
] as const;

export default function InvestorDemoPage() {
  type Structure = (typeof structures)[number];

  const [draft, setDraft] = useState<string>(DEFAULT_DRAFT);
  const [active, setActive] = useState<Structure>(structures[0]);
  const [opts, setOpts] = useState<string[]>([
    "Hook preview will appear here.",
    "Hook preview will appear here.",
    "Hook preview will appear here.",
  ]);
  const [loading, setLoading] = useState(false);
  const [live, setLive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setLoading(true);
    setError(null);
    try {
      if (live) {
        const res = await fetch("/api/generate-hooks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ post_text: draft, tone: "clever", style: active.id, max_hooks: 3 }),
        });
        if (!res.ok) throw new Error(`API ${res.status}`);
        const data = await res.json();
        const hooks: { text: string }[] = data.hooks ?? [];
        const out = hooks.map((h) => h.text).filter(Boolean);
        setOpts(out.length ? out : ["—", "—", "—"]);
        return;
      }
      const src = draft.trim() || DEFAULT_DRAFT;
      const snippet = src.length > 140 ? `${src.slice(0, 137)}…` : src;
      const first = (src.split(/\s+/).filter(Boolean)[0] ?? "it").toLowerCase();
      setOpts([
        `${active.sample} ${snippet}`,
        `${active.sample} (proof: ${snippet})`,
        `${active.sample} (CTA: tell me how you’d scale ${first})`,
      ]);
    } catch (e: any) {
      setError(e?.message || "Unable to generate");
      setOpts([`Error: ${e?.message || "Unknown"}`, "", ""]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 text-slate-100">
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-xl">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/30 grid place-items-center">VW</div>
            <div>
              <p className="font-semibold">VoxWit Copilot (Beta)</p>
              <p className="text-xs text-slate-400">Comment Copilot · Investor Demo</p>
            </div>
          </div>
          <a href="https://voxwit.com" target="_blank" className="text-sm text-slate-300 hover:text-white">voxwit.com</a>
        </header>

        <div className="mt-4 grid gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs tracking-widest text-slate-400 mb-1">TEXT BOX</p>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="w-full min-h-[96px] bg-slate-950/50 border border-slate-800 rounded-lg p-3 text-slate-100 outline-none"
            />
          </div>

          <div>
            <p className="font-medium mb-1">Improve hook</p>
            <p className="text-sm text-slate-400">Pick a <span className="text-sky-300">style</span>, generate, copy your favorite.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {structures.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`rounded-lg border px-3 py-2 text-left text-sm ${
                  active.id === s.id
                    ? "border-sky-400 bg-sky-400/10 text-sky-100"
                    : "border-slate-700/60 bg-slate-800/40 text-sky-300"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 rounded-lg border border-slate-800 bg-slate-900/50 p-3 text-sm">
              <span className="text-sky-300">{active.label}</span>: {active.blurb}
            </div>
            <label className="text-sm text-slate-300 flex items-center gap-2">
              <input type="checkbox" checked={live} onChange={(e) => setLive(e.target.checked)} /> Live API
            </label>
            <button
              onClick={generate}
              disabled={loading}
              className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold disabled:opacity-60"
            >
              {loading ? "Generating…" : "Generate"}
            </button>
          </div>

          {error && <p className="text-sm text-rose-400">{error}</p>}

          <div className="grid gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs tracking-widest text-slate-400">OPTION {String.fromCharCode(65 + i)}</p>
                    <p className="text-xs text-slate-500">Ready to paste</p>
                  </div>
                  <button
                    className="text-xs px-2 py-1 rounded bg-slate-800 hover:bg-slate-700"
                    onClick={() => navigator.clipboard.writeText(opts[i] || "")}
                  >
                    Copy
                  </button>
                </div>
                <div className="rounded-lg bg-slate-950/50 p-3 text-slate-100 min-h-[64px]">
                  {opts[i]}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 text-xs text-slate-500">LinkedIn-only MVP · Manual copy for now · Powered by VoxWit Copilot</div>
        </div>
      </div>
    </main>
  );
}
