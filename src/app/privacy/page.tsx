export const metadata = {
  title: "Privacy Policy — VoxWit",
  description: "How VoxWit collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="section-wrapper mx-auto max-w-3xl text-white">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-2 text-white/70">Last updated: March 18, 2026</p>

      <section className="mt-8 space-y-4 text-white/80">
        <p>
          VoxWit cares about your privacy. This policy describes what we collect, why we collect it, and how we handle your information when you use VoxWit websites, the VoxWit Copilot extension, and related services ("Services").
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">Information We Collect</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Account and contact info you provide (e.g., name, email) when you join the waitlist or contact us.
          </li>
          <li>
            Usage data (e.g., pages visited, basic device/browser info) to improve the site experience.
          </li>
          <li>
            Content you choose to send to the Copilot (e.g., post text for comment generation). We process this only to provide the requested output and improve quality and safety.
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">How We Use Information</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Provide, maintain, and improve the Services</li>
          <li>Respond to your requests and support tickets</li>
          <li>Measure performance and understand feature usage</li>
          <li>Detect, prevent, and address abuse or security issues</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share limited data with trusted vendors solely to operate the Services (for example: hosting, analytics, email/waitlist management, or AI inference). These vendors are bound by agreements to protect your data and use it only for the contracted purpose.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">Third‑Party Services</h2>
        <p>
          The Services may rely on third-party providers, such as Vercel (hosting), Supabase (waitlist/email), and AI model providers (e.g., OpenAI) to process your inputs for comment generation. Your content may be sent to these providers to fulfill your request, subject to their security and data handling terms.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">Retention</h2>
        <p>
          We retain data only as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce agreements. You can request deletion of your data at any time.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">Your Choices</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Opt out of non-essential emails via unsubscribe links</li>
          <li>Request access, correction, or deletion of your data</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect your information. No system is 100% secure; please contact us if you suspect unauthorized activity.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">Children</h2>
        <p>
          The Services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-softCyan">Contact</h2>
        <p>
          Questions about this policy? Contact us at <a href="mailto:efkovar@gmail.com" className="text-softCyan underline">efkovar@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
