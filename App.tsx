import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Backstory from './components/Backstory';

const App: React.FC = () => {

  // Enforce dark mode for the neon aesthetic
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <QuoteSection />
                <Gallery />
                <ContactFooter />
              </>
            } />
            <Route path="/backstory" element={<Backstory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;