import React from 'react';
import { BINX_LOGO } from '../constants';

const ContactFooter: React.FC = () => {
  return (
    <>
      <section className="py-24 bg-primary text-black relative border-t-4 border-black" id="book">
        <div className="container mx-auto px-6 text-center">

          <h4 className="text-6xl md:text-8xl font-display font-bold mb-8 text-stroke text-transparent tracking-wide hover:text-white transition-colors duration-500 cursor-default">
            LET'S COOK
          </h4>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 border-4 border-black shadow-hard-lg transform hover:-translate-y-1 transition-transform">
            <h5 className="font-display text-3xl mb-4">Got an Idea?</h5>
            <p className="font-body text-lg text-zinc-600 mb-8">
              Whether it's a gritty street shoot, an event, or you just want some fire pics for your socials. Hit me up. I don't bite.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <a href="tel:5200541377" className="w-full md:w-auto px-12 bg-zinc-100 text-black border-4 border-black py-4 rounded-xl font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-hard hover:shadow-hard-lg">
                  <span className="material-symbols-outlined">call</span>
                  520-054-1377
                </a>
              </div>

              <div className="pt-4 border-t-2 border-dashed border-zinc-200">
                <a href="https://discord.gg/GWpKVW3u6t" target="_blank" rel="noopener noreferrer" className="w-full bg-[#5865F2] text-white py-6 rounded-2xl font-bold text-xl hover:bg-[#4752C4] transition-all flex flex-col items-center justify-center gap-4 shadow-hard hover:shadow-hard-lg hover:-translate-y-1">
                  <div className="bg-white p-3 rounded-full border-2 border-black shadow-sm transform -rotate-6">
                    <img src={BINX_LOGO} alt="Binx Productions" className="w-12 h-12 object-contain" />
                  </div>
                  <span>Join Business Discord</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="py-8 bg-black text-white text-center">
        <p className="font-display text-sm tracking-widest">
          DAMON VOX © 2024 // LOS SANTOS ORIGINAL
        </p>
      </footer>
    </>
  );
};

export default ContactFooter;