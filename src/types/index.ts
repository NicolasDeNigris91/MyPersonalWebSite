export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: number;
  href?: string;
  repoHref?: string;
  featured: boolean;
  imageAlt?: string;
}

export interface ExperienceEntry {
  id: string;
  organisation: string;
  role: string;
  period: string;
  location: string;
  type: 'work' | 'education';
  highlights: string[];
  tags?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}
