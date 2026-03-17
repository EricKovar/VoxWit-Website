const features = [
  {
    title: "Hook Generator",
    description: "Create stronger opening lines that stop the scroll.",
  },
  {
    title: "Writing Punch-Up",
    description: "Turn average sentences into sharper writing.",
  },
  {
    title: "Wit Engine",
    description: "Add light humor that makes posts more memorable.",
  },
  {
    title: "Post Structure",
    description: "Organize ideas into posts people actually finish reading.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="section-wrapper" id="features">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-sm uppercase tracking-[0.3em] text-white/50">
          Features
        </div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Your copilot for engaging writing.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-white shadow-lg shadow-black/20"
            >
              <h3 className="text-xl font-semibold text-softCyan">
                {feature.title}
              </h3>
              <p className="mt-3 text-base text-white/70">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
