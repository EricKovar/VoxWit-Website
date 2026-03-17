import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="section-wrapper pb-0 pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
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
        <Link
          href="#early-access"
          className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-softCyan hover:text-softCyan"
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
