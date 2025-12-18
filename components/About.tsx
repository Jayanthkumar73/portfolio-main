import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <ScrollReveal>
            <div className="relative">
              <div className="glass-panel p-8 rounded-3xl border-l-4 border-neon-cyan relative z-10 bg-white/50 dark:bg-transparent">

                {/* Profile Photo */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 group">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                    {/* Image */}
                    <img
                      src="/image1.jpeg"
                      alt="Jayanth Kumar"
                      className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h2 className="font-orbitron font-bold text-4xl mb-6 text-gray-900 dark:text-white text-center md:text-left">ABOUT <span className="text-gradient">ME</span></h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 font-outfit text-lg leading-relaxed text-center md:text-left">
                  <p>
                    I'm a Computer Science student at <strong className="text-black dark:text-white">SRM University, Andhra Pradesh</strong>, with a passion for building intelligent systems that make a difference.
                  </p>
                  <p>
                    My journey in tech began with curiosity and has evolved into a mission to build applications that solve real-world problems. I specialize in modern web technologies and continuously adapt to the latest industry trends.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="glass-panel p-4 rounded-xl text-center bg-white/60 dark:bg-white/5">
                    <div className="text-3xl font-orbitron font-bold text-neon-purple mb-1">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl text-center bg-white/60 dark:bg-white/5">
                    <div className="text-3xl font-orbitron font-bold text-neon-blue mb-1">Fresh</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Talent</div>
                  </div>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-neon-purple/20 rounded-3xl -z-10"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="delay-200">
            <div className="grid grid-cols-2 gap-6">
              {['React', 'TypeScript', 'Node.js', 'Express', 'UI/UX', 'Git'].map((skill, i) => (
                <div key={skill} className="glass-panel p-6 rounded-2xl flex items-center justify-center hover:border-neon-cyan/50 transition-colors group bg-white/40 dark:bg-white/5">
                  <span className="font-orbitron font-bold text-gray-600 dark:text-gray-400 group-hover:text-neon-cyan transition-colors">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-gray-200 dark:border-white/10">
              <h3 className="font-orbitron font-bold text-xl mb-2 text-gray-900 dark:text-white">Current Status</h3>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-gray-700 dark:text-gray-300">Open to new opportunities & internships</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};