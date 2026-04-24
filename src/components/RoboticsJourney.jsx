import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: "Start",
    title: "Building the First Robot",
    description: "Built the 'Mini Robo' as my first dive into the world of electronics and motor control. Learned the fundamentals of assembling hardware.",
  },
  {
    year: "Competitions",
    title: "Playto Labs IIT National Robotics Competition",
    description: "Designed a 'Thief Detector Robot' focusing on sensor networks and logic execution. This project solidified my understanding of microcontrollers.",
  },
  {
    year: "Expansion",
    title: "Complex Robotics & Automation",
    description: "Started building more complex systems with PID control (Line Followers) and color detection, pushing the limits of basic hardware.",
  },
  {
    year: "Present",
    title: "Documenting on YouTube",
    description: "Began recording and editing videos of my robotics builds. Sharing knowledge and execution logs globally through my YouTube channel.",
  }
];

export default function RoboticsJourney() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background text-foreground border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
            JOURNEY
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-accent mx-auto md:mx-0"></div>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-8 pl-8 md:pl-16 space-y-20">
          {timelineEvents.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 rounded-full bg-surface border-2 border-primary z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-surfaceLight border border-border text-primary font-medium tracking-widest text-xs uppercase rounded-full">
                  {event.year}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl bg-surface/50 p-6 rounded-2xl border border-border/50">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
