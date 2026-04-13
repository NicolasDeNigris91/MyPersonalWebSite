import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: '[Featured Project Name]',
    subtitle: '[One-Line Descriptor — e.g. "Real-time collaborative code editor"]',
    description:
      '[2–3 sentences: What does it do? What technical challenge did you solve? What makes it interesting or unique?]',
    tags: ['[Primary Tech]', '[Secondary Tech]', '[Third Tech]'],
    year: 2024,
    href: 'https://[live-project-url.com]',
    repoHref: 'https://github.com/[your-username]/[repo-name]',
    featured: true,
    imageAlt: '[Screenshot description for accessibility]',
  },
  {
    id: 'proj-2',
    title: '[Second Featured Project]',
    subtitle: '[One-Line Descriptor — e.g. "AI-powered document search engine"]',
    description:
      '[2–3 sentences: Describe the problem, your solution, and the outcome or impact.]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    year: 2023,
    repoHref: 'https://github.com/[your-username]/[repo-name]',
    featured: true,
    imageAlt: '[Screenshot description]',
  },
  {
    id: 'proj-3',
    title: '[Side Project or Experiment]',
    subtitle: '[One-Line Descriptor — e.g. "CLI tool for database migrations"]',
    description:
      '[2–3 sentences: What motivated this? What did you learn? What would you do differently?]',
    tags: ['[Tech]', '[Tech]'],
    year: 2023,
    featured: false,
    imageAlt: '[Screenshot description]',
  },
];
