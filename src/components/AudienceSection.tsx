const audiences = [
  "Founders",
  "Product managers",
  "Consultants",
  "Creators",
  "Marketers",
];

export function AudienceSection() {
  return (
    <section className="section-wrapper" id="audience">
      <div className="mx-auto max-w-5xl text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Who it’s for
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Built for people who write online.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <span
              key={audience}
              className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-sm font-medium text-white/80"
            >
              {audience}
            </span>
          ))}
        </div>
        <p className="mt-6 text-lg text-white/70">
          Anyone who wants their ideas to be read and remembered.
        </p>
      </div>
    </section>
  );
}
