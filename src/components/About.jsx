import React from 'react';
import { motion } from 'framer-motion';
import { User, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-darkBg border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electricBlue/10 rounded-full mix-blend-screen filter blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <User className="text-electricBlue mr-4" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">System<span className="text-electricBlue">.Profile</span></h2>
          </div>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full mb-6 shadow-glow-blue"></div>
          <p className="text-slate-400 font-mono">Initializing user entity data...</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0A1220] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden relative"
        >
          <div className="bg-[#050B14] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
             <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
             </div>
             <div className="text-slate-500 font-mono text-xs flex items-center">
                <Terminal size={14} className="mr-2" /> 
                <span>about_me.txt - arham_burad</span>
             </div>
             <div className="w-12"></div> 
          </div>

          <div className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-electricBlue/10 rounded-full blur-[80px]"></div>
            
            <div className="text-lg text-slate-300 leading-relaxed space-y-6 relative z-10 font-sans">
              <p>
                <span className="text-electricBlue font-mono font-bold mr-2">&gt;</span>
                Hi, I’m Arham Mayur Burad, a second-year student at PES University. I like to think I’ve figured out how to balance doing absolutely nothing and getting things done when it actually matters. I enjoy bingewatching and gaming, but when it’s time to be productive, I get things done.
              </p>
              <p>
                <span className="text-electricBlue font-mono font-bold mr-2">&gt;</span>
                My journey started with a small interest in robotics, which slowly grew into a real curiosity about how things work and how to build them. With a lot of support and some pushing from my parents, that interest turned into something much bigger and shaped where I am today.
              </p>
              <p>
                <span className="text-electricBlue font-mono font-bold mr-2">&gt;</span>
                These days, I spend my time exploring robotics and coding, trying things out, learning as I go, and sometimes breaking things just to understand them better. I like to keep things simple, stay curious, and focus on showing up when it counts.
              </p>
              <p>
                <span className="text-electricBlue font-mono font-bold mr-2">&gt;</span>
                I’d say I’m somewhere between chill and driven, just figuring things out and turning ideas into something real.
              </p>
              
              <div className="mt-10 pt-6 border-t border-slate-800/50 flex items-center text-slate-500 font-mono text-sm">
                <span className="animate-pulse w-3 h-5 bg-electricBlue mr-3 inline-block shadow-glow-blue"></span>
                <span className="text-electricBlue/70 tracking-widest">AWAITING_INSTRUCTION...</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
