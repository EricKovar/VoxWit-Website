import { WaitlistForm } from "./WaitlistForm";

export function CTASection() {
  return (
    <section className="section-wrapper" id="early-access">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-softCyan/30 bg-gradient-to-br from-electricPurple/30 via-deepIndigo to-midnight p-10 text-white shadow-[0_30px_80px_rgba(30,27,75,0.45)]">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">
          Final call
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Write posts people enjoy reading.
        </h2>
        <p className="mt-3 text-lg text-white/80">
          Join the VoxWit early access list.
        </p>
        <div className="mt-6">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
