const steps = [
  {
    title: "Start with your idea",
    description: "Paste a draft or start with a topic.",
  },
  {
    title: "VoxWit improves it",
    description: "Sharper hooks, clearer writing, and a touch of wit.",
  },
  {
    title: "Publish a better post",
    description: "Turn ordinary posts into engaging ones.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-wrapper" id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/60">
          <span className="h-px flex-1 bg-white/20" />
          How VoxWit works
          <span className="h-px flex-1 bg-white/20" />
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Write better posts in seconds.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_10px_40px_rgba(15,23,42,0.25)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-softCyan">
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-base text-white/70">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
