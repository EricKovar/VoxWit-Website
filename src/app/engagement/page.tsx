import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import Link from "next/link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80">
      {children}
    </span>
  );
}

export default function EngagementHome() {
  return (
    <main className="relative overflow-hidden bg-midnight text-white">
      <div className="absolute inset-x-0 top-[-200px] z-0 h-[500px] bg-gradient-to-b from-electricPurple/30 via-transparent to-transparent blur-3xl" />
      <div className="relative z-10 flex flex-col gap-6">
        <SiteHeader />

        {/* Hero */}
        <section className="section-wrapper" style={{ backgroundColor: "#121024" }}>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-softCyan" />
                New: Engagement Copilot (LinkedIn Beta)
              </div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Say something worth posting.
              </h1>
              <p className="text-lg text-white/70">
                VoxWit helps you craft comments that are: Clever not Cringe,
                Engaging not Extra,
                Meaningful and memorable. Short, specific, and socially calibrated.
              </p>
              <div className="flex flex-wrap gap-3">
                <Pill>LinkedIn comments</Pill>
                <Pill>X replies</Pill>
                <Pill>Instagram comments</Pill>
              </div>
              <div className="flex gap-4 pt-2">
                <Link href="#try" className="rounded-full bg-electricPurple px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:bg-electricPurple/90">
                  Try the comment demo
                </Link>
                <Link href="#how" className="rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white">
                  See how it works
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl shadow-electricPurple/30 backdrop-blur">
              <header className="flex items-center justify-between text-sm text-white/60">
                <span>Comment Copilot</span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-softCyan" />
                  Context-aware
                </div>
              </header>
              <div className="mt-6 grid gap-4 rounded-2xl bg-midnight/60 p-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/40">Post</p>
                  <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                    "We replaced 5 standups with a dashboard. Team is 20% faster, happier, and less Zoomed out."
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-softCyan">Suggested comment</p>
                  <div className="mt-2 rounded-2xl border border-softCyan/30 bg-white/5 p-4 text-base font-medium text-white">
                    The underrated win here is fewer status theatrics. Curious: did decision quality change once meetings went async?
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>insightful</Pill>
                <Pill>clever</Pill>
                <Pill>supportive</Pill>
                <Pill>contrarian‑but‑polite</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* Principles for comment quality */}
        <section className="section-wrapper" id="principles">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">Comment quality, on purpose</div>
            <h2 className="text-3xl font-semibold sm:text-4xl">What VoxWit optimizes for</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                { t: "Not repetitive", d: "Avoids rephrasing the post or saying nothing-burgers like ‘Great insights!’" },
                { t: "Not sycophantic", d: "Supportive without grovel. Adds value instead of flattery." },
                { t: "Specific to the post", d: "Grounded in the author’s claim, example, or data point." },
                { t: "Short and natural", d: "1–3 sentences. Scannable. Sounds like you." },
                { t: "Smart enough to earn engagement", d: "Asks a good question or adds a crisp angle people want to reply to." },
              ].map((f) => (
                <article key={f.t} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-white shadow-lg shadow-black/20">
                  <h3 className="text-xl font-semibold text-softCyan">{f.t}</h3>
                  <p className="mt-3 text-base text-white/70">{f.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* One‑click transforms */}
        <section className="section-wrapper" id="transforms">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">One‑click transforms</div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Tweak the vibe, not the point</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {["make sharper","make warmer","make shorter","make funnier","more professional","add a personal angle"].map((label) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-midnight/60 px-5 py-4 text-white/80">
                  <span className="h-2 w-2 rounded-full bg-electricPurple" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works for comments */}
        <section className="section-wrapper" id="how">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/60">
              <span className="h-px flex-1 bg-white/20" />
              How comment mode works
              <span className="h-px flex-1 bg-white/20" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { n: 1, t: "Capture context", d: "VoxWit reads the post you’re replying to (text + tone)." },
                { n: 2, t: "Choose intent", d: "Pick a mode: insightful, clever, supportive, playful, or contrarian‑but‑polite." },
                { n: 3, t: "Get 3 options", d: "Short, specific, and non‑cringe. One‑click transforms to tune your voice." },
              ].map((s) => (
                <article key={s.n} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_10px_40px_rgba(15,23,42,0.25)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-softCyan">{s.n}</span>
                  <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-3 text-base text-white/70">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-wrapper" id="try">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-softCyan/30 bg-gradient-to-br from-electricPurple/30 via-deepIndigo to-midnight p-10 text-white shadow-[0_30px_80px_rgba(30,27,75,0.45)]">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Early access</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Write comments people actually reply to.</h2>
            <p className="mt-3 text-lg text-white/80">Join the VoxWit comment copilot beta.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#" className="rounded-full bg-electricPurple px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:bg-electricPurple/90">
                Get early access
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
