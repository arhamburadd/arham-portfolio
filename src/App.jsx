import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import RoboticsJourney from './components/RoboticsJourney';
import RoboticsProjects from './components/RoboticsProjects';
import SoftwareProjects from './components/SoftwareProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col pt-16 bg-darkBg selection:bg-electricBlue/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <RoboticsJourney />
        <RoboticsProjects />
        <SoftwareProjects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
