import React from 'react';
import { Link } from 'react-router-dom';
import { PORTRAIT_IMG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Neural Glitch Entrance */}
      <Link
        to="/backstory"
        className="absolute top-24 right-10 z-30 group cursor-pointer"
        title="Access Neural Records"
      >
        <div className="relative">
          <span className="material-symbols-outlined text-zinc-300 dark:text-zinc-600 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110 animate-pulse">
            sensors
          </span>
          <div className="absolute top-0 left-0 w-full h-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity animate-wiggle"></div>
        </div>
        <span className="absolute right-full mr-2 top-0 whitespace-nowrap text-[10px] font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
          Neural_Link: Established
        </span>
      </Link>
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] animate-float opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-[80px] animate-float opacity-60" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Header Badge */}
        <div className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-bold text-sm tracking-widest mb-8 transform -rotate-2 shadow-hard hover:rotate-2 transition-transform duration-300">
          EST. 2024 // LOS SANTOS
        </div>

        {/* Main Title Stack */}
        <h1 className="text-6xl md:text-[8rem] font-display leading-[0.9] text-zinc-900 dark:text-white">
          DAMON
          <span className="relative inline-block mx-4">
            <span className="relative z-10 text-primary transform -rotate-6 inline-block">VOX</span>
            <svg className="absolute -bottom-4 -left-2 w-[110%] h-4 text-black dark:text-white z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">

          {/* Portrait Side */}
          <div className="relative group order-2 md:order-1">
            {/* Sticker Background */}
            <div className="absolute inset-0 bg-primary transform rotate-6 rounded-[2rem] shadow-hard-lg group-hover:rotate-3 transition-transform duration-300"></div>

            <div className="relative bg-white dark:bg-zinc-800 p-2 rounded-[2rem] transform -rotate-3 group-hover:-rotate-1 transition-transform duration-300 border-4 border-black dark:border-white">
              <img
                alt="Damon Vox Portrait"
                className="w-full h-auto rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-300 aspect-square object-cover"
                src={PORTRAIT_IMG}
              />

              {/* Speech Bubble */}
              <div className="absolute -top-10 -right-10 bg-white text-black p-4 rounded-2xl rounded-bl-none border-4 border-black shadow-hard transform rotate-12 z-20 hidden md:block animate-bounce-slow">
                <p className="font-display text-xl">"What's up n' shit!"</p>
              </div>
            </div>
          </div>

          {/* Intro Text Side */}
          <div className="text-left order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-display text-zinc-800 dark:text-zinc-200">
              Yo! I'm the guy with the <span className="text-primary bg-black dark:bg-white dark:text-black px-2 transform -skew-x-12 inline-block">camera.</span>
            </h2>
            <p className="text-lg font-body text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Forget the polished studio stuff. I'm out here chasing neon lights, street food, and the weird chaos of Los Santos. If it's real, I'm shooting it.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#gallery" className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-transform shadow-hard">
                See the Shots
              </a>
              <a href="#book" className="bg-primary text-black px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-transform border-2 border-black shadow-hard">
                Let's Link
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;