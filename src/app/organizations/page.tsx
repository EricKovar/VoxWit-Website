import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VoxWit for Organizations — Turn ideas into content",
  description:
    "Capture ideas from across your organization, review them in one place, and publish from the brand or return approved posts to contributors.",
  alternates: { canonical: "/organizations" },
  openGraph: {
    title: "VoxWit for Organizations",
    description: "Turn your organization’s ideas into a content engine.",
    url: "/organizations",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "VoxWit for Organizations" }],
  },
};

const SendIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="m3 11 17-8-8 17-2-7-7-2Z" /><path d="m10 13 4-4" />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" />
  </svg>
);

function StepLabel({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="mb-4 flex gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-sm font-bold text-slate-950">{number}</span>
      <div><h3 className="font-semibold text-white">{title}</h3><p className="mt-1 text-sm leading-5 text-slate-400">{text}</p></div>
    </div>
  );
}

function EmailSubmission() {
  return (
    <div className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0a1729] p-5 shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-slate-400"><span>New message</span><span>•••</span></div>
      <div className="space-y-3 border-b border-white/10 py-4 text-sm"><div><span className="text-slate-500">To:</span> ideas@voxwit.com</div><div><span className="text-slate-500">Subject:</span> Idea for a post</div></div>
      <p className="py-4 text-sm leading-6 text-slate-300">This made me think about how a company’s best ideas often come from people closest to the work.</p>
      <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.04] p-3"><div className="h-20 rounded-lg bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-white/5" /><p className="mt-2 text-xs text-slate-400">screenshot.png · 1.2 MB</p></div>
      <button className="mt-4 flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"><SendIcon /> Send</button>
    </div>
  );
}

function ReviewDashboard() {
  return (
    <div className="flex h-full overflow-hidden rounded-[1.5rem] border border-cyan-400/20 bg-[#0a1729] shadow-2xl shadow-cyan-950/20">
      <aside className="hidden w-28 shrink-0 border-r border-white/10 bg-black/25 p-4 sm:block"><div className="text-base font-semibold">VoxWit<span className="text-cyan-300">”</span></div><div className="mt-8 space-y-3 text-[11px] text-slate-400"><div className="rounded-lg bg-white/10 px-2 py-2 text-white">Feed</div><div className="px-2">Saved</div><div className="px-2">My Voice</div></div></aside>
      <div className="min-w-0 flex-1 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3"><div><p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Inspired by</p><p className="mt-1 text-sm font-semibold text-white">An employee’s field insight</p></div><span className="rounded-full bg-violet-400/10 px-2 py-1 text-[10px] text-violet-200">Ready to review</span></div>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3"><p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Sent by</p><p className="mt-1 text-sm text-slate-200">Alex Martinez · Operations</p></div>
        <div className="mt-3 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4"><p className="text-[10px] uppercase tracking-[0.18em] text-cyan-200">Generated post</p><p className="mt-3 text-sm leading-6 text-slate-200">Your organization’s best content ideas don’t live in a content calendar. They live with the people doing the work.</p></div>
        <div className="mt-4 flex flex-wrap gap-2"><button className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-950">Copy Post</button><button className="rounded-xl border border-white/15 px-3 py-2 text-xs font-semibold text-white">Send to Contributor</button></div>
      </div>
    </div>
  );
}

function ReturnEmail() {
  return (
    <div className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0a1729] p-5 shadow-2xl shadow-black/20">
      <div className="border-b border-white/10 pb-4 text-xs text-slate-400"><p>From: VoxWit &lt;ideas@voxwit.com&gt;</p><p className="mt-1">To: Alex Martinez</p></div>
      <div className="flex items-center justify-between py-5"><h3 className="text-xl font-semibold text-white">Your post is approved</h3><span className="text-emerald-300"><CheckIcon /></span></div>
      <p className="text-sm text-slate-400">Here’s your ready-to-publish post:</p>
      <div className="my-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200">Your organization’s best content ideas don’t live in a content calendar. They live with the people doing the work.</div>
      <button className="mt-auto rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-4 py-2.5 text-sm font-semibold text-slate-950">Copy approved post</button>
    </div>
  );
}

