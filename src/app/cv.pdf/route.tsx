import { renderToBuffer } from '@react-pdf/renderer';
import { CVDocument } from '@/components/cv/CVDocument';

export const runtime = 'nodejs';
// Regenerated on first request after a deploy and cached for 24h. The data
// it reads from is checked into the repo, so a new deploy is the natural
// invalidation event.
export const revalidate = 86400;

export async function GET() {
  const buffer = await renderToBuffer(<CVDocument />);

  return new Response(buffer as unknown as BodyInit, {
    status: 200,
    headers: {
      'content-type': 'application/pdf',
      'content-disposition':
        'inline; filename="nicolas-pilegi-de-nigris-cv.pdf"',
      'cache-control':
        'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
