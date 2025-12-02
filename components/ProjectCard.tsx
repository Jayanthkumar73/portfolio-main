import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden group hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-cyan/10 h-full flex flex-col bg-white/50 dark:bg-transparent">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
           <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             {project.demoUrl && (
               <a href={project.demoUrl} className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-neon-cyan transition-colors">
                 Live Demo
               </a>
             )}
             {project.repoUrl && (
               <a href={project.repoUrl} className="px-6 py-2 glass-panel text-white font-bold rounded-full hover:bg-white/20 transition-colors">
                 Code
               </a>
             )}
           </div>
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        {/* Updated title color for light mode */}
        <h3 className="font-orbitron text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-neon-cyan dark:group-hover:text-neon-cyan transition-colors">
          {project.title}
        </h3>
        
        {/* Updated description color for light mode: text-gray-700 instead of text-gray-400 */}
        <p className="text-gray-700 dark:text-gray-400 mb-6 font-outfit leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-bold rounded-full border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 bg-white/40 dark:bg-white/5 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};