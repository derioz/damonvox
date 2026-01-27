import React, { useState } from 'react';
import { GALLERY_PHOTOS, BINX_LOGO } from '../constants';
import { Photo } from '../types';

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'NEON', 'PORTRAIT', 'STREET', 'FUN'];

  return (
    <section className="py-24 px-4 bg-background-light dark:bg-background-dark relative" id="gallery">
      {/* Subtle Background Branding */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none transform rotate-12">
        <img src={BINX_LOGO} className="w-96 h-96 grayscale" alt="watermark" />
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* Binx Productions Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative group cursor-default">
             <img 
               src={BINX_LOGO} 
               alt="Binx Productions Logo" 
               className="w-48 md:w-64 h-auto object-contain drop-shadow-lg mb-6 hover:scale-105 transition-transform duration-300" 
             />
             <div className="absolute -top-4 -right-8 bg-primary text-black font-bold text-xs px-2 py-1 rotate-12 shadow-hard border border-black">
                EST. 2024
             </div>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl text-zinc-900 dark:text-white uppercase tracking-tight leading-none mb-2">
            Binx<span className="text-primary">.Productions</span>
          </h2>
          <p className="text-zinc-500 font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-8">
            Official Portfolio // Visuals // Los Santos
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg font-bold text-sm border-2 transition-all ${
                  activeFilter === filter
                    ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-hard'
                    : 'bg-transparent text-zinc-500 border-zinc-300 hover:border-black dark:border-zinc-700 hover:text-black dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Fun Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`group relative cursor-pointer ${photo.customClass || ''}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Image Card */}
              <div className={`
                bg-white dark:bg-zinc-800 p-3 rounded-xl border-4 border-black dark:border-zinc-700 shadow-hard
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-hard-lg hover:rotate-0
                ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
              `}>
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 relative">
                  <img 
                    alt={photo.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={photo.src} 
                  />
                  {/* Hover Overlay Text */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <img src={BINX_LOGO} className="w-12 h-12 opacity-80 invert" alt="mini logo" />
                    <span className="font-display text-white text-xl tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      VIEW SHOT
                    </span>
                  </div>
                </div>
                
                <div className="pt-4 pb-2 px-2 flex justify-between items-center">
                   <div>
                     <h4 className="font-display font-bold text-lg truncate pr-2 dark:text-white">{photo.title}</h4>
                     <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Binx Prod.</p>
                   </div>
                   <span className="material-symbols-outlined text-black dark:text-white bg-primary rounded-lg p-1 border-2 border-black text-sm group-hover:bg-white transition-colors">
                     visibility
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Simple Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors flex items-center gap-2 group"
              onClick={() => setSelectedPhoto(null)}
            >
              <span className="font-bold uppercase text-sm tracking-widest group-hover:underline">Close</span>
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            
            <div className="relative w-full">
                <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg border-2 border-zinc-800 shadow-2xl bg-black"
                />
                
                {/* Watermark in lightbox */}
                <div className="absolute bottom-4 right-4 opacity-50">
                    <img src={BINX_LOGO} alt="watermark" className="w-16 h-16 invert drop-shadow-md" />
                </div>
            </div>
            
            <div className="mt-6 flex flex-col items-center text-white">
              <h3 className="font-display text-3xl">{selectedPhoto.title}</h3>
              <p className="text-zinc-400 text-sm uppercase tracking-widest mt-1">Captured by Binx Productions</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;