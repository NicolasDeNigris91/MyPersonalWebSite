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
    <div className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-32 bg-obsidian">
      <div className="max-w-xl flex flex-col gap-8">
        <p className="font-mono text-caption text-racing-green-lit tracking-luxury uppercase">
          Erro
        </p>

        <h1 className="font-display italic text-display-lg text-pearl tracking-tight leading-none">
          Algo se rompeu.
        </h1>

        <div className="h-px w-24 bg-gold-leaf" />

        <p className="font-sans text-body-lg text-chrome leading-relaxed">
          Aconteceu uma falha inesperada ao carregar esta página. Você pode
          tentar novamente; se persistir, me avise pelo contato.
        </p>

        {error.digest ? (
          <p className="font-mono text-caption text-mist tracking-wide uppercase">
            Ref: {error.digest}
          </p>
        ) : null}

        <div className="flex items-center gap-8 pt-4">
          <button
            type="button"
            onClick={reset}
            className="font-sans text-caption tracking-luxury uppercase border border-platinum text-platinum
                       px-8 py-3 hover:bg-platinum hover:text-obsidian transition-colors duration-300
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-platinum"
          >
            Tentar de novo
          </button>
          <Link
            href="/"
            className="font-sans text-caption tracking-luxury uppercase text-chrome hover:text-pearl
                       transition-colors duration-300"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
