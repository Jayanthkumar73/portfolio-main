import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Creative Coder",
    "Problem Solver"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    // Set interval to 2000ms (2 seconds) for each role as requested
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center z-10 flex flex-col items-center">
        <ScrollReveal>
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-orbitron tracking-widest uppercase animate-pulse">
            System Online
          </div>
        </ScrollReveal>

        <ScrollReveal className="delay-100">
          <h2 className="font-outfit text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2">Hello, I am</h2>
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-none text-gray-900 dark:text-white">
            JAYANTH <span className="text-gradient">KUMAR</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal className="delay-200">
          <div className="h-12 md:h-16 overflow-hidden mb-6 w-full">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${roleIndex * 100}%)` }}
            >
              {roles.map((role, idx) => (
                <div key={idx} className="h-12 md:h-16 flex items-center justify-center">
                  {/* Added whitespace-nowrap to ensure text stays on one line and doesn't disappear */}
                  <span className="font-orbitron text-2xl md:text-4xl text-neon-purple font-bold whitespace-nowrap">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="delay-300">
          <p className="font-outfit text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative digital experiences that blend cutting-edge technology with beautiful design. Let's build the future together.
          </p>
        </ScrollReveal>

        <ScrollReveal className="delay-300">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold tracking-wider overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all hover:scale-105 min-w-[200px] cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              VIEW MY WORK
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-8 py-4 glass-panel rounded-lg text-gray-900 dark:text-white font-bold tracking-wider hover:bg-black/5 dark:hover:bg-white/10 transition-all hover:scale-105 border border-gray-300 dark:border-white/20 min-w-[200px] cursor-pointer"
            >
              GET IN TOUCH
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};