'use client';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import { BookOpen, Clock, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { coursesData } from '@/data/courses';
import { EASE_STANDARD, staggerContainer } from '@/lib/motion';

const VISIBLE_COUNT = 6;

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_STANDARD },
  },
};

export function Courses() {
  const totalHours = coursesData.reduce((sum, c) => {
    const num = parseFloat(c.hours.replace(',', '.').replace('h', ''));
    return sum + num;
  }, 0);

  const [expanded, setExpanded] = useState(false);
  const ordered = [...coursesData].reverse();
  const visibleCourses = ordered.slice(0, VISIBLE_COUNT);
  const hiddenCourses = ordered.slice(VISIBLE_COUNT);

  const reduced = useReducedMotion();
  const containerDuration = reduced ? 0.01 : 0.6;
  const rowDuration = reduced ? 0.01 : 0.5;
  const rowDelayStep = reduced ? 0 : 0.04;

  return (
    <section id="courses" className="bg-graphite px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE_STANDARD }}
          className="mb-16"
        >
          <p className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
            Continuous Learning
          </p>
          <h2 className="font-display text-display-lg text-pearl">
            Courses &amp; Certifications
          </h2>
          <div className="bg-gold-leaf mt-4 h-px w-24" />
          <p className="text-caption text-chrome mt-4 font-mono tracking-wide">
            {coursesData.length} courses ·{' '}
            {totalHours.toFixed(0).replace('.', ',')}+ hours of study
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="space-y-0"
        >
          {visibleCourses.map((course) => (
            <motion.div
              key={course.name}
              variants={rowVariants}
              className="group border-mist/40 hover:bg-carbon/50 -mx-4 grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b px-4 py-4 transition-colors duration-200 md:grid-cols-[1fr_180px_80px] md:gap-8"
            >
              <div className="flex items-center gap-3">
                <BookOpen
                  size={14}
                  strokeWidth={1}
                  className="text-racing-green-lit hidden flex-shrink-0 md:block"
                />
                <span className="text-body text-pearl group-hover:text-gold-leaf font-sans transition-colors duration-300">
                  {course.name}
                </span>
              </div>

              <span className="text-caption text-chrome text-right font-mono tracking-wide">
                {course.date}
              </span>

              <span className="text-caption text-racing-green-lit flex items-center justify-end gap-1 text-right font-mono tracking-wide">
                <Clock size={12} strokeWidth={1} className="hidden md:block" />
                {course.hours}
              </span>
            </motion.div>
          ))}
          <div id="courses-hidden">
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="courses-hidden-rows"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: containerDuration,
                    ease: EASE_STANDARD,
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  {hiddenCourses.map((course, i) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: i * rowDelayStep,
                          duration: rowDuration,
                          ease: EASE_STANDARD,
                        },
                      }}
                      className="group border-mist/40 hover:bg-carbon/50 -mx-4 grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b px-4 py-4 transition-colors duration-200 md:grid-cols-[1fr_180px_80px] md:gap-8"
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen
                          size={14}
                          strokeWidth={1}
                          className="text-racing-green-lit hidden flex-shrink-0 md:block"
                        />
                        <span className="text-body text-pearl group-hover:text-gold-leaf font-sans transition-colors duration-300">
                          {course.name}
                        </span>
                      </div>
                      <span className="text-caption text-chrome text-right font-mono tracking-wide">
                        {course.date}
                      </span>
                      <span className="text-caption text-racing-green-lit flex items-center justify-end gap-1 text-right font-mono tracking-wide">
                        <Clock
                          size={12}
                          strokeWidth={1}
                          className="hidden md:block"
                        />
                        {course.hours}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls="courses-hidden"
          className="border-mist text-caption tracking-luxury text-chrome hover:border-gold-leaf hover:text-pearl mx-auto mt-12 flex items-center gap-3 border px-8 py-3 font-mono uppercase transition-colors duration-300"
        >
          {expanded ? (
            <Minus size={16} strokeWidth={1} />
          ) : (
            <Plus size={16} strokeWidth={1} />
          )}
          <span>
            {expanded
              ? 'Show less'
              : `Show ${coursesData.length - VISIBLE_COUNT} more`}
          </span>
        </button>
      </div>
    </section>
  );
}
