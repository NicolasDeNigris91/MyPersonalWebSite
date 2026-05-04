import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-32 bg-obsidian">
      <div className="max-w-2xl flex flex-col gap-8">
        <p className="font-mono text-caption text-racing-green-lit tracking-luxury uppercase">
          404
        </p>

        <h1 className="font-display italic text-display-xl text-pearl tracking-tight leading-none">
          Fora do mapa.
        </h1>

        <div className="h-px w-32 bg-gold-leaf" />

        <p className="font-sans text-body-lg text-chrome leading-relaxed">
          Esta página não existe ou foi movida. O caminho mais curto é voltar
          ao início.
        </p>

        <div className="flex items-center gap-8 pt-4">
          <Link
            href="/"
            className="font-sans text-caption tracking-luxury uppercase border border-platinum text-platinum
                       px-8 py-3 hover:bg-platinum hover:text-obsidian transition-colors duration-300
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-platinum"
          >
            Voltar ao início
          </Link>
          <Link
            href="/#projects"
            className="font-sans text-caption tracking-luxury uppercase text-chrome hover:text-pearl
                       transition-colors duration-300"
          >
            Ver projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
