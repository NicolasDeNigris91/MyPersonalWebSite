import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const OBSIDIAN = '#0A0A0A';
const GOLD = '#B8963E';
const PEARL = '#F5F5F0';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: OBSIDIAN,
          fontFamily: 'serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 124,
          color: PEARL,
          letterSpacing: '-0.02em',
          position: 'relative',
        }}
      >
        <span>N</span>
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            width: 56,
            height: 2,
            backgroundColor: GOLD,
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    ),
    size,
  );
}
