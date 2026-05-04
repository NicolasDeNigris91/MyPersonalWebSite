export interface UsesGroup {
  category: string;
  items: { name: string; note?: string }[];
}

export const usesData: UsesGroup[] = [
  {
    category: 'Hardware',
    items: [
      { name: 'PC desktop', note: 'Windows 10 Pro' },
      { name: 'Monitor secundário para inspeção e debugger' },
      {
        name: 'Teclado mecânico',
        note: 'switches lineares para textos longos',
      },
    ],
  },
  {
    category: 'Editor & shell',
    items: [
      {
        name: 'Visual Studio Code',
        note: 'tema escuro custom em cima da paleta do site',
      },
      { name: 'PowerShell 5.1', note: 'shell padrão da máquina' },
      { name: 'Git Bash', note: 'pipelines POSIX quando o script é portável' },
    ],
  },
  {
    category: 'Stack web',
    items: [
      { name: 'Next.js 16 (App Router, Turbopack)' },
      { name: 'React 19, TypeScript estrito' },
      { name: 'Tailwind v4 com @theme' },
      { name: 'Framer Motion para microinterações editoriais' },
      { name: 'Vitest + React Testing Library' },
      { name: 'Playwright + axe-core para E2E e a11y' },
    ],
  },
  {
    category: 'Backend & dados',
    items: [
      { name: 'Python (FastAPI, Django)' },
      { name: 'Java, ASP.NET, Express.js conforme o ecossistema do projeto' },
      {
        name: 'Go quando importa latência baixa',
        note: 'pipeline CDC, transformers',
      },
      { name: 'PostgreSQL e MongoDB; Debezium para CDC' },
      { name: 'Docker, Kubernetes, Helm' },
    ],
  },
  {
    category: 'Tipografia',
    items: [
      { name: 'Cormorant Garamond', note: 'display, italic 300' },
      { name: 'Inter', note: 'sans corpo, 300 a 500' },
      { name: 'JetBrains Mono', note: 'mono captions e código' },
    ],
  },
  {
    category: 'Hosting & operação',
    items: [
      {
        name: 'Railway',
        note: 'deploy do portfolio e dos sub-projetos no push para master',
      },
      {
        name: 'GitHub Actions',
        note: 'CI: lint, typecheck, build, test, e2e, Lighthouse, CodeQL',
      },
      {
        name: 'Caddy',
        note: 'reverse proxy para sub-projetos com cross-origin isolation',
      },
    ],
  },
];
