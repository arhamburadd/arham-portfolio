import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact({ addLog, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    addLog("Initiating heavily encrypted transmission protocol...");

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '58ba0fa4-03be-4abc-a483-18d8ce5e4d54');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        addLog("Transmission successful. Handshake closed.");
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        addLog("Transmission failed. Handshake refused.");
      }
    } catch (error) {
      addLog("Network error. Sub-routing failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-24 bottom-24 left-8 md:left-24 right-8 md:right-24 pointer-events-auto flex flex-col md:flex-row shadow-[0_0_50px_rgba(204,255,0,0.05)] backdrop-blur-md overflow-hidden"
    >
      {/* Left side dynamic text block */}
      <div className="hidden md:flex flex-col justify-center w-1/2 p-12 bg-obsidian border border-gridLine border-r-0 relative overflow-hidden">
        <h2 className="text-6xl lg:text-8xl font-sans font-black tracking-tighter text-ghost mb-6 leading-none">
          LET'S <br/> BUILD.
        </h2>
        <p className="text-lime text-xs font-mono tracking-widest uppercase mb-4 max-w-sm">
           Ready to engineer the future. Looking for opportunities in robotics, firmware, and software engineering.
        </p>
        <p className="text-ghost/50 text-sm font-sans font-light max-w-sm">
           Drop your details in the transmission form and I will get back to you as soon as possible.
        </p>
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex flex-col bg-cyberGray border border-gridLine overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
        <div className="flex justify-between items-center p-4 border-b border-gridLine bg-obsidian z-10 sticky top-0">
          <span className="text-lime text-xs font-bold tracking-widest uppercase">Contact Form</span>
          <button onClick={onClose} className="text-ghost hover:text-lime text-xs font-bold">CLOSE X</button>
        </div>

        <div className="p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-[10px] text-lime mb-2 tracking-widest uppercase">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-obsidian border border-gridLine text-ghost text-sm p-4 focus:outline-none focus:border-lime transition-colors cursor-none rounded-none"
                placeholder="Your name..."
                autoComplete="off"
              />
            </div>
            
            <div>
              <label className="block text-[10px] text-lime mb-2 tracking-widest uppercase">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-obsidian border border-gridLine text-ghost text-sm p-4 focus:outline-none focus:border-lime transition-colors cursor-none rounded-none"
                placeholder="Your email..."
                autoComplete="off"
              />
            </div>

            <div>
              <label className="block text-[10px] text-lime mb-2 tracking-widest uppercase">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-obsidian border border-gridLine text-ghost text-sm p-4 focus:outline-none focus:border-lime transition-colors cursor-none resize-none rounded-none"
                placeholder="Project details..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting || isSubmitted}
              className="w-full bg-lime text-obsidian text-sm font-bold tracking-widest uppercase py-5 px-6 hover:bg-white transition-colors disabled:opacity-50 cursor-none mt-4"
            >
              {isSubmitting ? 'SENDING...' : isSubmitted ? 'MESSAGE SENT' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
