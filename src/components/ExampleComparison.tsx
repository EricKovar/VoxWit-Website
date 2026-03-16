export function ExampleComparison() {
  return (
    <section className="section-wrapper" id="example">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-white shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Example transformation
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          See the difference.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-midnight/70 p-6">
            <div className="text-xs uppercase tracking-wide text-white/50">
              Before
            </div>
            <p className="mt-3 text-lg text-white/80">
              AI agents are transforming product management.
            </p>
          </article>
          <article className="rounded-2xl border border-softCyan/30 bg-white/10 p-6 shadow-[0_10px_45px_rgba(6,182,212,0.25)]">
            <div className="text-xs uppercase tracking-wide text-softCyan">
              After with VoxWit
            </div>
            <p className="mt-3 text-2xl font-semibold text-white">
              I asked an AI agent to help with my roadmap.
              <br />
              It scheduled a meeting.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
