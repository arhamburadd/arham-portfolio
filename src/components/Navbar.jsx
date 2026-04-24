import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Expertise', to: 'skills' },
  { name: 'Work', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'py-4 bg-background/70 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="home" 
          smooth={true} 
          duration={800} 
          className="text-white text-sm font-semibold tracking-tighter cursor-pointer hover:opacity-70 transition-opacity"
        >
          ARHAM BURAD
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 text-xs font-medium tracking-wide text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={0}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <a 
            href="#" 
            className="text-xs font-semibold text-black bg-white px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Resume
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-white"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 w-full h-screen bg-background/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="flex flex-col items-center justify-center h-2/3 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={0}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-tight text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#" 
                className="mt-8 text-lg font-medium text-black bg-white px-8 py-3 rounded-full"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
