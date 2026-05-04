'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const SHOW_AFTER_PX = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: reduced ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-obsidian/90 border-mist text-chrome hover:border-gold-leaf hover:text-gold-leaf focus-visible:outline-platinum fixed right-6 bottom-6 z-30 inline-flex h-11 w-11 items-center justify-center border backdrop-blur-md transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:right-10 md:bottom-10"
        >
          <ArrowUp size={16} strokeWidth={1} aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
