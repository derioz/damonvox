import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [glizzyPos, setGlizzyPos] = useState({ x: 0, y: 0 });
  const [isGlizzyHovered, setIsGlizzyHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseMove = (e: React.MouseEvent) => {
    setGlizzyPos({ x: e.clientX, y: e.clientY });
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b-2 border-transparent transition-all">
      <div
        onClick={scrollToTop}
        className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform group no-underline decoration-transparent"
      >
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
        <button className="px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-900 dark:text-zinc-100" onClick={() => scrollToSection('gallery')}>Photos</button>
        <button
          className="px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-900 dark:text-zinc-100 relative"
          onClick={() => scrollToSection('about')}
          onMouseEnter={() => setIsGlizzyHovered(true)}
          onMouseLeave={() => setIsGlizzyHovered(false)}
          onMouseMove={handleMouseMove}
        >
          His Glizzy Business
        </button>
        <Link to="/backstory" className="px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-zinc-900 dark:text-zinc-100">Backstory</Link>
        <button className="ml-4 px-6 py-2 rounded-full bg-primary text-black font-bold border-2 border-black shadow-hard hover:bg-white hover:shadow-hard-lg hover:-translate-y-0.5 transition-all" onClick={() => scrollToSection('book')}>
          Contact Damon
        </button>
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
          <button className="text-xl font-display font-bold text-black dark:text-white text-left" onClick={() => { scrollToSection('gallery'); setIsMenuOpen(false); }}>Photos</button>
          <button
            className="text-xl font-display font-bold text-black dark:text-white text-left"
            onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}
            onMouseEnter={() => setIsGlizzyHovered(true)}
            onMouseLeave={() => setIsGlizzyHovered(false)}
            onMouseMove={handleMouseMove}
          >
            His Glizzy Business
          </button>
          <Link to="/backstory" className="text-xl font-display font-bold text-black dark:text-white" onClick={() => setIsMenuOpen(false)}>Backstory</Link>
          <button className="bg-primary text-black px-4 py-3 text-center rounded-xl border-2 border-black font-bold uppercase shadow-hard" onClick={() => { scrollToSection('book'); setIsMenuOpen(false); }}>
            Contact Damon
          </button>
        </div>
      )}

      {/* Floating Glizzy */}
      {isGlizzyHovered && (
        <div
          className="fixed pointer-events-none z-[100] text-3xl animate-bounce-slow filter drop-shadow-lg"
          style={{
            left: glizzyPos.x + 20,
            top: glizzyPos.y + 20,
            transition: 'left 0.05s ease-out, top 0.05s ease-out'
          }}
        >
          🌭
        </div>
      )}
    </header>
  );
};

export default Header;