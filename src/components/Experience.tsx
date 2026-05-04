'use client';

import { motion, type Variants } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { experienceData } from '@/data/experience';
import { EASE_STANDARD, staggerContainer } from '@/lib/motion';
import type { ExperienceEntry } from '@/types';

const entryVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_STANDARD },
  },
};

interface EntryProps {
  entry: ExperienceEntry;
}

function ExperienceEntryCard({ entry }: EntryProps) {
  const Icon = entry.type === 'education' ? GraduationCap : Briefcase;

  return (
    <motion.article
      variants={entryVariants}
      className="group relative grid grid-cols-[1px_1fr] gap-8"
    >
      <div className="relative flex flex-col items-center">
        <div className="bg-mist w-px flex-1" />
        <div className="bg-racing-green-lit ring-obsidian absolute top-3 h-2 w-2 rounded-full ring-4" />
      </div>

      <div className="pb-12 pl-4">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <Icon
                size={14}
                strokeWidth={1}
                className="text-racing-green-lit"
              />
              <span className="text-caption text-racing-green-lit font-mono tracking-wide uppercase">
                {entry.type === 'education' ? 'Education' : 'Experience'}
              </span>
            </div>
            <h3 className="font-display text-display-md text-pearl">
              {entry.organisation}
            </h3>
            <p className="text-body text-chrome font-sans font-light">
              {entry.role}
            </p>
          </div>
          <div className="text-right">
            <p className="text-caption text-chrome font-mono tracking-wide">
              {entry.period}
            </p>
            <div className="mt-1 flex items-center justify-end gap-1">
              <MapPin size={12} strokeWidth={1} className="text-mist" />
              <span className="text-caption text-mist font-mono">
                {entry.location}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-mist mb-4 h-px" />

        {entry.highlights.length > 0 && (
          <ul className="mb-4 space-y-2">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="bg-gold-leaf mt-2 h-1 w-1 flex-shrink-0 rounded-full" />
                <span className="text-body text-chrome font-sans">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        )}

        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag, i) => (
              <span
                key={i}
                className="text-caption text-mist border-mist border px-3 py-1 font-mono tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Experience() {
  const work = experienceData.filter((e) => e.type === 'work');
  const education = experienceData.filter((e) => e.type === 'education');

  return (
    <section id="experience" className="px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE_STANDARD }}
          className="mb-16"
        >
          <p className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
            Background
          </p>
          <h2 className="font-display text-display-lg text-pearl">
            Experience &amp; Education
          </h2>
          <div className="bg-gold-leaf mt-4 h-px w-24" />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-caption text-chrome tracking-luxury mb-8 font-mono uppercase">
              Work History
            </p>
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {work.map((entry) => (
                <ExperienceEntryCard key={entry.id} entry={entry} />
              ))}
            </motion.div>
          </div>

          <div>
            <p className="text-caption text-chrome tracking-luxury mb-8 font-mono uppercase">
              Education
            </p>
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {education.map((entry) => (
                <ExperienceEntryCard key={entry.id} entry={entry} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
