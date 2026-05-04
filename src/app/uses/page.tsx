import type { Metadata } from 'next';
import Link from 'next/link';
import { usesData } from '@/data/uses';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Uses',
  description: `Setup técnico de ${siteConfig.name}: hardware, editor, stack, hosting.`,
  alternates: { canonical: '/uses' },
  openGraph: {
    title: `Uses · ${siteConfig.name}`,
    description: 'Setup técnico, editor, stack e hosting.',
    url: '/uses',
    type: 'article',
  },
};

export default function UsesPage() {
  return (
    <main
      id="main-content"
      className="bg-obsidian relative px-8 py-32 md:px-16 lg:px-24"
    >
      <div className="bg-mist/30 absolute inset-y-32 left-8 w-px md:left-16 lg:left-24" />

      <article className="mx-auto max-w-4xl">
        <header className="mb-16 pl-8">
          <p className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
            Setup
          </p>
          <h1 className="font-display text-display-xl text-pearl leading-none tracking-tight italic">
            Uses
          </h1>
          <div className="bg-gold-leaf mt-6 h-px w-32" />
          <p className="text-body-lg text-chrome mt-8 max-w-2xl font-sans leading-relaxed">
            O que está em cima da mesa e o que roda nos servidores. Atualizo
            quando algo muda de verdade, não quando troco de versão.
          </p>
        </header>

        <div className="grid gap-16 pl-8 md:grid-cols-2">
          {usesData.map((group) => (
            <section key={group.category}>
              <h2 className="text-caption text-racing-green-lit tracking-luxury mb-6 font-mono uppercase">
                {group.category}
              </h2>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="bg-gold-leaf mt-2 h-1 w-1 flex-shrink-0 rounded-full" />
                    <span className="text-body text-chrome font-sans leading-relaxed">
                      <span className="text-pearl">{item.name}</span>
                      {item.note ? (
                        <span className="text-mist"> · {item.note}</span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-20 flex items-center gap-8 pl-8">
          <Link
            href="/"
            className="text-caption tracking-luxury border-platinum text-platinum hover:bg-platinum hover:text-obsidian focus-visible:outline-platinum border px-8 py-3 font-sans uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Voltar ao início
          </Link>
          <Link
            href="/now"
            className="text-caption tracking-luxury text-chrome hover:text-pearl font-sans uppercase transition-colors duration-300"
          >
            Now ↗
          </Link>
        </footer>
      </article>
    </main>
  );
}
