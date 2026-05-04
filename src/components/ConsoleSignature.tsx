'use client';

import { useEffect } from 'react';

const SIGNATURE = [
  '',
  '   N P D N',
  '  ─────────',
  '  Precisão · craft · depth',
  '',
  '  github.com/NicolasDeNigris91',
  '  nicolas.denigris91@icloud.com',
  '',
].join('\n');

export function ConsoleSignature() {
  useEffect(() => {
    if (typeof console === 'undefined') return;
    const fired = (window as unknown as { __npdnSig?: boolean }).__npdnSig;
    if (fired) return;
    (window as unknown as { __npdnSig?: boolean }).__npdnSig = true;

    const display =
      'color:#B8963E; font-family: ui-monospace, monospace; line-height: 1.4;';
    console.info('%c' + SIGNATURE, display);
  }, []);

  return null;
}
