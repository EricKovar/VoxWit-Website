export const runtime = 'edge';

export async function GET() {
  return new Response(
    JSON.stringify({ ok: true, service: 'voxwit-site', version: 'hooks-adapter+fallback', ts: Date.now() }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
