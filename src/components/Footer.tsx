export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 px-6 py-10 text-center text-sm text-white/60">
      <p>© {new Date().getFullYear()} VoxWit — Write posts people actually enjoy reading.</p>
      <p className="mt-2 text-white/40">Built for founders, PMs, consultants, creators, and marketers.</p>
    </footer>
  );
}
