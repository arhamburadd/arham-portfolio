import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = [
  {
    id: "RBT-01",
    title: "Mini Robo",
    description: "One of my first dives into robotics! I built this small guy to learn the basics of motor control and movement. It's simple, but seeing it drive around for the first time was incredibly rewarding.",
    type: "HARDWARE",
    videoId: "V3DdkZ3DE8k"
  },
  {
    id: "RBT-02",
    title: "Thief Detector Robot",
    description: "I designed this project for the Playto Labs IIT National Robotics Competition. It uses a network of sensors to detect intruders and instantly triggers an alert system. It was a great challenge in combining hardware reliability with fast logic.",
    type: "HARDWARE",
    videoId: "dk8oQiR5sJQ"
  },
  {
    id: "RBT-03",
    title: "Smart Dustbin",
    description: "A fun and practical weekend build. I hooked up an ultrasonic sensor to a servo motor so the lid pops open automatically when you go to throw something away. Small quality-of-life improvements are the best!",
    type: "HARDWARE",
    videoId: "vRh5scW5Eeo"
  },
  {
    id: "RBT-04",
    title: "Obstacle Avoider Robot",
    description: "An autonomous rover that thinks on its feet. Whenever it senses a wall or an object in its path, it calculates a new route to keep moving without crashing. It really opened my eyes to writing logic for autonomous systems.",
    type: "HARDWARE",
    videoId: "Hy_XLyGbFxQ"
  },
  {
    id: "RBT-05",
    title: "LCD Display Project",
    description: "My introduction to digital interfaces. I wired up a standard LCD to a microcontroller and wrote the code to display real-time text and sensor readings. It sounds simple, but getting the I2C communication right was a great learning curve.",
    type: "HARDWARE",
    videoId: "X4tmy28xi6Q"
  },
  {
    id: "RBT-06",
    title: "PIR Security System",
    description: "A customized motion-detection system built around a PIR sensor. It accurately detects human movement and flags it. It's similar to the tech used in commercial home security systems, but built from scratch.",
    type: "HARDWARE",
    videoId: "BGtAsVtXg8U"
  },
  {
    id: "RBT-07",
    title: "Colour Sorter Robot",
    description: "One of my most visually interesting projects. It uses a color sensor to identify objects and then mechanically sorts them into different bins based on their color. The timing between the sensor reading and the motor sorting had to be perfect.",
    type: "HARDWARE",
    videoId: "nJ4fsyf7aVU"
  },
  {
    id: "RBT-08",
    title: "Line Follower Robot",
    description: "Built for robotics challenges, this robot uses IR sensors to track and follow a complex path. I also programmed it to handle ball-based tasks (like picking up 30, 50, or 80 balls) right on the track. It required a lot of fine-tuning of the PID controller!",
    type: "HARDWARE",
    videoId: "XYLNwzO__OM"
  },
  {
    id: "SFT-01",
    title: "Olympiad Conduction System",
    description: "A comprehensive system designed to help conduct and manage Olympiad competitions securely and easily, including full participant data management. Built for reliability.",
    type: "SOFTWARE",
    videoId: ""
  }
];

export default function RoboticsProjects({ addLog, onClose }) {
  const [selectedPacket, setSelectedPacket] = useState(null);

  const handleSelect = (packet) => {
    setSelectedPacket(packet);
    addLog(`Viewing project specifications: ${packet.title}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-24 left-8 md:left-24 right-8 md:right-24 bottom-24 bg-cyberGray/80 border border-gridLine pointer-events-auto flex flex-col shadow-[0_0_50px_rgba(204,255,0,0.05)] backdrop-blur-xl overflow-hidden"
    >
      <div className="flex justify-between items-center p-3 border-b border-gridLine bg-obsidian z-20">
        <span className="text-lime text-xs font-bold tracking-widest uppercase">Project Archive</span>
        <div className="flex gap-4 items-center">
          <a href="/Resume.pdf" download className="border border-lime text-lime px-4 py-1.5 hover:bg-lime hover:text-obsidian transition-colors text-xs font-bold tracking-widest flex items-center gap-2 cursor-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            DOWNLOAD RESUME
          </a>
          <button onClick={onClose} className="text-ghost hover:text-lime text-xs font-bold">CLOSE X</button>
        </div>
      </div>

      <div className="p-4 md:p-8 overflow-y-auto flex-grow relative z-10" style={{ scrollbarWidth: 'none' }}>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
           {allProjects.map((p, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.05 }}
               onClick={() => handleSelect(p)}
               className={`border border-gridLine bg-obsidian hover:border-lime cursor-none group transition-colors flex flex-col justify-between min-h-[160px] relative overflow-hidden`}
             >
                              {p.videoId && (
                 <div 
                   className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-60 transition-opacity z-0" 
                   style={{ backgroundImage: `url(https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg)` }}
                 />
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent z-10 pointer-events-none"></div>
               
               <div className="flex justify-between items-start mb-4 relative z-20 p-4 pb-0">
                 <span className="text-lime text-[10px] tracking-widest border border-lime/30 px-1 bg-obsidian/80 backdrop-blur-sm">{p.type}</span>
                 <span className="text-ghost/80 font-mono text-[10px] tracking-widest cursor-text select-none bg-obsidian/80 backdrop-blur-sm px-1">{p.id}</span>
               </div>
               
               <div className="relative z-20 p-4 pt-0 mt-auto">
                 <h3 className="text-ghost font-bold tracking-tight group-hover:text-lime">
                   {p.title}
                 </h3>
               </div>
             </motion.div>
           ))}
        </div>
      </div>

            <AnimatePresence>
        {selectedPacket && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-obsidian/80 p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-cyberGray border border-lime w-full max-w-4xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.2)] flex flex-col lg:flex-row gap-8"
            >
              <button 
                onClick={() => { setSelectedPacket(null); addLog("Closed project specifications."); }}
                className="absolute top-4 right-4 text-ghost hover:text-lime text-xs z-10 bg-obsidian/50 px-2 rounded"
              >
                CLOSE X
              </button>
              
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="mb-6 border-b border-gridLine pb-4">
                   <span className="text-lime text-[10px] tracking-widest uppercase mb-2 block">{selectedPacket.type} PROTOTYPE</span>
                   <h2 className="text-3xl font-sans font-black tracking-tighter text-ghost">
                     {selectedPacket.title}
                   </h2>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-sm text-ghost/80 leading-relaxed font-sans font-light"
                >
                  {selectedPacket.description}
                </motion.p>
              </div>

                            {selectedPacket.videoId && (
                <div className="lg:w-1/2 aspect-video bg-obsidian border border-gridLine relative group flex-shrink-0">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${selectedPacket.videoId}?autoplay=0&rel=0`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
