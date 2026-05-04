'use client';

import { motion, type Variants } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { EASE_STANDARD, staggerContainer } from '@/lib/motion';
import { CopyEmailLink } from './CopyEmailLink';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_STANDARD },
  },
};

export function Contact() {
  return (
    <section id="contact" className="bg-graphite px-8 py-24 md:px-16 lg:px-24">
      <motion.div
        className="mx-auto max-w-5xl"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={fadeUp} className="mb-16">
          <div className="bg-gold-leaf mb-6 h-px w-16" />
          <h2 className="font-display text-display-lg text-pearl">
            Let&rsquo;s Connect
          </h2>
          <p className="text-caption text-chrome tracking-luxury mt-3 font-mono uppercase">
            Get in Touch
          </p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.div variants={fadeUp}>
            <p className="text-body-lg text-chrome mb-8 font-sans leading-relaxed">
              Disponível para novas oportunidades em desenvolvimento de
              software.
            </p>
            <CopyEmailLink className="text-caption tracking-luxury border-platinum text-platinum hover:bg-platinum hover:text-obsidian focus-visible:outline-platinum inline-flex items-center gap-3 border px-8 py-3 font-sans uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              <Mail size={14} strokeWidth={1} />
              Send Email
            </CopyEmailLink>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
                Email
              </h3>
              <CopyEmailLink className="text-body text-pearl hover:text-gold-leaf font-sans transition-colors duration-300">
                {siteConfig.email}
              </CopyEmailLink>
            </div>

            <div>
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
                Phone
              </h3>
              <a
                href={siteConfig.phoneLink}
                className="text-body text-pearl hover:text-gold-leaf flex items-center gap-2 font-sans transition-colors duration-300"
              >
                <Phone size={14} strokeWidth={1} className="text-mist" />
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
                Location
              </h3>
              <p className="text-body text-chrome flex items-center gap-2 font-sans">
                <MapPin size={14} strokeWidth={1} className="text-mist" />
                {siteConfig.location}
              </p>
            </div>

            <div>
              <h3 className="text-caption text-racing-green-lit tracking-luxury mb-3 font-mono uppercase">
                Social
              </h3>
              <div className="flex flex-col gap-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-chrome hover:text-pearl font-sans transition-colors duration-300"
                >
                  GitHub ↗
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-chrome hover:text-pearl font-sans transition-colors duration-300"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
