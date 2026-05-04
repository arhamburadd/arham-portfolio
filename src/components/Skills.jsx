import React, { useState } from 'react';
import { motion } from 'framer-motion';

const neuralMap = [
  { name: "C / C++", top: "20%", left: "50%", size: "lg", type: "core" },
  { name: "Python", top: "35%", left: "30%", size: "lg", type: "core" },
  { name: "JavaScript", top: "32%", left: "70%", size: "md", type: "core" },
  
  { name: "React", top: "50%", left: "75%", size: "md", type: "web" },
  { name: "Tailwind CSS", top: "65%", left: "80%", size: "sm", type: "web" },
  { name: "HTML", top: "45%", left: "85%", size: "sm", type: "web" },
  
  { name: "Arduino", top: "55%", left: "20%", size: "lg", type: "hardware" },
  { name: "Microcontrollers", top: "70%", left: "30%", size: "md", type: "hardware" },
  { name: "Sensors & Motors", top: "85%", left: "45%", size: "md", type: "hardware" },
  { name: "Circuit Design", top: "65%", left: "15%", size: "sm", type: "hardware" },
  
  { name: "Git / GitHub", top: "82%", left: "65%", size: "md", type: "tools" },
  { name: "MySQL", top: "75%", left: "50%", size: "sm", type: "tools" },
];

export default function Skills({ addLog, onClose }) {
  const [activeNode, setActiveNode] = useState(null);
  const handleBackgroundClick = () => {
    if (activeNode !== null) {
      setActiveNode(null);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-24 bottom-24 left-8 md:left-24 right-8 md:right-24 pointer-events-auto flex flex-col md:flex-row shadow-[0_0_50px_rgba(204,255,0,0.05)] backdrop-blur-md overflow-hidden"
    >
            <div className="hidden md:flex flex-col justify-center w-1/2 p-12 bg-obsidian border border-gridLine border-r-0 relative overflow-hidden">
        <h2 className="text-6xl lg:text-8xl font-sans font-black tracking-tighter text-ghost mb-6 leading-none">
          THE <br/> SYSTEM <br/> <span className="text-lime">CORE.</span>
        </h2>
        <p className="text-lime text-xs font-mono tracking-widest uppercase mb-4 max-w-sm">
           Technical mapping of firmware, logic, and rendering capabilities.
        </p>
        <p className="text-ghost/50 text-sm font-sans font-light max-w-md">
           A full-stack ecosystem bridging the gap between physical robotics and digital applications. The neural map on the right visualizes the core technologies I utilize to bring concepts into reality.
        </p>
      </div>

            <div className="w-full flex-1 md:w-1/2 flex flex-col bg-cyberGray border border-gridLine overflow-hidden relative">
        <div className="flex justify-between items-center p-4 border-b border-gridLine bg-obsidian z-10 relative">
          <span className="text-lime text-xs font-bold tracking-widest uppercase">Technical Capabilities</span>
          <div className="flex gap-4 items-center">
            <a href="/Resume.pdf" download className="border border-lime text-lime px-4 py-1.5 hover:bg-lime hover:text-obsidian transition-colors text-xs font-bold tracking-widest flex items-center gap-2 cursor-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              DOWNLOAD RESUME
            </a>
            <button onClick={onClose} className="text-ghost hover:text-lime text-xs font-bold">CLOSE X</button>
          </div>
        </div>

        <div className="flex-grow relative overflow-hidden bg-obsidian cursor-pointer md:cursor-none" onClick={handleBackgroundClick}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  
                    <svg className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${activeNode !== null ? 'opacity-5' : 'opacity-20'}`}>
             <line x1="50%" y1="20%" x2="30%" y2="35%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="50%" y1="20%" x2="70%" y2="32%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="30%" y1="35%" x2="20%" y2="55%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="70%" y1="32%" x2="75%" y2="50%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="20%" y1="55%" x2="30%" y2="70%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="30%" y1="70%" x2="45%" y2="85%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="75%" y1="50%" x2="80%" y2="65%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="75%" y1="50%" x2="65%" y2="82%" stroke="#CCFF00" strokeWidth="1" />
          </svg>
  
          {neuralMap.map((node, i) => {
            const isActive = activeNode === i;
            const isFaded = activeNode !== null && !isActive;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isFaded ? 0.2 : 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: "spring" }}
                className={`absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer md:cursor-none group ${isActive ? 'z-50' : 'z-10'}`}
                style={{ top: node.top, left: node.left }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveNode(isActive ? null : i);
                  if (!isActive) addLog(`Inspected neural node: ${node.name}`);
                }}
              >
                <div className={`scale-[0.7] md:scale-100 origin-center transition-all duration-300 relative ${isActive ? 'scale-[0.9] md:scale-110' : ''}`}>
                  <div className={`
                    ${node.size === 'lg' ? 'p-4 text-xs' : node.size === 'md' ? 'p-3 text-[10px]' : 'p-2 text-[8px]'}
                    bg-cyberGray border ${isActive ? 'border-lime bg-lime/10' : 'border-lime'} text-ghost tracking-widest uppercase rounded shadow-[0_0_15px_rgba(204,255,0,0.1)] group-hover:bg-lime group-hover:text-obsidian transition-colors font-mono
                  `}>
                    {node.name}
                  </div>
                                    <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lime ${isActive ? 'animate-ping' : 'animate-fast-pulse'}`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
                <div className="p-3 bg-obsidian border-t border-gridLine flex justify-between tracking-widest text-[8px] text-lime">
          <span>CORE: ROOT</span>
          <span>HARDWARE: LOGIC</span>
          <span>WEB: RENDER</span>
        </div>
      </div>
    </motion.div>
  );
}
