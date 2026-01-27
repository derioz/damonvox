import React, { useState } from 'react';
import { GLIZZY_LOGO } from '../constants';

const MENU_URL = "https://r2.fivemanage.com/image/LfhflKipjgN8.png";

const QuoteSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-zinc-900 border-y-4 border-black dark:border-zinc-700">
      
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-primary rounded-3xl p-8 md:p-12 shadow-hard-lg border-4 border-black relative transform rotate-1">
          
          {/* Decorative Pin */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-black shadow-sm z-20"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Logo/Badge */}
            <div className="w-full lg:w-1/4 flex flex-col items-center">
              <div className="bg-white p-6 rounded-full border-4 border-black shadow-hard rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
                <img 
                  src={GLIZZY_LOGO} 
                  alt="Damon's Glizzys Logo" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="mt-6 bg-black text-white px-4 py-1 rounded-full text-sm font-bold rotate-2">
                ★★★★★ RATED
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/4 text-center lg:text-left text-black">
              <span className="font-display text-xl uppercase tracking-wider mb-2 block opacity-70">Current Obsession</span>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                "Wait, you haven't tried the Glizzy?"
              </h3>
              <p className="font-bold text-lg mb-6 leading-relaxed">
                Look, I don't just shoot photos. I eat. And this spot right here? It's the fuel. The aesthetic is greasy, the neon is flickering, and the vibe is unmatched.
              </p>
              
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border-2 border-black font-bold text-sm">
                <span className="material-symbols-outlined text-red-500">local_shipping</span>
                Mobile Stand // Roaming Los Santos
              </div>
            </div>

            {/* Menu Preview */}
            <div className="w-full lg:w-1/4 flex flex-col items-center relative group cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                <div className="absolute inset-0 bg-black rounded-xl transform rotate-6 translate-x-2 translate-y-2 transition-transform group-hover:rotate-12"></div>
                <div className="relative bg-white p-2 rounded-xl border-4 border-black transform rotate-3 transition-transform group-hover:rotate-6 group-hover:-translate-y-2 overflow-hidden w-48 aspect-[3/4]">
                   <img src={MENU_URL} alt="Glizzy Menu" className="w-full h-full object-cover blur-[0.5px] group-hover:blur-0 transition-all" />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent">
                      <span className="bg-black text-white px-3 py-1 font-display text-lg -rotate-12 border-2 border-white shadow-lg group-hover:scale-110 transition-transform">
                        PEEP THE MENU
                      </span>
                   </div>
                </div>
                {/* Tape visual */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 border-l border-r border-white/60 rotate-[-5deg] backdrop-blur-sm z-20"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Menu Lightbox */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative max-w-2xl w-full h-full max-h-[90vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-4xl">cancel</span>
            </button>
            
            <img 
              src={MENU_URL} 
              alt="Full Menu"
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default QuoteSection;