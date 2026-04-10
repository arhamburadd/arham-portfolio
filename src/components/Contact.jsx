import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Youtube, CheckCircle, Terminal } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        console.error('Submission failed', data);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-darkBg border-t border-slate-800 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Terminal className="text-electricBlue mr-4" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">System<span className="text-electricBlue">.Ping</span></h2>
          </div>
          <div className="w-24 h-1 bg-electricBlue mx-auto rounded-full mb-6 shadow-glow-blue"></div>
          <p className="text-slate-400 font-mono">Establish a connection or initiate a collaboration protocol.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-[#0A1220] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 bg-[#050B14] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electricBlue rounded-full mix-blend-screen filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 font-mono tracking-widest text-electricBlue">CONNECTION_INFO</h3>
              <p className="text-slate-400 mb-12 font-mono text-sm leading-relaxed">
                &gt; Currently monitoring network for new opportunities.
                <br />&gt; Ping my system to collaborate on hardware or software architectures.
              </p>
              
              <div className="space-y-6">
                <a href="https://github.com/arhamburadd" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mr-4 group-hover:border-electricBlue/50 transition-colors">
                    <Github size={20} />
                  </div>
                  <span className="font-mono text-sm">github.com/arhamburadd</span>
                </a>
                
                <a href="https://www.youtube.com/@roboarhamburad4813" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mr-4 group-hover:border-red-500/50 transition-colors text-red-400">
                    <Youtube size={20} />
                  </div>
                  <span className="font-mono text-sm">Robotics Channel Ping</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-3 p-10 bg-darkCard/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Input_Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-900/50 text-white focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                    placeholder="Robo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Input_Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-900/50 text-white focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all"
                    placeholder="Robo@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-500 mb-2">String_Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-900/50 text-white focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className="flex items-center justify-center w-full px-8 py-4 bg-electricBlue/10 hover:bg-electricBlue text-electricBlue hover:text-darkBg border border-electricBlue rounded-lg transition-all font-bold tracking-widest shadow-[inset_0_0_15px_rgba(0,243,255,0.2)] hover:shadow-glow-blue disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></span>
                    TRANSMITTING...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} className="mr-2" />
                    TRANSMISSION SENT
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    EXECUTE TRANSMISSION
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
