import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  
  // Enforce dark mode for the neon aesthetic
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <QuoteSection />
        <Gallery />
        <ContactFooter />
      </main>
    </div>
  );
};

export default App;