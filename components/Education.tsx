import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
              ACADEMIC <span className="text-gradient-alt">JOURNEY</span>
            </h2>
            <div className="h-1 w-24 bg-neon-cyan rounded-full mx-auto"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-white/10 relative overflow-hidden group bg-white/50 dark:bg-transparent">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/20 rounded-bl-full filter blur-2xl transition-all duration-500 group-hover:bg-neon-blue/30"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-gray-900 dark:text-white mb-2">B.Tech in Computer Science & Engineering</h3>
                <div className="text-neon-cyan font-outfit text-lg">SRM University, Andhra Pradesh</div>
              </div>
              <div className="mt-4 md:mt-0 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-bold tracking-wider text-gray-700 dark:text-gray-300">
                2022 — Present
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed font-outfit max-w-2xl">
              Building a strong foundation in computer science principles while specializing in full-stack development and modern web architectures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Full Stack Development", "Machine Learning", "Database Management", "Software Engineering"].map((focus) => (
                <div key={focus} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300 font-outfit">{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};