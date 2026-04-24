import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function SoftwareProjects() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            SOFTWARE
          </h2>
          <div className="h-[2px] w-12 bg-white/20 mb-8"></div>
          <p className="text-zinc-400 font-light max-w-xl text-lg leading-relaxed">
            Algorithms, architectures, and backend solutions engineered for scale.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full border border-white/10 hover:border-white/30 transition-colors"
          >
            <a 
              href="https://github.com/arhamburadd/Olympiad_Conduction" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-8 md:p-16 w-full h-full flex flex-col md:flex-row md:items-center justify-between gap-8 bg-zinc-900/30"
            >
              <div className="md:w-3/4">
                <span className="text-zinc-500 font-medium tracking-widest text-sm uppercase mb-4 block">
                  Application Architecture
                </span>
                <h3 className="text-3xl lg:text-5xl font-medium text-white tracking-tight mb-6">
                  Olympiad Conduction System
                </h3>
                <p className="text-zinc-400 font-light text-lg leading-relaxed max-w-2xl mb-8">
                  A comprehensive system designed to help conduct and manage Olympiad competitions securely and easily, including full participant data management. Built for reliability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white text-black text-xs font-semibold tracking-widest uppercase rounded-sm">
                    Python
                  </span>
                  <span className="px-4 py-2 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase rounded-sm">
                    MySQL
                  </span>
                </div>
              </div>
              
              <div className="md:w-1/4 flex justify-end">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 text-white">
                  <ArrowUpRight size={28} strokeWidth={1.5} />
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full border border-white/5 bg-transparent"
          >
            <div className="p-8 md:p-16 flex flex-col justify-center items-center text-center h-[300px]">
              <span className="text-zinc-600 font-medium tracking-widest text-sm uppercase mb-4">
                In Development
              </span>
              <h3 className="text-2xl text-zinc-500 font-medium tracking-tight">
                Architecting future solutions.
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
