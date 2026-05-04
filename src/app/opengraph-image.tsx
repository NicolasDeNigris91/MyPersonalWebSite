import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site';

export const runtime = 'nodejs';
export const alt = `${siteConfig.name} · ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const OBSIDIAN = '#0A0A0A';
const PEARL = '#F5F5F0';
const CHROME = '#C0C0C0';
const GOLD = '#B8963E';
const MIST = '#3A3A3A';

const FONT_SOURCES = {
  cormorantItalic:
    'https://cdn.jsdelivr.net/npm/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-italic.woff',
  cormorant:
    'https://cdn.jsdelivr.net/npm/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff',
  inter:
    'https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-400-normal.woff',
};

async function tryFetchFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [cormorantItalic, cormorant, inter] = await Promise.all([
    tryFetchFont(FONT_SOURCES.cormorantItalic),
    tryFetchFont(FONT_SOURCES.cormorant),
    tryFetchFont(FONT_SOURCES.inter),
  ]);

  const fonts: NonNullable<ConstructorParameters<typeof ImageResponse>[1]>['fonts'] = [];
  if (cormorantItalic) {
    fonts.push({
      name: 'Cormorant',
      data: cormorantItalic,
      style: 'italic',
      weight: 300,
    });
  }
  if (cormorant) {
    fonts.push({
      name: 'Cormorant',
      data: cormorant,
      style: 'normal',
      weight: 300,
    });
  }
  if (inter) {
    fonts.push({
      name: 'Inter',
      data: inter,
      style: 'normal',
      weight: 400,
    });
  }

  const displayFontFamily = fonts.some((f) => f.name === 'Cormorant')
    ? 'Cormorant'
    : 'serif';
  const sansFontFamily = fonts.some((f) => f.name === 'Inter')
    ? 'Inter'
    : 'sans-serif';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 88px',
          backgroundColor: OBSIDIAN,
          color: PEARL,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 88,
            top: 88,
            bottom: 88,
            width: 1,
            backgroundColor: GOLD,
            opacity: 0.6,
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 32,
            fontFamily: sansFontFamily,
            fontSize: 16,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: CHROME,
          }}
        >
          <span>{siteConfig.tagline}</span>
          <span>São Paulo · BR</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 32,
            gap: 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: displayFontFamily,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 128,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: PEARL,
            }}
          >
            <span>Nicolas Pilegi</span>
            <span>De Nigris</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
            }}
          >
            <div
              style={{
                width: 72,
                height: 1,
                backgroundColor: GOLD,
              }}
            />
            <span
              style={{
                fontFamily: sansFontFamily,
                fontSize: 22,
                letterSpacing: '0.04em',
                color: CHROME,
              }}
            >
              Precisão · craft · depth
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 32,
            paddingTop: 24,
            borderTop: `1px solid ${MIST}`,
            fontFamily: sansFontFamily,
            fontSize: 16,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: CHROME,
          }}
        >
          <span>nicolaspilegidenigris.dev</span>
          <span style={{ color: GOLD }}>NPDN</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    },
  );
}
