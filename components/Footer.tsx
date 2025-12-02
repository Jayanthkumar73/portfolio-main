import React from 'react';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-10 px-6 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-outfit">
        <p>&copy; {new Date().getFullYear()} Jayanth Kumar. Built with React .</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-neon-cyan transition-colors cursor-pointer">HOME</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-neon-cyan transition-colors cursor-pointer">PROJECTS</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-neon-cyan transition-colors cursor-pointer">CONTACT</a>
        </div>
      </div>
    </footer>
  );
};