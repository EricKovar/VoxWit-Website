import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VoxWit Copilot Privacy Policy",
  description:
    "Learn how the VoxWit Copilot Chrome extension handles your LinkedIn drafts, permissions, and telemetry data.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "LinkedIn draft text. When you open the VoxWit popup and request suggestions, the extension captures the active post draft so it can send it to the VoxWit API for processing.",
      "Usage metadata. We log minimal request telemetry (timestamp, action type, and anonymized success/error codes) to keep the service reliable.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "Generate hooks, clarity passes, humor riffs, and rewrites for the LinkedIn draft you are editing.",
      "Diagnose reliability issues (e.g., throttled API calls, invalid payloads) and defend against abuse.",
    ],
  },
  {
    title: "What We Don’t Collect or Store",
    body: [
      "No LinkedIn credentials, inbox messages, or browsing history.",
      "No sale, rental, or sharing of your text with advertisers or third parties.",
      "Processed drafts are discarded immediately after we return a response.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Draft content is processed in memory and discarded within seconds of fulfilling the request.",
      "Aggregated telemetry (without post content) may be retained for up to 30 days to monitor reliability.",
    ],
  },
  {
    title: "Third Parties",
    body: [
      "The Chrome extension does not embed third-party analytics or tracking pixels.",
      "API requests are sent only to the VoxWit backend hosted at https://voxwit-humor-engine.onrender.com.",
    ],
  },
  {
    title: "Security",
    body: [
      "All traffic between the extension and the VoxWit API is encrypted over HTTPS.",
      "We routinely review Chrome permissions to ensure VoxWit only interacts with LinkedIn tabs where you initiate an action.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You can remove the extension anytime via chrome://extensions.",
      "Email us if you’d like your telemetry data deleted sooner than our default retention window.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-electricPurple/20 via-black/10 to-transparent blur-3xl" />
      <div className="relative z-10 flex flex-col gap-10 px-6 py-10 md:px-10 lg:px-16">
        <SiteHeader />

        <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl shadow-electricPurple/20 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-electricPurple">Privacy Policy</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">VoxWit Copilot Privacy Policy</h1>
          <p className="mt-2 text-sm text-white/60">Last updated: March 15, 2026</p>

          <p className="mt-6 text-base text-white/80">
            VoxWit Copilot is a Chrome extension that helps you improve LinkedIn drafts by generating alternative hooks,
            rewrites, and CTA ideas. We designed the extension so it only processes the text you explicitly choose to
            analyze.
          </p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-white/80">
                  {section.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-white/80">
            <div>
              <h2 className="text-2xl font-semibold text-white">Contact</h2>
              <p className="mt-3">
                Questions or concerns? Email <Link href="mailto:eric@room52nyc.com" className="text-electricPurple underline">eric@room52nyc.com</Link>.
              </p>
            </div>
            <p className="text-sm text-white/60">
              If we make material changes to this policy, we will update the “Last updated” date above and summarize the
              changes inside the Chrome Web Store listing.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
