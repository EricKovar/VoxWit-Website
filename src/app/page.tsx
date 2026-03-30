"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how" },
  { label: "VW Score", href: "#score" },
  { label: "Use Cases", href: "#use-cases" },
] as const;

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25">
        V
      </div>
      <div>
        <div className="text-lg font-semibold tracking-tight text-white">VoxWit</div>
        <div className="text-xs uppercase tracking-[0.22em] text-white/45">Attention Engine</div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{text}</p> : null}
    </div>
  );
}

export default function Landing() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isEmailValid = useMemo(() => /\S+@\S+\.\S+/.test(email), [email]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function handleWaitlistSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isEmailValid) return setStatus("error");
    try {
      setStatus("loading");
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "voxwit-landing-page" }),
      });
      if (!res.ok) throw new Error("submit_failed");
      setStatus("success");
      setEmail("");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <main className="relative min-h-screen bg-[#07111f] text-white">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[24rem] w-[24rem] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="#top" className="shrink-0"><BrandMark /></Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex" aria-label="Primary">
            {navItems.map((i) => (
              <Link key={i.href} href={i.href} className="transition hover:text-white">{i.label}</Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link href="#waitlist" className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100">Get Early Access</Link>
          </div>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            <span className="sr-only">Menu</span>
            <div className="h-4 w-5">
              <div className={`h-0.5 w-5 bg-white transition ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`}></div>
              <div className={`mt-1 h-0.5 w-5 bg-white transition ${mobileOpen ? "opacity-0" : ""}`}></div>
              <div className={`mt-1 h-0.5 w-5 bg-white transition ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`}></div>
            </div>
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#07111f]/95 px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              {navItems.map((i) => (
                <Link key={i.href} href={i.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-2 py-1 transition hover:bg-white/5 hover:text-white">{i.label}</Link>
              ))}
              <Link href="#waitlist" onClick={() => setMobileOpen(false)} className="mt-2 w-full rounded-2xl bg-white px-5 py-2 text-center text-slate-950 hover:bg-slate-100">Get Early Access</Link>
            </div>
          </div>
        )}
      </header>

      <div id="top" className="relative z-10">
        {/* Hero */}
        <section className="px-6 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">LinkedIn-first • Measurable engagement</div>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">Turn everyday writing into <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">measurable engagement.</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">VoxWit helps you write stronger posts, craft smarter comments, and learn what drives visibility, trust, and organic growth.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#waitlist" className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-950 hover:bg-slate-100">Get Early Access</Link>
                <Link href="#how" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">See How It Works</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                {["Better hooks", "Smarter comments", "VW Score", "Built for professionals"].map((item) => (
                  <div key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{item}</div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-emerald-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="p-5 md:p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">VoxWit Performance Studio</div>
                      <div className="text-xs text-slate-400">Draft → Optimize → Publish → Track</div>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">Live Preview</div>
                  </div>

                  <div className="grid gap-4 xl:grid-cols-[1.1fr_1fr]">
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-[#09172b] p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Draft</div>
                          <div className="text-xs text-slate-500">LinkedIn Post</div>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">I have been thinking a lot about how AI tools are changing writing. Most people focus on speed, but the real issue is whether your writing actually earns attention...</div>
                      </div>

                      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Optimized Version</div>
                          <div className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-cyan-100">Hook Type: Insight + Contrarian</div>
                        </div>
                        <div className="rounded-xl bg-[#081425] p-4 text-sm leading-6 text-slate-200">Most AI writing tools help you finish faster. Very few help you get remembered. That is the difference between generating content and earning attention.</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-[#09172b] p-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">VW Score</div>
                        <div className="mt-3 flex items-end justify-between">
                          <div>
                            <div className="text-5xl font-semibold text-white">87</div>
                            <div className="mt-1 text-sm text-emerald-300">+12 vs. baseline</div>
                          </div>
                          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200">Top 18%</div>
                        </div>
                        <div className="mt-5 space-y-3">
                          {[ ["Hook strength", "92"], ["Comment potential", "81"], ["Clarity", "88"] ].map(([label, value]) => (
                            <div key={label}>
                              <div className="mb-1 flex justify-between text-xs text-slate-400"><span>{label}</span><span>{value}</span></div>
                              <div className="h-2 rounded-full bg-white/5"><div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" style={{ width: `${value}%` }} /></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-[#09172b] p-4">
                          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Impressions</div>
                          <div className="mt-2 text-2xl font-semibold">18.4K</div>
                          <div className="text-sm text-emerald-300">+23%</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-[#09172b] p-4">
                          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Engagement Rate</div>
                          <div className="mt-2 text-2xl font-semibold">6.8%</div>
                          <div className="text-sm text-emerald-300">Above average</div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-[#09172b] p-4">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Recommendations</div>
                        <div className="space-y-2 text-sm text-slate-300">
                          <div className="rounded-xl bg-white/5 px-3 py-2">Lead with a more opinionated opening line.</div>
                          <div className="rounded-xl bg-white/5 px-3 py-2">Ask a stronger closing question to increase comments.</div>
                          <div className="rounded-xl bg-white/5 px-3 py-2">Reuse this hook structure for founder audience posts.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature stripes */}
        <section className="border-b border-t border-white/10 bg-white/[0.03] px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {[ ["Write better", "Sharper hooks, stronger framing, and less time spent second-guessing every draft."], ["Engage smarter", "Comments become a visibility engine instead of another task on your list."], ["Learn faster", "VW Score closes the loop so your content improves over time."] ].map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="text-xl font-semibold text-white">{title}</div>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product pillars */}
        <section id="product" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Product" title="One system for posts, comments, and engagement learning." text="VoxWit improves what you write before publish, strengthens how you engage after publish, and measures what actually works." />
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                ["PostPilot", "Rewrite drafts with stronger hooks, sharper framing, and more engaging structure before you publish."],
                ["ComPilot", "Craft comments that sound thoughtful, distinct, and built to start real conversations."],
                ["VW Score", "Track results, measure performance, and learn what actually drives visibility and trust over time."],
              ].map(([title, text], idx) => (
                <div key={String(title)} className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-xl shadow-black/10 backdrop-blur-xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-cyan-200">{idx + 1}</div>
                  <h3 className="text-2xl font-semibold text-white">{title as string}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="How it works" title="Write → Optimize → Publish → Track → Score → Learn" text="VoxWit is not just another text generator. It is a feedback loop designed to make your content — and your results — measurably better." />
            <div className="grid gap-4 lg:grid-cols-6">
              {[
                ["Write", "Start with your original draft, post idea, or comment in your own voice."],
                ["Optimize", "Get stronger hooks, sharper framing, and better engagement-oriented suggestions."],
                ["Publish", "Choose the version you want to ship and publish with more confidence."],
                ["Track", "Capture real-world performance signals from the content you publish."],
                ["Score", "Turn raw metrics into a signal users can actually understand and improve."],
                ["Learn", "Use patterns and feedback to make the next post or comment stronger."],
              ].map(([t, d], i) => (
                <div key={String(t)} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">0{i + 1}</div>
                  <div className="mt-3 text-xl font-semibold text-white">{t as string}</div>
                  <div className="mt-3 text-sm leading-6 text-slate-300">{d as string}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VW Score */}
        <section id="score" className="px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">VW Score</div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">A performance signal your users can actually learn from.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">VW Score converts raw engagement signals into a clear measurement system. Instead of guessing whether a post worked, users can track performance, compare patterns, and improve with intent.</p>
              <div className="mt-8 space-y-4 text-slate-300">
                {["Benchmark post and comment performance over time", "Spot which hook types consistently outperform", "Identify what drives visibility, trust, and conversation"].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <div className="leading-7">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">VW Score Dashboard</div>
                  <div className="text-sm text-slate-400">Engagement, benchmark, and learnings</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Last 30 days</div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {[["VW Score", "87"], ["Posts", "42"], ["Comments", "118"], ["Avg. ER", "6.8%"]].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-[#09172b] p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
                    <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-[#09172b] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">VW Score Trend</div>
                  <div className="h-4 w-24 rounded bg-white/10" />
                </div>
                <div className="flex h-56 items-end gap-3">
                  {[38, 44, 51, 49, 62, 74, 87].map((h, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-2">
                      <div className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-500 to-violet-500" style={{ height: `${h * 1.6}px` }} />
                      <div className="text-[11px] text-slate-500">W{i + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Use cases" title="Built for people who win when attention compounds." text="VoxWit is designed for professionals and teams who need better content performance, not just more text." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Founders & Operators", "Stay visible, build credibility, and turn posting into a repeatable growth habit."],
                ["Consultants", "Turn expertise into stronger positioning, better engagement, and more inbound interest."],
                ["Creators", "Publish faster, comment smarter, and keep your audience engaged without burning hours."],
                ["Agencies & Teams", "Give your team a system for quality, consistency, and measurable performance at scale."],
              ].map(([title, text]) => (
                <div key={String(title)} className="h-full rounded-[1.9rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">•</div>
                  <div className="text-xl font-semibold text-white">{title as string}</div>
                  <p className="mt-3 leading-7 text-slate-300">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes + Waitlist */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">Outcomes</div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">What better engagement actually creates.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">VoxWit turns social content from a mental drain into a repeatable system for visibility, trust, and growth.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["More visibility", "Stronger audience trust", "Better conversations", "Faster content creation", "More consistent posting habits", "Clearer proof of what works"].map((o) => (
                  <div key={o} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-slate-200 backdrop-blur-xl">{o}</div>
                ))}
              </div>
            </div>

            <div id="waitlist" className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-white/5 to-violet-500/15 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Early access</div>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">Start building content that performs.</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Be one of the first users to try VoxWit and help shape the platform.</p>
                <form onSubmit={handleWaitlistSubmit} className="mx-auto mt-8 max-w-xl">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (status !== "idle") setStatus("idle"); }}
                      placeholder="Enter your email"
                      className="h-12 flex-1 rounded-2xl border border-white/10 bg-[#09172b] px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                      aria-label="Email address"
                      required
                    />
                    <button
                      type="submit"
                      disabled={status === "loading" || !isEmailValid}
                      className="h-12 rounded-2xl bg-white px-6 text-slate-950 hover:bg-slate-100 disabled:opacity-60"
                    >
                      {status === "loading" ? "Joining..." : "Join the Waitlist"}
                    </button>
                  </div>
                  <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                </form>
                <div className="mt-4 min-h-6 text-sm">
                  {status === "success" ? <p className="text-emerald-300">Thanks — you’re on the waitlist.</p> : null}
                  {status === "error" ? <p className="text-rose-300">Please enter a valid email and try again.</p> : null}
                </div>
                <p className="mt-2 text-sm text-slate-400">LinkedIn-first. Expanding to additional platforms over time.</p>
              </div>
              <div className="mt-8 text-center text-sm text-slate-400">© {year} VoxWit. Optimize for attention.</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
