'use client';

import { motion, type Variants } from 'framer-motion';
import { skillsData } from '@/data/site';
import { EASE_STANDARD, staggerContainer } from '@/lib/motion';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_STANDARD },
  },
};

export function Skills() {
  return (
    <section id="skills" className="px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE_STANDARD }}
          className="mb-16 flex flex-col"
        >
          <h2 className="font-display text-display-lg text-pearl">
            Skills e ferramentas
          </h2>
          <div className="bg-gold-leaf mt-6 h-px w-32" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.category}
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-6 font-mono uppercase">
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <span className="bg-gold-leaf h-1 w-1 flex-shrink-0 rounded-full" />
                    <span className="text-body text-chrome font-sans">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
