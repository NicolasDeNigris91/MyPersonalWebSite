import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Portfolio Pessoal',
    subtitle: 'Site pessoal',
    description:
      'Website pessoal desenvolvido com Next.js 16, TypeScript e Tailwind CSS v4. Apresenta animações cinematográficas com Framer Motion, arquitetura data-driven com interfaces tipadas, e um design system personalizado com paleta de cores sofisticada e tipografia premium.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: 2026,
    repoHref: 'https://github.com/NicolasDeNigris91/MyPersonalWebSite',
    featured: true,
    imageAlt: 'Screenshot do portfolio pessoal com estética dark luxury',
  },
];
