import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-md shadow-sm dark:shadow-slate-800/50' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="text-xl md:text-2xl font-bold font-sans cursor-pointer text-slate-800 dark:text-white group">
          <span className="text-accentBg">&lt;</span>Arham Mayur Burad <span className="text-accentBg">/&gt;</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accentHover dark:hover:text-accentBg transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-800 dark:text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-lightCard dark:bg-darkCard absolute top-full left-0 w-full shadow-lg border-t border-slate-200 dark:border-slate-800"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-slate-600 dark:text-slate-300 hover:text-accentHover dark:hover:text-accentBg cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
