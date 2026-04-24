import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  { year: "Phase 01", command: "Foundational Hardware", desc: "Started at Sritech academy in 6th standard. Built a Color Sorter as my first major physical project. Progressed quickly to complete a PIR Security System for basic human detection, a Line Follower optimized for strict competition routing, and an autonomous Obstacle Avoider robot capable of dynamic pathfinding." },
  { year: "Phase 02", command: "Crisis Innovation", desc: "Utilized the global lockdown period to push into high difficulty custom builds. Completed the Mini Robo from scratch, which presented significant motor mapping and technical challenges. Expanded my hardware skill tree by building an interactive LCD Display interface and a Smart Dustbin powered by ultrasonic distancing logic.", noHyphen: true },
  { year: "Phase 03", command: "National Recognition", desc: "Designed, tested, and deployed a rapid-response Thief Detector system for a national robotics event held at IIT Madras. Focused heavily on high-speed sensor fusion, reliable signal processing under pressure, and mitigating false positives in a competitive environment." },
  { year: "Phase 04", command: "Software Expansion", desc: "Transitioned skills into pure software engineering to balance my hardware background. Key digital projects include a comprehensive Olympiad Conduction database system for competition management and an advanced Hand Gesture Control application built using OpenCV and Python.", isGesture: true }
];

export default function About({ addLog, onClose }) {
  const handleScroll = (e) => {
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -50, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-24 bottom-24 left-8 md:left-24 right-8 md:right-24 pointer-events-auto flex flex-col md:flex-row shadow-[0_0_50px_rgba(204,255,0,0.05)] backdrop-blur-md overflow-y-auto md:overflow-hidden"
    >
            <div className="w-full h-max md:h-full md:w-1/2 flex flex-col bg-cyberGray border border-gridLine border-b-0 md:border-b md:border-r-0 md:overflow-y-auto flex-shrink-0 md:flex-shrink" style={{ scrollbarWidth: 'none' }}>
        <div className="flex justify-between items-center p-4 border-b border-gridLine bg-obsidian z-10 sticky top-0">
          <span className="text-[#A2FFA2] text-xs font-bold tracking-widest uppercase">System Diagnostics / Identity</span>
          <button onClick={onClose} className="text-ghost hover:text-[#A2FFA2] text-xs font-bold block md:hidden">CLOSE X</button>
        </div>

        <div className="p-8 lg:p-12">
          <h2 className="text-5xl lg:text-7xl font-sans font-black tracking-tighter text-ghost mb-8 leading-none">
            ENGINEER <br className="hidden md:block" /> THE <span className="text-[#A2FFA2]">MIND.</span>
          </h2>
          
          <div className="space-y-6 text-sm font-sans font-light text-ghost/80 leading-relaxed mb-8 break-words text-justify" style={{ hyphens: 'none', WebkitHyphens: 'none' }}>
            <p className="border-l-2 border-[#A2FFA2]/30 pl-4 py-1">
              <strong className="text-white block mb-1 uppercase tracking-widest text-[10px] text-[#A2FFA2]">The Operator</strong>
              I am Arham Mayur Burad, a second year student at PES University. I balance doing nothing with getting things done when it matters. I enjoy binge watching and gaming, but I shift into focus when productivity is required. I rely on calculated efficiency. This preparation ensures rapid execution when project demands increase. I focus on actions that produce meaningful, verifiable results.
            </p>
            <p className="border-l-2 border-[#A2FFA2]/30 pl-4 py-1">
              <strong className="text-white block mb-1 uppercase tracking-widest text-[10px] text-[#A2FFA2]">The Foundation</strong>
              My journey began in the 6th standard when motors and mechanical movement first sparked my interest. My parents saw this eagerness. They pushed me to pursue it and enrolled me in the Sritech robotics academy. Their support turned a small curiosity into a deliberate engineering pursuit. This foundation helped me understand how things work and how to build them from scratch.
            </p>
            <p className="border-l-2 border-[#A2FFA2]/30 pl-4 py-1">
              <strong className="text-white block mb-1 uppercase tracking-widest text-[10px] text-[#A2FFA2]">The Process</strong>
              These days, I spend my time exploring the intersection of hardware and code. I build, I deploy, and I break systems to understand their true design limits. I prioritize simple, robust designs over unnecessary complexity. Learning requires this constant cycle of trying things out and learning as I go. I keep things simple, stay curious, and focus on showing up when it counts.
            </p>
            <p className="border-l-2 border-[#A2FFA2]/30 pl-4 py-1">
              <strong className="text-white block mb-1 uppercase tracking-widest text-[10px] text-[#A2FFA2]">The Mindset</strong>
              I exist somewhere between chill and driven. I turn ideas into something real while figuring out the best way forward. I view my work in two halves: the hardware that built my foundation and the software logic that drives my future. My goal is consistency and solving problems in the field.
            </p>
          </div>
        </div>
      </div>

            <div className="flex flex-col w-full h-max md:h-full md:w-1/2 bg-obsidian border border-gridLine p-8 lg:p-12 relative md:overflow-y-auto flex-shrink-0 md:flex-shrink" style={{ scrollbarWidth: 'none' }}>
        <button onClick={onClose} className="absolute top-4 right-4 text-ghost hover:text-[#A2FFA2] text-xs font-bold z-20 hidden md:block">CLOSE X</button>
        
        <h3 className="text-[#A2FFA2] text-xs font-bold tracking-widest uppercase mb-8 mt-4 md:mt-0">
          JOURNEY LOG: HARDWARE & SOFTWARE
        </h3>

        <div className="space-y-8">
          {timelineEvents.map((ev, i) => (
            <div key={i} className="border-l-2 border-[#A2FFA2]/30 pl-6 relative">
              <div className="absolute top-0 -left-[5px] w-2 h-2 bg-[#A2FFA2] rounded-full shadow-[0_0_10px_#A2FFA2]"></div>
              <div className="text-[10px] text-[#A2FFA2]/70 uppercase tracking-widest font-bold font-mono mb-1">{ev.year}</div>
              <div className="text-ghost font-bold text-lg mb-2">{ev.command}</div>
              <div className="text-sm text-ghost/70 font-sans font-light leading-relaxed break-words" style={{ hyphens: 'none', WebkitHyphens: 'none' }}>
                {ev.desc.split('Hand Gesture Control').map((part, index, array) => (
                  <React.Fragment key={index}>
                    {part}
                    {index !== array.length - 1 && (
                      <span className="relative inline-block text-white font-medium">
                        Hand Gesture Control
                        <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-[#A2FFA2] rounded-full animate-fast-pulse shadow-[0_0_8px_#A2FFA2]"></span>
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
