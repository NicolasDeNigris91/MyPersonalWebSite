import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_NAMES = new Set(['CLS', 'FCP', 'INP', 'LCP', 'TTFB', 'FID']);

interface VitalPayload {
  name: string;
  value: number;
  id: string;
  rating?: 'good' | 'needs-improvement' | 'poor';
  navigationType?: string;
  url?: string;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'invalid payload' }, { status: 400 });
  }

  const payload = body as Partial<VitalPayload>;
  if (
    typeof payload.name !== 'string' ||
    !ALLOWED_NAMES.has(payload.name) ||
    typeof payload.value !== 'number' ||
    !Number.isFinite(payload.value) ||
    typeof payload.id !== 'string'
  ) {
    return NextResponse.json({ error: 'invalid payload' }, { status: 400 });
  }

  if (process.env.NODE_ENV !== 'production') {
    console.info('[web-vitals]', {
      name: payload.name,
      value: Math.round(payload.value * 100) / 100,
      rating: payload.rating,
      url: payload.url,
    });
  }

  return new NextResponse(null, { status: 204 });
}
