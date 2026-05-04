import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Now',
  description: `O que ${siteConfig.name} está fazendo agora.`,
  alternates: { canonical: '/now' },
  openGraph: {
    title: `Now · ${siteConfig.name}`,
    description: 'O que está em foco no momento.',
    url: '/now',
    type: 'article',
  },
};

const sections = [
  {
    label: 'Construindo',
    items: [
      'Iterando neste portfolio: identidade visual editorial, performance e a11y como gates de CI.',
      'Magic Accessible Combat: jogabilidade completa por teclado e leitor de tela, descrição de cartas como dado de primeira classe.',
      'Pipeline Postgres → MongoDB: idempotência por LSN, chaos testing como rotina.',
    ],
  },
  {
    label: 'Aprendendo',
    items: [
      'Padrões de leitura de schema.org para tornar conteúdo rich-result-friendly por padrão.',
      'View Transitions API e shared element transitions com prefers-reduced-motion.',
      'Operação Kubernetes em produção: Helm, observabilidade, custos.',
    ],
  },
  {
    label: 'Lendo',
    items: [
      'Designing Data-Intensive Applications, Martin Kleppmann.',
      'Refactoring UI, Adam Wathan e Steve Schoger.',
      'Inclusive Components, Heydon Pickering.',
    ],
  },
];

export default function NowPage() {
  const lastUpdated = new Date('2026-05-04');

  return (
    <main
      id="main-content"
      className="bg-obsidian relative px-8 py-32 md:px-16 lg:px-24"
    >
      <div className="bg-mist/30 absolute inset-y-32 left-8 w-px md:left-16 lg:left-24" />

      <article className="mx-auto max-w-3xl">
        <header className="mb-16 pl-8">
          <p className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
            Foco atual
          </p>
          <h1 className="font-display text-display-xl text-pearl leading-none tracking-tight italic">
            Now
          </h1>
          <div className="bg-gold-leaf mt-6 h-px w-32" />
          <p className="text-body-lg text-chrome mt-8 font-sans leading-relaxed">
            Esta página segue a convenção do{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pearl hover:text-gold-leaf underline-offset-4 transition-colors duration-300"
            >
              /now
            </a>
            : o que está em foco neste momento, não um log histórico.
          </p>
          <p className="text-caption text-mist mt-4 font-mono tracking-wide uppercase tabular-nums">
            Atualizado em{' '}
            <time dateTime={lastUpdated.toISOString().slice(0, 10)}>
              {lastUpdated.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </p>
        </header>

        <div className="space-y-16 pl-8">
          {sections.map((section) => (
            <section key={section.label}>
              <h2 className="text-caption text-racing-green-lit tracking-luxury mb-6 font-mono uppercase">
                {section.label}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="bg-gold-leaf mt-2 h-1 w-1 flex-shrink-0 rounded-full" />
                    <p className="text-body text-chrome font-sans leading-relaxed">
                      {item}
                    </p>
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
            href="/uses"
            className="text-caption tracking-luxury text-chrome hover:text-pearl font-sans uppercase transition-colors duration-300"
          >
            Uses ↗
          </Link>
        </footer>
      </article>
    </main>
  );
}
