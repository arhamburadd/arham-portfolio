import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Database, Terminal, ChevronRight } from 'lucide-react';

export default function SoftwareProjects() {
  return (
    <section className="py-24 px-6 bg-[#030712] relative overflow-hidden">
      {/* Code-like background decorative elements */}
      <div className="absolute top-20 right-10 opacity-5 font-mono text-xs hidden lg:block pointer-events-none">
        <pre>{`function compile(src) {\n  return parser.parse(src)\n    .generate()\n    .optimize();\n}`}</pre>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <Terminal className="text-purple-500 mr-4" size={36} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Software<span className="text-purple-500">.Logic</span></h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
          <p className="text-slate-400 font-mono">Applications, algorithms, and backend structures.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* IDE Style Project Card: Olympiad Conduction System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group block relative bg-[#0D1117] rounded-xl overflow-hidden border border-slate-800 hover:border-purple-500/50 shadow-2xl transition-all duration-300"
          >
            {/* IDE Header */}
            <div className="bg-[#161B22] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center text-slate-400 text-xs font-mono">
                <Code2 size={14} className="mr-2" />
                olympiad_system.py
              </div>
              <a 
                href="https://github.com/arhamburadd/Olympiad_Conduction" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                title="View Source on GitHub"
              >
                <Github size={16} />
              </a>
            </div>
            
            {/* IDE Body */}
            <div className="p-6 md:p-8 font-mono">
              <h3 className="text-2xl font-bold text-white mb-4">Olympiad Conduction System</h3>
              
              <div className="text-slate-400 text-sm leading-relaxed mb-8 flex flex-col space-y-2">
                <span className="text-purple-400">/**</span>
                <span> * A comprehensive system designed to help conduct and </span>
                <span> * manage Olympiad competitions securely and easily, </span>
                <span> * including full participant data management.</span>
                <span className="text-purple-400"> */</span>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                <div className="flex items-center px-3 py-1.5 bg-[#1F2937] border border-slate-700 text-blue-400 rounded-md text-sm font-medium">
                  <span className="text-blue-500 mr-2">def</span> Python
                </div>
                <div className="flex items-center px-3 py-1.5 bg-[#1F2937] border border-slate-700 text-pink-400 rounded-md text-sm font-medium">
                  <Database size={14} className="mr-2" />
                  MySQL
                </div>
              </div>
            </div>
          </motion.div>

          {/* Empty Space / Future Projects Template */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-transparent border-2 border-dashed border-slate-800 hover:border-slate-600 rounded-xl flex flex-col items-center justify-center p-8 text-center min-h-[300px] transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-[#161B22] border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ChevronRight className="text-slate-500" size={24} />
            </div>
            <h3 className="text-xl font-mono text-slate-400 mb-2">// TODO: Initialize New Project</h3>
            <p className="text-sm text-slate-600 font-mono">Reserving memory space for future applications and algorithms.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
