import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';
import RoboticsProjects from './components/RoboticsProjects';
import Contact from './components/Contact';

function App() {
  const [booted, setBooted] = useState(false);
  const [activeWindow, setActiveWindow] = useState('HOME');
  const [logs, setLogs] = useState(["[SYS] Core systems initialized."]);
  const consoleRef = useRef(null);

  const addLog = (message) => {
    setLogs(prev => [...prev, `[${new Date().toISOString().split('T')[1].slice(0,8)}] > ${message}`]);
  };

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    const bootSequence = async () => {
      addLog("Loading profile data...");
      await new Promise(r => setTimeout(r, 600));
      addLog("Welcome, Arham Mayur Burad.");
      await new Promise(r => setTimeout(r, 600));
      setBooted(true);
    };
    bootSequence();
  }, []);

  const handleNav = (target) => {
    if (activeWindow === target) {
      setActiveWindow('HOME');
      addLog(`Closed ${target} view. Returned to home screen.`);
    } else {
      setActiveWindow(target);
      addLog(`Opening ${target.toLowerCase()} architecture...`);
    }
  };

  return (
    <div className="w-screen h-screen bg-obsidian text-ghost font-mono overflow-hidden relative selection:bg-lime selection:text-obsidian flex flex-col justify-between">
      
            <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none z-50 mix-blend-overlay"></div>

      <AnimatePresence>
        {!booted && (
          <motion.div 
            className="absolute inset-0 bg-obsidian z-[100] flex flex-col items-center justify-center pt-12"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-sans font-light tracking-tighter text-ghost mb-4"
            >
              Arham Mayur Burad
            </motion.h1>
            <div className="text-lime text-xs tracking-widest uppercase">
              Loading Operating Environment
            </div>
          </motion.div>
        )}
      </AnimatePresence>

            <div className="relative w-full h-full flex-grow flex items-center justify-center p-8">
        
                <AnimatePresence>
          {activeWindow === 'HOME' && booted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none"
            >
                            <div className="relative w-72 h-72 md:w-96 md:h-96 flex flex-col items-center justify-center mb-12">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-lime/20 rounded-[10%] backdrop-blur-sm shadow-[0_0_50px_rgba(204,255,0,0.05)]"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 border border-lime/30 rounded-full border-dashed"
                />
                <div className="text-center relative z-10 bg-obsidian/60 px-8 py-6 rounded-sm border border-lime/30 backdrop-blur-md shadow-lg">
                   <div className="text-lime text-[8px] font-mono tracking-widest text-left mb-1 opacity-60">ID: AMB_01</div>
                   <h1 className="text-2xl md:text-4xl font-sans font-black tracking-tighter text-white mb-2 whitespace-nowrap">
                     ARHAM MAYUR BURAD
                   </h1>
                   <div className="flex items-center gap-2 mb-3">
                     <div className="h-[1px] w-full bg-lime/60"></div>
                     <div className="w-2 h-2 bg-lime rotate-45 flex-shrink-0"></div>
                     <div className="h-[1px] w-full bg-lime/60"></div>
                   </div>
                   <h2 className="text-[10px] tracking-widest text-lime uppercase mb-1 font-bold">Robotics Engineer & Developer</h2>
                   <p className="text-[8px] tracking-wider text-ghost/50 font-mono mb-4">AUTOMATION_CONTROL</p>
                   <a href="/Resume.pdf" download className="inline-flex pointer-events-auto border border-lime text-lime px-4 py-1.5 hover:bg-lime hover:text-obsidian transition-colors text-[10px] font-bold tracking-widest uppercase items-center gap-2 cursor-none">
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                     DOWNLOAD RESUME
                   </a>
                </div>
              </div>
              
              <div className="text-ghost/50 text-xs tracking-widest mt-8 font-sans max-w-sm text-center">
                 SELECT A SECTOR FROM THE PERIMETER NAVIGATION TO DEPLOY MODULE
              </div>
            </motion.div>
          )}
        </AnimatePresence>

                <div className="absolute inset-8 pointer-events-none z-20">
          
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto group hidden md:flex flex-col items-center">
            <div className="text-lime text-[10px] font-bold mb-1 flex items-center tracking-widest uppercase">
              <span className="w-4 h-[1px] bg-lime mr-2 group-hover:w-8 transition-all"></span>
              System Root
              <span className="w-4 h-[1px] bg-lime ml-2 group-hover:w-8 transition-all"></span>
            </div>
            <button onClick={() => handleNav('HOME')} className="text-ghost text-xl md:text-3xl font-sans font-black tracking-tighter hover:text-lime transition-all uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              ARHAM MAYUR BURAD
            </button>
          </div>

          <button onClick={() => handleNav('PROJECTS')} className="absolute top-0 left-0 pointer-events-auto group">
            <div className="text-lime text-[10px] font-bold mb-1 flex items-center tracking-widest uppercase">
              <span className="w-4 h-[1px] bg-lime mr-2 group-hover:w-8 transition-all"></span> Hardware & Software
            </div>
            <div className="text-ghost text-xl md:text-2xl font-sans font-black tracking-tighter group-hover:text-lime transition-colors">PROJECTS</div>
          </button>
          
          <button onClick={() => handleNav('STACK')} className="absolute top-0 right-0 pointer-events-auto text-right group">
            <div className="text-lime text-[10px] font-bold mb-1 flex items-center justify-end tracking-widest uppercase">
              Capabilities <span className="w-4 h-[1px] bg-lime ml-2 group-hover:w-8 transition-all"></span>
            </div>
            <div className="text-ghost text-xl md:text-2xl font-sans font-black tracking-tighter group-hover:text-lime transition-colors">STACK</div>
          </button>
          
          <button onClick={() => handleNav('ABOUT')} className="absolute bottom-0 left-0 pointer-events-auto group">
            <div className="text-ghost text-xl md:text-2xl font-sans font-black tracking-tighter group-hover:text-lime transition-colors">ABOUT</div>
            <div className="text-lime text-[10px] font-bold mt-1 flex items-center tracking-widest uppercase">
              <span className="w-4 h-[1px] bg-lime mr-2 group-hover:w-8 transition-all"></span> Background Log
            </div>
          </button>
          
          <button onClick={() => handleNav('CONNECT')} className="absolute bottom-0 right-0 pointer-events-auto text-right group">
            <div className="text-ghost text-xl md:text-2xl font-sans font-black tracking-tighter group-hover:text-lime transition-colors">CONNECT</div>
            <div className="text-lime text-[10px] font-bold mt-1 flex items-center justify-end tracking-widest uppercase">
               Transmission <span className="w-4 h-[1px] bg-lime ml-2 group-hover:w-8 transition-all"></span>
            </div>
          </button>
        </div>

                <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
          <AnimatePresence>
            {activeWindow === 'ABOUT' && <About addLog={addLog} onClose={() => handleNav('HOME')} />}
            {activeWindow === 'STACK' && <Skills addLog={addLog} onClose={() => handleNav('HOME')} />}
            {activeWindow === 'PROJECTS' && <RoboticsProjects addLog={addLog} onClose={() => handleNav('HOME')} />}
            {activeWindow === 'CONNECT' && <Contact addLog={addLog} onClose={() => handleNav('HOME')} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
