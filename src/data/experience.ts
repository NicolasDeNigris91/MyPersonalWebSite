import type { ExperienceEntry } from '@/types';

export const experienceData: ExperienceEntry[] = [
  {
    id: 'exp-1',
    organisation: '[Current Company Name]',
    role: '[Current Job Title]',
    period: '[Start Month YYYY] — Present',
    location: '[City, Country]',
    type: 'work',
    highlights: [
      '[Key Achievement #1 — e.g. "Reduced API latency by 40% through caching layer redesign"]',
      '[Key Achievement #2 — e.g. "Led a team of 5 engineers to deliver a new product feature"]',
      '[Key Achievement #3 — quantify impact where possible]',
    ],
    tags: ['[Primary Language]', '[Main Framework]', '[Key Tool]'],
  },
  {
    id: 'exp-2',
    organisation: '[Previous Company Name]',
    role: '[Previous Job Title]',
    period: '[Start Month YYYY] — [End Month YYYY]',
    location: '[City, Country]',
    type: 'work',
    highlights: [
      '[Key Achievement #1 — what you built or improved]',
      '[Key Achievement #2 — measurable outcome preferred]',
    ],
    tags: ['[Language]', '[Framework]'],
  },
  {
    id: 'edu-1',
    organisation: '[University Name]',
    role: '[Degree Title — e.g. "BSc Computer Science"]',
    period: '[Start YYYY] — [End YYYY]',
    location: '[City, Country]',
    type: 'education',
    highlights: [
      '[Notable Course or Thesis — e.g. "Thesis: Real-Time Distributed Consensus"]',
      '[Relevant Module or Specialisation]',
      '[Award, Distinction, or GPA if notable]',
    ],
    tags: ['[Specialisation Area]', '[Relevant Subject]'],
  },
];
