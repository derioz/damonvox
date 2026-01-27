import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b-2 border-transparent transition-all">
      <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform group">
        {/* Styled Logo Icon */}
        <div className="bg-primary text-black p-1.5 rounded-lg border-2 border-black shadow-sm transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
           <span className="material-symbols-outlined text-xl font-bold">photo_camera</span>
        </div>
        {/* Styled Text Logo */}
        <div className="text-2xl font-display font-black text-black dark:text-white tracking-tighter leading-none">
          DAMON<span className="text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:drop-shadow-none">VOX</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-2 font-bold text-sm uppercase items-center">
        <a className="px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-900 dark:text-zinc-100" href="#gallery">Photos</a>
        <a className="px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-900 dark:text-zinc-100" href="#about">Vibe Check</a>
        <a className="ml-4 px-6 py-2 rounded-full bg-primary text-black font-bold border-2 border-black shadow-hard hover:bg-white hover:shadow-hard-lg hover:-translate-y-0.5 transition-all" href="#book">
          Contact Damon
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden bg-black text-white p-2 rounded-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-b-4 border-black p-6 flex flex-col space-y-4 md:hidden shadow-2xl animate-float">
           <a className="text-xl font-display font-bold text-black dark:text-white" href="#gallery" onClick={() => setIsMenuOpen(false)}>Photos</a>
           <a className="text-xl font-display font-bold text-black dark:text-white" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
           <a className="bg-primary text-black px-4 py-3 text-center rounded-xl border-2 border-black font-bold uppercase shadow-hard" href="#book" onClick={() => setIsMenuOpen(false)}>
             Contact Damon
           </a>
        </div>
      )}
    </header>
  );
};

export default Header;