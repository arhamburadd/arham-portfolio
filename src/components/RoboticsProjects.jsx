import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Cpu, Cpu as Microchip, Zap, Eye, Navigation, Watch, Trash2, Box } from 'lucide-react';

const roboticsProjects = [
  {
    title: "Mini Robo",
    description: "One of my first dives into robotics! I built this small guy to learn the basics of motor control and movement. It's simple, but seeing it drive around for the first time was incredibly rewarding.",
    videoId: "V3DdkZ3DE8k",
    icon: <Microchip className="text-electricBlue" />
  },
  {
    title: "Thief Detector Robot",
    description: "I designed this project for the Playto Labs IIT National Robotics Competition. It uses a network of sensors to detect intruders and instantly triggers an alert system. It was a great challenge in combining hardware reliability with fast logic.",
    videoId: "dk8oQiR5sJQ",
    icon: <Eye className="text-red-500" />
  },
  {
    title: "Smart Dustbin",
    description: "A fun and practical weekend build. I hooked up an ultrasonic sensor to a servo motor so the lid pops open automatically when you go to throw something away. Small quality-of-life improvements are the best!",
    videoId: "vRh5scW5Eeo",
    icon: <Trash2 className="text-neonGreen" />
  },
  {
    title: "Obstacle Avoider Robot",
    description: "An autonomous rover that thinks on its feet. Whenever it senses a wall or an object in its path, it calculates a new route to keep moving without crashing. It really opened my eyes to writing logic for autonomous systems.",
    videoId: "Hy_XLyGbFxQ",
    icon: <Navigation className="text-purple-400" />
  },
  {
    title: "LCD Display Project",
    description: "My introduction to digital interfaces. I wired up a standard LCD to a microcontroller and wrote the code to display real-time text and sensor readings. It sounds simple, but getting the I2C communication right was a great learning curve.",
    videoId: "X4tmy28xi6Q",
    icon: <Watch className="text-electricBlue" />
  },
  {
    title: "PIR Security System",
    description: "A customized motion-detection system built around a PIR sensor. It accurately detects human movement and flags it. It's similar to the tech used in commercial home security systems, but built from scratch.",
    videoId: "BGtAsVtXg8U",
    icon: <Zap className="text-yellow-400" />
  },
  {
    title: "Colour Sorter Robot",
    description: "One of my most visually interesting projects. It uses a color sensor to identify objects and then mechanically sorts them into different bins based on their color. The timing between the sensor reading and the motor sorting had to be perfect.",
    videoId: "nJ4fsyf7aVU",
    icon: <Box className="text-pink-400" />
  },
  {
    title: "Line Follower Robot",
    description: "Built for robotics challenges, this robot uses IR sensors to track and follow a complex path. I also programmed it to handle ball-based tasks (like picking up 30, 50, or 80 balls) right on the track. It required a lot of fine-tuning of the PID controller!",
    videoId: "XYLNwzO__OM",
    icon: <Cpu className="text-emerald-400" />
  }
];

export default function RoboticsProjects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Close modal when clicking outside
  const handleModalBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedVideo(null);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-darkBg relative">
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-electricBlue/5 mix-blend-screen blur-[100px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <Cpu className="text-electricBlue mr-4" size={36} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Hardware<span className="text-neonGreen">.Deployments</span></h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-electricBlue to-neonGreen rounded-full mb-6 shadow-glow-blue"></div>
          <p className="text-slate-400 font-mono">Physical engineering projects. Click any module to view execution logs (video).</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {roboticsProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-darkCard border border-slate-800 hover:border-electricBlue/40 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-electricBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row h-full">
                {/* Video Thumbnail Area */}
                <div 
                  className="w-full sm:w-2/5 aspect-video sm:aspect-auto bg-slate-900 border-b sm:border-b-0 sm:border-r border-slate-800 relative cursor-pointer group-hover:border-electricBlue/40 transition-colors flex items-center justify-center overflow-hidden"
                  onClick={() => setSelectedVideo(project.videoId)}
                >
                  {/* YouTube Thumbnail image (maxresdefault often exists, but hqdefault is safer) */}
                  <img 
                    src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-105 group-hover:scale-100"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-slate-900/80 border border-electricBlue/50 text-electricBlue flex items-center justify-center shadow-lg group-hover:shadow-glow-blue group-hover:scale-110 group-hover:bg-electricBlue group-hover:text-darkBg transition-all duration-300 backdrop-blur-sm">
                    <Play fill="currentColor" size={24} className="ml-1" />
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-slate-800/50 rounded-lg mr-3 shadow-inner">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-electricBlue group-hover:to-neonGreen transition-all">{project.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mt-2 font-mono">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalBackgroundClick}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-darkBg/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black shadow-[0_0_50px_rgba(0,243,255,0.2)] border border-slate-800"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-slate-900/80 hover:bg-red-500/20 text-slate-400 hover:text-red-500 rounded-full transition-colors backdrop-blur-sm"
              >
                <X size={24} />
              </button>

              <div className="aspect-video w-full bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
