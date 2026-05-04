'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { EASE_STANDARD } from '@/lib/motion';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE_STANDARD }}
      className="group bg-graphite border-mist hover:border-gold-leaf shadow-card hover:shadow-card-hover flex flex-col border transition-all duration-300"
    >
      <div className="from-racing-green-lit via-gold-leaf h-px bg-gradient-to-r to-transparent" />

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-6 flex items-center justify-between">
          <time
            dateTime={String(project.year)}
            className="text-caption text-racing-green-lit font-mono tracking-wide tabular-nums"
          >
            {project.year}
          </time>
          <div className="flex items-center gap-3">
            {project.repoHref && (
              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-chrome hover:text-gold-leaf transition-colors duration-200"
                aria-label="View source code"
              >
                <GitBranch size={16} strokeWidth={1} />
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-chrome hover:text-gold-leaf transition-colors duration-200"
                aria-label="View live project"
              >
                <ExternalLink size={16} strokeWidth={1} />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display text-display-md text-pearl group-hover:text-gold-leaf mb-1 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-caption text-chrome mb-4 font-sans tracking-wide uppercase">
          {project.subtitle}
        </p>

        <div className="bg-mist mb-4 h-px" />

        <p className="text-body text-chrome mb-6 flex-1 font-sans leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-caption text-mist border-mist group-hover:border-racing-green-lit group-hover:text-racing-green-lit border px-3 py-1 font-mono tracking-wide transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
