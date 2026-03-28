import Link from 'next/link'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const items = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/posts', label: 'Posts' },
    { href: '/dashboard/comments', label: 'Comments' },
    { href: '/dashboard/analytics', label: 'Analytics' },
  ]
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
        {items.map((it, i) => (
          <span key={it.href} className="flex items-center gap-3">
            <Link className="hover:text-slate-100" href={it.href}>{it.label}</Link>
            {i < items.length - 1 && <span>•</span>}
          </span>
        ))}
      </div>
      {children}
    </div>
  )
}
