import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: '[PROJECT TITLE]',
    subtitle: '[ONE-LINE DESCRIPTOR — e.g. "Real-time collaborative code editor"]',
    description:
      '[2–3 sentence description of what it does, the technical challenge it solved, and what makes it interesting.]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    year: 2024,
    href: 'https://[your-project-url]',
    repoHref: 'https://github.com/[username]/[repo]',
    featured: true,
    imageAlt: '[Descriptive alt text for the project screenshot]',
  },
  {
    id: 'proj-2',
    title: '[PROJECT TITLE]',
    subtitle: '[ONE-LINE DESCRIPTOR]',
    description: '[2–3 sentence description.]',
    tags: ['[Tech]', '[Tech]'],
    year: 2023,
    repoHref: 'https://github.com/[username]/[repo]',
    featured: true,
    imageAlt: '[Alt text]',
  },
  {
    id: 'proj-3',
    title: '[PROJECT TITLE]',
    subtitle: '[ONE-LINE DESCRIPTOR]',
    description: '[2–3 sentence description.]',
    tags: ['[Tech]', '[Tech]'],
    year: 2023,
    featured: false,
    imageAlt: '[Alt text]',
  },
];
