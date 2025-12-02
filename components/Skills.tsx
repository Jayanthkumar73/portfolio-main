import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  { 
    category: "Frontend", 
    items: [
      { name: "React", level: 80 },
      { name: "HTML", level: 87 },
      { name: "CSS", level: 70 },
      { name: "TypeScript", level: 60 },
      { name: "Next.js", level: 65 }
    ] 
  },
  { 
    category: "Backend", 
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "REST APIs", level: 80 }
    ] 
  },
  { 
    category: "Database", 
    items: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 82 },
      { name: "Firebase", level: 90 }
    ] 
  },
  { 
    category: "Languages & Tools", 
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 70 },
      { name: "Git", level: 92 },
      { name: "JavaScript", level: 80 },
      { name: "Selenium", level: 70 }
    ] 
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl mb-16 text-center text-gray-900 dark:text-white">
            TECH <span className="text-gradient-alt">PROFICIENCY</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((skillGroup, index) => (
            <ScrollReveal key={skillGroup.category} className={`delay-${index * 100}`}>
              <div className="glass-panel p-8 rounded-2xl h-full border border-gray-200 dark:border-white/5 relative group hover:border-neon-cyan/30 transition-colors bg-white/50 dark:bg-transparent">
                <h3 className="font-orbitron text-2xl font-bold text-neon-cyan mb-8 tracking-wide flex items-center">
                  <span className="w-2 h-8 bg-neon-purple mr-4 rounded-full"></span>
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-6">
                  {skillGroup.items.map(item => (
                    <div key={item.name}>
                      <div className="flex justify-between mb-2 font-outfit text-sm">
                        <span className="text-gray-900 dark:text-gray-200 font-medium">{item.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{item.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-1000 ease-out group-hover:scale-x-100 origin-left transform scale-x-0"
                          style={{ width: `${item.level}%`, transitionDelay: '300ms' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};