export default function WireframesHosted() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="text-2xl font-semibold mb-3">VoxWit UI Wireframes</h1>
      <p className="text-slate-400 mb-4">Hosted copy of the local prototype with the Chrome extension and Demo walkthrough toggles.</p>
      <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900" style={{height:'80vh'}}>
        <iframe src="/wireframes/index.html" title="Wireframes" className="w-full h-full" />
      </div>
    </main>
  );
}
