import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="bg-obsidian flex min-h-screen items-center justify-center px-8 py-32 md:px-16 lg:px-24">
      <div className="flex max-w-2xl flex-col gap-8">
        <p className="text-caption text-racing-green-lit tracking-luxury font-mono uppercase">
          404
        </p>

        <h1 className="font-display text-display-xl text-pearl leading-none tracking-tight italic">
          Fora do mapa.
        </h1>

        <div className="bg-gold-leaf h-px w-32" />

        <p className="text-body-lg text-chrome font-sans leading-relaxed">
          Esta página não existe ou foi movida. O caminho mais curto é voltar ao
          início.
        </p>

        <div className="flex items-center gap-8 pt-4">
          <Link
            href="/"
            className="text-caption tracking-luxury border-platinum text-platinum hover:bg-platinum hover:text-obsidian focus-visible:outline-platinum border px-8 py-3 font-sans uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Voltar ao início
          </Link>
          <Link
            href="/#projects"
            className="text-caption tracking-luxury text-chrome hover:text-pearl font-sans uppercase transition-colors duration-300"
          >
            Ver projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
