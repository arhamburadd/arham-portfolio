import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] w-full relative flex flex-col justify-center px-6 md:px-12 bg-background overflow-hidden selection:bg-primary selection:text-white pt-24 pb-12">
      
      {/* Elegant Colorful Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[600px] h-[600px] bg-primary rounded-full blur-[150px] mix-blend-screen absolute -top-1/4 -left-1/4"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="w-[600px] h-[600px] bg-accent rounded-full blur-[150px] mix-blend-screen absolute -bottom-1/4 -right-1/4"
        ></motion.div>
      </div>

      <div className="container mx-auto z-10 max-w-7xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-muted font-medium tracking-wide text-sm md:text-base mb-6 uppercase"
        >
          Robotics Builder &bull; Programmer &bull; Engineer
        </motion.p>
        
        <div className="overflow-hidden mb-2">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold text-foreground tracking-tighter leading-[0.85]"
          >
            ARHAM
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-12">
          <motion.h1 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
          >
            BURAD.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl"
        >
          <p className="text-muted text-lg md:text-xl font-light leading-relaxed">
            Bridging the gap between software and hardware. I design, program, and build physical systems that interact with the real world, and I document the journey along the way.
          </p>
        </motion.div>
      </div>

      {/* Simplified, elegant static scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center space-x-4"
      >
        <span className="text-xs uppercase tracking-widest text-muted">Scroll Down</span>
        <div className="w-16 h-[1px] bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
