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
                className={`px-6 py-2 rounded-lg font-bold text-sm border-2 transition-all ${activeFilter === filter
                    ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-hard'
                    : 'bg-transparent text-zinc-500 border-zinc-300 hover:border-black dark:border-zinc-700 hover:text-black dark:hover:text-white'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Revamped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative cursor-pointer ${photo.customClass || ''}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Image Card - Expanded Aesthetic */}
              <div className={`
                relative overflow-hidden rounded-2xl border-2 border-zinc-800 dark:border-zinc-700
                bg-zinc-900/40 backdrop-blur-xl transition-all duration-500
                hover:border-primary hover:shadow-glow hover:-translate-y-3
                ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0
              `}>
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    src={photo.src}
                  />

                  {/* Scanner / Glitch Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                    {/* Scanner Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/40 shadow-[0_0_15px_#FFC800] animate-[scan_2s_linear_infinite]"></div>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-full border border-primary/50 text-primary shadow-glow">
                      <span className="material-symbols-outlined text-4xl">zoom_in</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-1">Visual Record // {index + 1}</p>
                      <h4 className="font-display font-bold text-2xl dark:text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                        {photo.title}
                      </h4>
                    </div>
                    <div className="h-8 w-8 rounded bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                      <span className="material-symbols-outlined text-sm">north_east</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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