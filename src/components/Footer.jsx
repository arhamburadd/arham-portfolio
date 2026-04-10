import React from 'react';
import { Github, Youtube, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/arhamburadd" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accentHover dark:hover:text-accentBg transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.youtube.com/@roboarhamburad4813" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-500 transition-colors">
            <Youtube size={20} />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="mailto:contact@example.com" className="text-slate-500 hover:text-accentHover dark:hover:text-accentBg transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="text-slate-500 text-sm text-center">
          &copy; {currentYear} Arham Mayur Burad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
