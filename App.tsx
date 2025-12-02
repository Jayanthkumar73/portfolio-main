import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { SelectedWorks } from './components/SelectedWorks';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { BackgroundMesh } from './components/BackgroundMesh';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync dark mode with HTML class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="relative min-h-screen w-full overflow-hidden selection:bg-neon-cyan selection:text-black">
      {/* Immersive Background */}
      <BackgroundMesh isDarkMode={isDarkMode} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <SelectedWorks />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Floating Chat Bot */}
      <ChatWidget />
    </div>
  );
};

export default App;