import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Rocket, Trophy, Youtube, TrendingUp } from 'lucide-react';

const timelineEvents = [
  {
    year: "Start",
    title: "Building the First Robot",
    description: "Built the 'Mini Robo' as my first dive into the world of electronics and motor control. Learned the fundamentals of assembling hardware.",
    icon: <Rocket className="text-white" size={20} />,
    color: "bg-electricBlue"
  },
  {
    year: "Competitions",
    title: "Playto Labs IIT National Robotics Competition",
    description: "Designed a 'Thief Detector Robot' focusing on sensor networks and logic execution. This project solidified my understanding of microcontrollers.",
    icon: <Trophy className="text-white" size={20} />,
    color: "bg-purple-500"
  },
  {
    year: "Expansion",
    title: "Complex Robotics & Automation",
    description: "Started building more complex systems with PID control (Line Followers) and color detection, pushing the limits of basic hardware.",
    icon: <TrendingUp className="text-white" size={20} />,
    color: "bg-neonGreen"
  },
  {
    year: "Present",
    title: "Documenting on YouTube",
    description: "Began recording and editing videos of my robotics builds. Sharing knowledge and execution logs globally through my YouTube channel.",
    icon: <Youtube className="text-white" size={20} />,
    color: "bg-red-500"
  }
];

export default function RoboticsJourney() {
  return (
    <section className="py-24 px-6 bg-[#030712] relative overflow-hidden border-t border-slate-800">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Flag className="text-neonGreen mr-4" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Robotics<span className="text-neonGreen">.Journey</span></h2>
          </div>
          <div className="w-24 h-1 bg-neonGreen mx-auto rounded-full mb-6 shadow-glow-green"></div>
          <p className="text-slate-400 font-mono">The roadmap of my hardware evolution.</p>
        </motion.div>

        <div className="relative border-l border-slate-700 ml-6 md:ml-12">
          {timelineEvents.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="mb-12 ml-10 relative group"
            >
              {/* Timeline dot/icon */}
              <span className={`absolute -left-[58px] flex items-center justify-center w-10 h-10 rounded-full ${event.color} ring-4 ring-[#030712] shadow-lg group-hover:scale-110 transition-transform duration-300 z-10`}>
                {event.icon}
              </span>

              {/* Content Card */}
              <div className="bg-darkCard p-6 md:p-8 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors shadow-lg">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2 block">
                  Phase: {event.year}
                </span>
                <h3 className="flex items-center text-xl md:text-2xl font-bold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-slate-400 font-mono text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
