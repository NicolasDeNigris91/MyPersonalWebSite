import { ExperienceEntry } from '@/types';

export const experienceData: ExperienceEntry[] = [
  {
    id: 'exp-1',
    organisation: '[COMPANY NAME]',
    role: '[YOUR ROLE TITLE]',
    period: '[Month YYYY] — Present',
    location: '[City, Country]',
    type: 'work',
    highlights: [
      '[KEY ACHIEVEMENT — e.g. "Reduced API latency by 40% by redesigning the caching layer"]',
      '[KEY ACHIEVEMENT — e.g. "Led migration of monolith to microservices serving 500k+ users"]',
      '[KEY ACHIEVEMENT — quantified impact preferred]',
    ],
    tags: ['[Tech Stack Item]', '[Framework]', '[Tool]'],
  },
  {
    id: 'exp-2',
    organisation: '[PREVIOUS COMPANY]',
    role: '[PREVIOUS ROLE]',
    period: '[Month YYYY] — [Month YYYY]',
    location: '[City, Country]',
    type: 'work',
    highlights: [
      '[KEY ACHIEVEMENT]',
      '[KEY ACHIEVEMENT]',
    ],
    tags: ['[Tech]', '[Framework]'],
  },
  {
    id: 'edu-1',
    organisation: '[UNIVERSITY NAME]',
    role: '[DEGREE — e.g. "BSc Computer Science"]',
    period: '[YYYY] — [YYYY]',
    location: '[City, Country]',
    type: 'education',
    highlights: [
      '[COURSE OR MODULE — e.g. "Dissertation: Distributed Systems Consensus Algorithms"]',
      '[COURSE OR ACHIEVEMENT]',
      '[AWARD OR DISTINCTION if applicable]',
    ],
    tags: ['[Relevant Module]', '[Relevant Module]'],
  },
];
