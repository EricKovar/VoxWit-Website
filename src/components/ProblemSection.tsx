export function ProblemSection() {
  const painPoints = [
    "weak hooks",
    "flat writing",
    "no personality",
    "nothing that stops the scroll",
  ];

  return (
    <section className="section-wrapper" id="problem">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-white shadow-inner shadow-black/40">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          The problem
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Most posts get ignored.
        </h2>
        <p className="mt-4 text-lg text-white/70">
          You spend time writing thoughtful posts, but most disappear in the
          feed. Great ideas deserve better writing.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {painPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-midnight/60 px-5 py-4 text-white/80"
            >
              <span className="h-2 w-2 rounded-full bg-electricPurple" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
