import Link from "next/link";

const heroStats = [
  { label: "Hooks sharpened", value: "4,200+" },
  { label: "Avg. time saved", value: "12 min/post" },
  { label: "approval rating", value: "94%" },
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden section-wrapper"
      style={{ backgroundColor: "#121024" }}
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-70 pointer-events-none" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-softCyan" />
            AI Copilot for LinkedIn writers
          </div>
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Write posts people actually enjoy reading.
            </h1>
            <p className="mt-4 text-lg text-white/70">
              VoxWit Copilot helps you craft engaging posts with sharper hooks,
              clearer writing, and a touch of humor—without sounding like a
              robot.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#early-access"
              className="rounded-full bg-electricPurple px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:bg-electricPurple/90"
            >
              Get Early Access
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              See How It Works
            </Link>
          </div>
          <dl className="grid gap-6 text-white/80 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm uppercase tracking-wide text-white/50">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl shadow-electricPurple/30 backdrop-blur">
            <header className="flex items-center justify-between text-sm text-white/60">
              <span>VoxWit Copilot</span>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-softCyan" />
                Live edit
              </div>
            </header>
            <div className="mt-6 grid gap-4 rounded-2xl bg-midnight/60 p-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Before
                </p>
                <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  AI agents are transforming product management.
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-softCyan">
                  After with VoxWit
                </p>
                <div className="mt-2 rounded-2xl border border-softCyan/30 bg-white/5 p-4 text-base font-medium text-white">
                  I asked an AI agent to help with my roadmap.
                  <br />
                  It scheduled a meeting.
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
              <span>Confidence boost</span>
              <span className="text-softCyan">+48%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
