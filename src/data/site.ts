import type { SiteConfig, Skill } from '@/types';

export const siteConfig: SiteConfig = {
  name: '[Your Full Name]',
  tagline: '[Your Job Title] · [Your Secondary Title] · [Your Third Title]',
  email: '[your.email@example.com]',
  github: 'https://github.com/[your-github-username]',
  linkedin: 'https://linkedin.com/in/[your-linkedin-handle]',
  location: '[Your City, Country]',
};

export const skillsData: Skill[] = [
  {
    category: 'Languages',
    items: ['[Language 1]', '[Language 2]', '[Language 3]', '[Language 4]'],
  },
  {
    category: 'Frameworks',
    items: ['[Framework 1]', '[Framework 2]', '[Framework 3]'],
  },
  {
    category: 'Infrastructure',
    items: ['[Tool 1]', '[Tool 2]', '[Tool 3]'],
  },
  {
    category: 'Design',
    items: ['[Tool 1]', '[Tool 2]'],
  },
];
