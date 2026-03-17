import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VoxWit Security",
  description: "Learn how VoxWit protects customer data, handles incidents, and receives vulnerability reports.",
};

const sections = [
  {
    title: "Core Principles",
    copy: [
      "Least-privilege access across infrastructure and internal tooling.",
      "End-to-end encryption for traffic between the Chrome extension, our API, and downstream model providers.",
      "Clear ownership for incident response so we can move quickly if something ever looks off.",
    ],
  },
  {
    title: "Data Handling",
    copy: [
      "LinkedIn drafts are processed in memory only for the duration of an API request and are not stored after a response is returned.",
      "Request telemetry is aggregated and stripped of post content before it is logged for reliability monitoring.",
      "Customer support data (e.g., emails, onboarding notes) lives inside SOC 2 compliant providers (Google Workspace + Notion).",
    ],
  },
  {
    title: "Infrastructure",
    copy: [
      "The VoxWit API is hosted on Render with automatic patching, network-level firewalls, and per-service API keys.",
      "Secrets are stored in each platform's encrypted secret manager (Render, Vercel, Chrome Developer Dashboard).",
      "Source repositories require MFA, and production deploys are limited to authorized maintainers.",
    ],
  },
  {
    title: "Responsible Disclosure",
    copy: [
      "If you believe you’ve found a vulnerability, please email security@voxwit.com or eric@room52nyc.com with details.",
      "We acknowledge reports within 2 business days, triage immediately, and keep you in the loop until the issue is resolved.",
      "Please avoid public disclosure until we’ve shipped a fix—coordinated disclosure helps protect everyone who relies on VoxWit.",
    ],
  },
  {
    title: "Incident Response",
    copy: [
      "Critical incidents are escalated directly to the founder team and our API partners.",
      "We notify affected users via email if their data could be impacted.",
      "Post-incident reviews capture lessons learned and drive updates to this page when policies change.",
    ],
  },
];

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-softCyan/20 via-black/10 to-transparent blur-3xl" />
      <div className="relative z-10 flex flex-col gap-10 px-6 py-10 md:px-10 lg:px-16">
        <SiteHeader />

        <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl shadow-electricPurple/20 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-softCyan">Security</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">VoxWit Security Overview</h1>
          <p className="mt-2 text-sm text-white/60">Last updated: March 17, 2026</p>

          <p className="mt-6 text-base text-white/80">
            Keeping customer drafts and account data safe is table stakes. This page summarizes how VoxWit approaches security today and
            how to reach us if you see something that needs our attention.
          </p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-white/80">
                  {section.copy.map((item) => (
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
                Report security issues to <Link href="mailto:security@voxwit.com" className="text-softCyan underline">security@voxwit.com</Link>
                {" "}or <Link href="mailto:eric@room52nyc.com" className="text-softCyan underline">eric@room52nyc.com</Link>. Include reproduction steps, affected endpoints, and any logs you can safely share.
              </p>
            </div>
            <p className="text-sm text-white/60">
              We update this page whenever our infrastructure or policies change in a material way. If you have questions beyond what’s listed here, drop us a line.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
