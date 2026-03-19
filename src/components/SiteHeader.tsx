"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="section-wrapper pb-0 pt-6">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="sr-only">VoxWit home</span>
          <Image
            src="/voxwit-wordmark.svg"
            alt="VoxWit wordmark"
            width={220}
            height={80}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-3 md:flex">
          <Link
            href="/investor-demo"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-softCyan hover:text-softCyan"
          >
            Investor Demo
          </Link>
          <Link
            href="/copilot"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-softCyan hover:text-softCyan"
          >
            Copilot
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-softCyan hover:text-softCyan"
          >
            Dashboard
          </Link>
          <Link
            href="/privacy"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-softCyan hover:text-softCyan"
          >
            Privacy
          </Link>
          <Link
            href="#early-access"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-softCyan hover:text-softCyan"
          >
            Join waitlist
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          className="md:hidden rounded-md border border-white/15 p-2 text-white hover:border-softCyan hover:text-softCyan"
          onClick={() => setOpen((v) => !v)}
        >
          {/* simple 3-line icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-white/15 bg-midnight/95 p-2 backdrop-blur md:hidden">
            <Link href="/investor-demo" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/5" onClick={()=>setOpen(false)}>Investor Demo</Link>
            <Link href="/copilot" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/5" onClick={()=>setOpen(false)}>Copilot</Link>
            <Link href="/dashboard" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/5" onClick={()=>setOpen(false)}>Dashboard</Link>
            <Link href="/privacy" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/5" onClick={()=>setOpen(false)}>Privacy</Link>
            <Link href="#early-access" className="block rounded-md px-3 py-2 text-sm text-white hover:bg-white/5" onClick={()=>setOpen(false)}>Join waitlist</Link>
          </div>
        )}
      </div>
    </header>
  );
}
