import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Container, Github, Youtube, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden bg-darkBg">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0"></div>
      
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-electricBlue/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neonGreen/10 rounded-full blur-[100px] -z-10 mix-blend-screen" />

      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-electricBlue/30 bg-electricBlue/5 shadow-glow-blue backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-neonGreen animate-pulse mr-3"></span>
            <span className="text-electricBlue text-sm font-mono tracking-wider uppercase">System Online</span>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ARHAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-neonGreen">BURADD</span>
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-3xl font-light text-slate-300 mb-8 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Robotics Builder <span className="text-electricBlue mx-2">|</span> Programmer <span className="text-electricBlue mx-2">|</span> Engineer
        </motion.h2>

        <motion.p 
          className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Bridging the gap between software and hardware. I design, program, and build physical systems that interact with the real world, and I document the journey along the way.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="group cursor-pointer flex items-center justify-center px-8 py-4 rounded-xl bg-electricBlue text-darkBg font-bold transition-all shadow-glow-blue hover:shadow-[0_0_25px_rgba(0,243,255,0.8)] hover:-translate-y-1"
          >
            <Container size={20} className="mr-2" />
            Initialize Projects
          </Link>
          
          <a
            href="https://github.com/arhamburadd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 bg-darkCard/50 hover:bg-darkCard hover:border-white text-white font-medium transition-all backdrop-blur-sm"
          >
            <Github size={20} className="mr-2" />
            GitHub
          </a>

          <a
            href="https://www.youtube.com/@roboarhamburad4813"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 rounded-xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 hover:border-red-500 text-white font-medium transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] backdrop-blur-sm"
          >
            <Youtube size={20} className="mr-2 text-red-500" />
            YouTube
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Link to="about" smooth={true} duration={500} offset={-70}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-electricBlue opacity-50 hover:opacity-100 transition-opacity"
          >
            <ChevronDown size={32} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
