import React from 'react';
import { motion } from 'framer-motion';

const neuralMap = [
  { name: "C / C++", top: "20%", left: "50%", size: "lg", type: "core" },
  { name: "Python", top: "35%", left: "30%", size: "lg", type: "core" },
  { name: "JavaScript", top: "30%", left: "70%", size: "md", type: "core" },
  
  { name: "React", top: "50%", left: "75%", size: "md", type: "web" },
  { name: "Tailwind CSS", top: "65%", left: "80%", size: "sm", type: "web" },
  { name: "HTML", top: "45%", left: "90%", size: "sm", type: "web" },
  
  { name: "Arduino", top: "55%", left: "20%", size: "lg", type: "hardware" },
  { name: "Microcontrollers", top: "70%", left: "30%", size: "md", type: "hardware" },
  { name: "Sensors & Motors", top: "80%", left: "45%", size: "md", type: "hardware" },
  { name: "Circuit Design", top: "65%", left: "10%", size: "sm", type: "hardware" },
  
  { name: "Git / GitHub", top: "85%", left: "65%", size: "md", type: "tools" },
  { name: "MySQL", top: "75%", left: "55%", size: "sm", type: "tools" },
];

export default function Skills({ addLog, onClose }) {

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-24 bottom-24 left-8 md:left-24 right-8 md:right-24 pointer-events-auto flex flex-col md:flex-row shadow-[0_0_50px_rgba(204,255,0,0.05)] backdrop-blur-md overflow-hidden"
    >
      {/* Left side text block */}
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

      {/* Right side Neural Map */}
      <div className="w-full flex-1 md:w-1/2 flex flex-col bg-cyberGray border border-gridLine overflow-hidden relative">
        <div className="flex justify-between items-center p-4 border-b border-gridLine bg-obsidian z-10 relative">
          <span className="text-lime text-xs font-bold tracking-widest uppercase">Technical Capabilities</span>
          <button onClick={onClose} className="text-ghost hover:text-lime text-xs font-bold">CLOSE X</button>
        </div>

        <div className="flex-grow relative overflow-hidden bg-obsidian">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  
          {/* Lines connecting some nodes purely decorative using SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
             <line x1="50%" y1="20%" x2="30%" y2="35%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="50%" y1="20%" x2="70%" y2="30%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="30%" y1="35%" x2="20%" y2="55%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="70%" y1="30%" x2="75%" y2="50%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="20%" y1="55%" x2="30%" y2="70%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="30%" y1="70%" x2="45%" y2="80%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="75%" y1="50%" x2="80%" y2="65%" stroke="#CCFF00" strokeWidth="1" />
             <line x1="75%" y1="50%" x2="65%" y2="85%" stroke="#CCFF00" strokeWidth="1" />
          </svg>
  
          {neuralMap.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, type: "spring" }}
              className={`absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-none group`}
              style={{ top: node.top, left: node.left }}
              onClick={() => addLog(`Inspected neural node: ${node.name}`)}
            >
              <div className={`
                ${node.size === 'lg' ? 'p-4 text-xs' : node.size === 'md' ? 'p-3 text-[10px]' : 'p-2 text-[8px]'}
                bg-cyberGray border border-lime text-ghost tracking-widest uppercase rounded shadow-[0_0_15px_rgba(204,255,0,0.1)] group-hover:bg-lime group-hover:text-obsidian transition-colors font-mono
              `}>
                {node.name}
              </div>
              {/* Blinking indicator dot */}
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-lime animate-fast-pulse"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Legend Map Bottom */}
        <div className="p-3 bg-obsidian border-t border-gridLine flex justify-between tracking-widest text-[8px] text-lime">
          <span>CORE: ROOT</span>
          <span>HARDWARE: LOGIC</span>
          <span>WEB: RENDER</span>
        </div>
      </div>
    </motion.div>
  );
}
