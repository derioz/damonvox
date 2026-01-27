import React from 'react';

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

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="mailto:vox@lsmail.rp" className="flex-1 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                Email Me
              </a>
              <a href="tel:5550199" className="flex-1 bg-zinc-100 text-black border-2 border-black py-4 rounded-xl font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">call</span>
                555-0199
              </a>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-dashed border-zinc-300 flex justify-center gap-6">
               {/* Social Icons Placeholder */}
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                 <span className="material-symbols-outlined text-sm">photo_camera</span>
               </div>
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                 <span className="material-symbols-outlined text-sm">alternate_email</span>
               </div>
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                 <span className="material-symbols-outlined text-sm">favorite</span>
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