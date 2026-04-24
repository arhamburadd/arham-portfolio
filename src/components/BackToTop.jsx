import React, { useState, useEffect } from 'react';
import { ArrowUp, ChevronsUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-panel border-2 border-electricBlue text-electricBlue hover:bg-electricBlue hover:text-black shadow-glow-blue transition-all group flex items-center justify-center cursor-none"
          aria-label="Back to top"
          data-cursor="magnetic"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        >
          <ChevronsUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
