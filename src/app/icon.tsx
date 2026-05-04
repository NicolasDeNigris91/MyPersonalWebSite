import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

const OBSIDIAN = '#0A0A0A';
const GOLD = '#B8963E';
const PEARL = '#F5F5F0';

export default function Icon() {
  return new ImageResponse(
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
        fontSize: 22,
        color: PEARL,
        letterSpacing: '-0.02em',
        position: 'relative',
      }}
    >
      <span>N</span>
      <div
        style={{
          position: 'absolute',
          bottom: 4,
          left: '50%',
          width: 10,
          height: 1,
          backgroundColor: GOLD,
          transform: 'translateX(-50%)',
        }}
      />
    </div>,
    size,
  );
}