export default function OrganizationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none absolute inset-0"><div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" /><div className="absolute right-[-8%] top-[12rem] h-[34rem] w-[34rem] rounded-full bg-violet-500/10 blur-3xl" /></div>
      <div className="relative z-10"><SiteHeader />
        <section className="px-6 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28"><div className="mx-auto max-w-6xl text-center"><div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">VoxWit for organizations</div><h1 className="mx-auto mt-6 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl md:leading-[1.02]">Turn your organization’s ideas into a <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">content engine.</span></h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">Capture ideas from across your organization. Review them in one place. Publish from the brand—or return approved posts to the people who inspired them.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><Link href="mailto:ideas@voxwit.com?subject=VoxWit%20Design%20Partner" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-100">Become a Design Partner</Link><Link href="#workflow" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">See How It Works</Link></div></div></section>

        <section id="workflow" className="px-6 pb-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-5 lg:grid-cols-[0.85fr_1.25fr_0.85fr]"><div><StepLabel number="1" title="SEND" text="Employees share ideas straight from email." /><EmailSubmission /></div><div><StepLabel number="2" title="REVIEW" text="Communications reviews, refines, and approves." /><ReviewDashboard /></div><div><StepLabel number="3" title="RETURN" text="Approved posts return ready to publish." /><ReturnEmail /></div></div><div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200"><span>Employee</span><span>→</span><span>VoxWit</span><span>→</span><span>Communications</span><span>→</span><span>Employee</span></div></div></section>

        <section className="border-y border-white/10 bg-black/25 px-6 py-24 lg:px-8"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><div className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">Flexible by design</div><h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">One idea. Two ways to publish.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-2"><div className="rounded-[2rem] border border-white/10 bg-white/5 p-8"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200"><SendIcon /></div><h3 className="mt-6 text-2xl font-semibold">Publish from the brand</h3><p className="mt-3 leading-7 text-slate-300">Communications can copy and publish approved content through the organization’s official channels—maintaining consistency, quality, and control.</p></div><div className="rounded-[2rem] border border-white/10 bg-white/5 p-8"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-200"><CheckIcon /></div><h3 className="mt-6 text-2xl font-semibold">Return to the contributor</h3><p className="mt-3 leading-7 text-slate-300">Send an approved post back to the employee or member who inspired it, ready to personalize and share through their own trusted network.</p></div></div></div></section>

        <section className="px-6 py-24 lg:px-8"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Your best ideas already exist inside your organization.</h2><p className="mt-5 text-lg leading-8 text-slate-300">VoxWit gives those ideas a simple path from inspiration to approved, usable content.</p></div><div className="mt-14 grid gap-6 md:grid-cols-3">{[["Capture more","Make it effortless for employees and members to submit timely ideas from tools they already use."],["Review faster","Keep attribution, source material, drafts, and approvals together in one communications queue."],["Activate your people","Put approved content back in the hands of trusted voices who can carry the message further."]].map(([title,text],i)=><div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7"><div className="text-sm font-semibold text-cyan-300">0{i+1}</div><h3 className="mt-4 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></div>)}</div><div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"><p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Built for every kind of organization</p><div className="mt-8 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">{["Companies","Agencies","Associations","Clubs & Communities"].map(x=><div key={x} className="rounded-2xl border border-white/10 bg-[#09172b] px-4 py-6 font-semibold">{x}</div>)}</div></div></div></section>

        <section className="px-6 pb-24 lg:px-8"><div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-violet-400/10 px-6 py-16 text-center md:px-12"><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Make every good idea usable.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">We’re working with a small number of design partners to shape VoxWit’s organizational workflow around real communications teams.</p><Link href="mailto:ideas@voxwit.com?subject=VoxWit%20Design%20Partner" className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-100">Become a Design Partner</Link></div></section>
        <Footer />
      </div>
    </main>
  );
}
