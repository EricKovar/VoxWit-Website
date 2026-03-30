export const runtime = 'edge';

type StrictHook = { structure: string; hook: string };

function inferStructure(text: string): string {
  const t = text.toLowerCase();
  if (t.includes('?')) return 'curiosity_gap';
  if (t.includes('truth') || t.includes('nobody')) return 'industry_truth';
  if (t.includes('instead') || t.includes('actually')) return 'contrarian_insight';
  if (t.includes(' is like') || t.includes(' like ')) return 'unexpected_analogy';
  if (t.startsWith('i ') || t.includes("i " )) return 'personal_confession';
  return 'curiosity_gap';
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const upstream = 'https://voxwit-humor-engine.onrender.com/generate-hooks';
    const res = await fetch(upstream, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    // Try to parse JSON, but tolerate text
    let raw: any = null;
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) raw = await res.json();
    else {
      const text = await res.text();
      try { raw = JSON.parse(text); } catch { raw = { data: [text] }; }
    }

    let strict: StrictHook[] = [];

    if (raw?.hooks && Array.isArray(raw.hooks)) {
      strict = raw.hooks
        .filter((h: any) => h?.hook && typeof h.hook === 'string')
        .map((h: any) => ({ structure: h.structure ?? inferStructure(h.hook), hook: h.hook }));
    }

    if (!strict.length && Array.isArray(raw?.options)) {
      strict = raw.options
        .filter((t: any) => typeof t === 'string' && t.trim())
        .map((text: string) => ({ structure: inferStructure(text), hook: text.trim() }));
    }

    if (!strict.length && Array.isArray(raw?.data)) {
      strict = raw.data
        .filter((t: any) => typeof t === 'string' && t.trim())
        .map((text: string) => ({ structure: inferStructure(text), hook: text.trim() }));
    }

    if (!strict.length && Array.isArray(raw?.choices)) {
      strict = raw.choices
        .map((c: any) => (c?.text ?? c?.message?.content ?? '').trim())
        .filter((t: any) => t)
        .map((text: string) => ({ structure: inferStructure(text), hook: text }));
    }

    // guardrails: trim, <=25 words, dedupe, max 10
    const seen = new Set<string>();
    strict = strict
      .map(h => ({ ...h, hook: h.hook.replace(/\s+/g, ' ').trim() }))
      .filter(h => h.hook && h.hook.split(/\s+/).length <= 28)
      .filter(h => (seen.has(h.hook) ? false : (seen.add(h.hook), true)))
      .slice(0, 10);

    // If empty after filtering, salvage first 3 from raw text by truncating to 25 words
    if (!strict.length) {
      const rawList: string[] = ([] as any[])
        .concat(raw?.hooks?.map((h: any)=>h?.hook).filter(Boolean) || [])
        .concat(raw?.options || [])
        .concat(raw?.data || [])
        .concat((raw?.choices || []).map((c: any)=> (c?.text ?? c?.message?.content ?? '').trim()).filter(Boolean));
      const salvage = rawList.slice(0,3).map((text: string) => {
        const words = text.trim().split(/\s+/).slice(0,25).join(' ');
        return { structure: inferStructure(words), hook: words } as StrictHook;
      });
      if (salvage.length) strict = salvage;
      // Final guard: if still empty, pass-through up to 10 raw strings untruncated
      if (!strict.length && rawList.length) {
        strict = rawList.slice(0,10).map((text: string) => ({ structure: inferStructure(text), hook: text.trim() }));
      }
    }

    return new Response(JSON.stringify({ hooks: strict }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'server_error', message: err?.message || 'Proxy error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
