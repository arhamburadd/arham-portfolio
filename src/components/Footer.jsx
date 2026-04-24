import React from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex space-x-8 mb-6 md:mb-0">
          <a href="https://github.com/arhamburadd" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-wide">
            GitHub
          </a>
          <a href="https://www.youtube.com/@roboarhamburad4813" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-wide">
            YouTube
          </a>
          <a href="mailto:contact@example.com" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-wide">
            Email
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">
            &copy; {currentYear} Arham Mayur Burad
          </p>
          <button 
            onClick={() => scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' })}
            className="flex items-center space-x-2 text-zinc-500 hover:text-white transition-colors text-xs tracking-widest uppercase"
          >
            <span>Back to top</span>
            <ArrowUp size={12} strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
