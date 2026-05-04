import type { SVGProps } from 'react';

interface MonogramProps extends SVGProps<SVGSVGElement> {
  size?: number;
  showRule?: boolean;
}

export function Monogram({
  size = 28,
  showRule = true,
  className,
  ...rest
}: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="square"
      role="img"
      aria-label="NPDN monogram"
      className={className}
      {...rest}
    >
      <title>Nicolas Pilegi De Nigris</title>
      <path d="M10 50 L10 14 L34 50 L34 14" />
      <path d="M40 50 L40 14 L54 14 Q60 14 60 22 Q60 30 54 30 L40 30" />
      <line
        x1="22"
        y1="56"
        x2="48"
        y2="56"
        stroke="var(--color-gold-leaf, #B8963E)"
        strokeWidth={1}
        opacity={showRule ? 1 : 0}
      />
    </svg>
  );
}
