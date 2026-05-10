import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="relative min-h-screen bg-(--bg) text-(--text) overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Dynamic Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-indigo-500/4 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/3 blur-[180px] rounded-full"></div>
      </div>

      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Education />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
