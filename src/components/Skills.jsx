import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Wrench, Terminal, Cpu as Microchip } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: <Terminal className="text-electricBlue" size={28} />,
    skills: ["C", "Python", "JavaScript"]
  },
  {
    title: "Web Development",
    icon: <Globe className="text-emerald-400" size={28} />,
    skills: ["HTML", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    title: "Robotics & Hardware",
    icon: <Cpu className="text-neonGreen" size={28} />,
    skills: ["Arduino", "Sensors", "Servo Motors", "Microcontrollers", "Circuit Design"]
  },
  {
    title: "Tools & Database",
    icon: <Wrench className="text-purple-400" size={28} />,
    skills: ["Git", "GitHub", "VS Code", "MySQL"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-darkBg">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <Microchip className="text-neonGreen mr-4" size={36} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">System<span className="text-electricBlue">.Skills</span></h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-electricBlue to-neonGreen rounded-full mb-6 shadow-glow-green"></div>
          <p className="text-slate-400 font-mono">Current technical loadout and hardware capabilities.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative group bg-darkCard/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 hover:border-electricBlue/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mr-5 group-hover:scale-110 group-hover:shadow-glow-blue transition-all">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-slate-900/80 border border-slate-700 text-slate-300 rounded-lg text-sm font-mono group-hover:border-electricBlue/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
