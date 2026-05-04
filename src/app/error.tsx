'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.error('[error.tsx]', error);
    }
  }, [error]);

  return (
    <div className="bg-obsidian flex min-h-screen items-center justify-center px-8 py-32 md:px-16 lg:px-24">
      <div className="flex max-w-xl flex-col gap-8">
        <p className="text-caption text-racing-green-lit tracking-luxury font-mono uppercase">
          Erro
        </p>

        <h1 className="font-display text-display-lg text-pearl leading-none tracking-tight italic">
          Algo se rompeu.
        </h1>

        <div className="bg-gold-leaf h-px w-24" />

        <p className="text-body-lg text-chrome font-sans leading-relaxed">
          Aconteceu uma falha inesperada ao carregar esta página. Você pode
          tentar novamente; se persistir, me avise pelo contato.
        </p>

        {error.digest ? (
          <p className="text-caption text-mist font-mono tracking-wide uppercase">
            Ref: {error.digest}
          </p>
        ) : null}

        <div className="flex items-center gap-8 pt-4">
          <button
            type="button"
            onClick={reset}
            className="text-caption tracking-luxury border-platinum text-platinum hover:bg-platinum hover:text-obsidian focus-visible:outline-platinum border px-8 py-3 font-sans uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Tentar de novo
          </button>
          <Link
            href="/"
            className="text-caption tracking-luxury text-chrome hover:text-pearl font-sans uppercase transition-colors duration-300"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
