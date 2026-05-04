import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="bg-obsidian relative flex min-h-screen items-center px-8 py-32 md:px-16 lg:px-24">
      <div className="bg-mist/30 absolute inset-y-32 left-8 w-px md:left-16 lg:left-24" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[auto_1fr]">
        <div
          aria-hidden="true"
          className="font-display text-pearl/15 text-[clamp(9rem,28vw,22rem)] leading-none tracking-[-0.04em] italic [font-variant-numeric:tabular-nums] select-none"
        >
          404
        </div>

        <div className="flex max-w-xl flex-col gap-8">
          <p className="text-caption text-racing-green-lit tracking-luxury font-mono uppercase">
            Fora do mapa
          </p>

          <h1 className="font-display text-display-lg text-pearl leading-tight tracking-tight italic">
            Esta página não existe.
          </h1>

          <div className="bg-gold-leaf h-px w-24" />

          <p className="text-body-lg text-chrome font-sans leading-relaxed">
            Pode ter sido movida ou nunca chegou a existir. O caminho mais curto
            é voltar ao início.
          </p>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            <Link
              href="/"
              className="text-caption tracking-luxury border-platinum text-platinum hover:bg-platinum hover:text-obsidian focus-visible:outline-platinum border px-8 py-3 font-sans uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Voltar ao início
            </Link>
            <Link
              href="/#projects"
              className="text-caption tracking-luxury text-chrome hover:text-pearl group focus-visible:outline-platinum relative inline-flex flex-col font-sans uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span className="leading-none">Ver projetos</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 100 2"
                preserveAspectRatio="none"
                className="mt-1 h-px w-full overflow-visible"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="100"
                  y2="1"
                  stroke="var(--color-gold-leaf, #B8963E)"
                  strokeWidth={1}
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={1}
                  className="transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
