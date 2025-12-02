import React from 'react';

interface BackgroundMeshProps {
  isDarkMode: boolean;
}

export const BackgroundMesh: React.FC<BackgroundMeshProps> = ({ isDarkMode }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Blob 1: Top Left */}
      <div 
        className={`absolute top-0 -left-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob 
        ${isDarkMode ? 'bg-neon-purple' : 'bg-purple-300'}`}
      ></div>
      
      {/* Blob 2: Top Right */}
      <div 
        className={`absolute top-0 -right-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000
        ${isDarkMode ? 'bg-neon-cyan' : 'bg-cyan-300'}`}
      ></div>
      
      {/* Blob 3: Bottom Center */}
      <div 
        className={`absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000
        ${isDarkMode ? 'bg-neon-blue' : 'bg-blue-300'}`}
      ></div>

      {/* Grid overlay for sci-fi feel */}
      <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150`}></div>
    </div>
  );
};