import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ScrollReveal } from './ScrollReveal';

const projects: Project[] = [
  {
    id: '1',
    title: 'Asset Management System',
    description: 'A comprehensive solution to efficiently track and manage organizational assets, featuring assignment tracking, categorization, and history logging.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', // Data dashboard placeholder
    demoUrl: 'https://asset-management-azure-two.vercel.app/',
    repoUrl: 'https://github.com/Jayanthkumar73/Asset-Management',
    color: 'cyan'
  },
  {
    id: '2',
    title: 'Car Rental Application',
    description: 'A seamless car rental platform offering user profile management, vehicle browsing, booking capability, and integrated secure payments via Razorpay.',
    techStack: ['React.js', 'Firebase', 'Firestore', 'Razorpay'],
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop', // Car placeholder
    demoUrl: 'https://carrental-gamma-self.vercel.app/',
    repoUrl: 'https://github.com/Jayanthkumar73/Carrental',
    color: 'purple'
  },
  {
    id: '3',
    title: 'Twitter Sentiment Analysis',
    description: 'Machine Learning model utilizing Scikit-learn and TF-IDF to analyze and classify the sentiment of Twitter data for trend prediction.',
    techStack: ['Python', 'ML', 'Scikit-learn', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop', // Social media placeholder
    demoUrl: '#',
    repoUrl: 'https://github.com/Jayanthkumar73/twitter_sentimental_analysis',
    color: 'blue'
  },
  {
    id: '4',
    title: 'Student Portal',
    description: 'An academic management portal allowing students to access course materials, grades, and schedules with a responsive React frontend.',
    techStack: ['React.js', 'JSON Server', 'CSS3'],
    image: '/student-portal.png',
    demoUrl: '#',
    repoUrl: 'https://github.com/Jayanthkumar73/student-portal',
    color: 'cyan'
  },
  {
    id: '5',
    title: 'Online Voting System',
    description: 'Secure voting platform built with PHP and MySQL, focusing on data integrity and user authentication for fair election processes.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    image: '/voting-system.png',
    demoUrl: '#',
    repoUrl: 'https://github.com/Jayanthkumar73/Online-voting-system',
    color: 'purple'
  }
];

export const SelectedWorks: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-orbitron font-bold text-4xl md:text-6xl mb-4 text-gray-900 dark:text-white">
                FEATURED <span className="text-gradient">WORKS</span>
              </h2>
              <div className="h-1 w-24 bg-neon-purple rounded-full"></div>
            </div>
            <p className="font-outfit text-gray-600 dark:text-gray-400 mt-4 md:mt-0 max-w-md text-right">
              Applying modern technology to solve real-world problems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} className={`delay-${index * 100}`}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};