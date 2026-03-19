export default function StorePreview() {
  const imgs = [
    '/store-preview/voxwit-01-empty-state.png',
    '/store-preview/voxwit-02-on-linkedin.png',
    '/store-preview/voxwit-03-generated-hooks.png',
    '/store-preview/voxwit-04-chrome-required.png',
  ];
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="text-2xl font-semibold mb-2">Chrome Web Store Screenshots</h1>
      <p className="text-slate-400 mb-4">These are the exact images prepared for the listing.</p>
      <div className="grid gap-4">
        {imgs.map((src)=> (
          <div key={src} className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
            <img src={src} alt={src} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </main>
  );
}
