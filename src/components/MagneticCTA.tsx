'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import type { ReactNode } from 'react';

interface MagneticCTAProps {
  href: string;
  children: ReactNode;
  className?: string;
  radius?: number;
  strength?: number;
}

const SPRING = { stiffness: 280, damping: 24, mass: 0.6 };

function useMagneticPair(reduced: boolean | null) {
  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);
  return { x: reduced ? x : sx, y: reduced ? y : sy, raw: { x, y } };
}

export function MagneticCTA({
  href,
  children,
  className = '',
  radius = 80,
  strength = 0.35,
}: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const reduced = useReducedMotion();
  const { x, y, raw } = useMagneticPair(reduced);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = event.clientX - cx;
    const dy = event.clientY - cy;
    const distance = Math.hypot(dx, dy);
    if (distance > radius) {
      raw.x.set(0);
      raw.y.set(0);
      return;
    }
    raw.x.set(dx * strength);
    raw.y.set(dy * strength);
  };

  const handleLeave = () => {
    raw.x.set(0);
    raw.y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onBlur={handleLeave}
      style={reduced ? undefined : { x, y }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
