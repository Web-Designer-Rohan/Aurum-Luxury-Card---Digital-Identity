import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PhilosophyPage from './pages/PhilosophyPage';
import ContactPage from './pages/ContactPage';
import CustomCursor from './components/CustomCursor';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME': return <HomePage />;
      case 'PHILOSOPHY': return <PhilosophyPage />;
      case 'CONNECT': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-dark selection:bg-primary/40 selection:text-white">
      <CustomCursor />
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto max-w-[1440px]">
          {renderPage()}
        </div>
      </main>

      <Footer />

      {/* Persistent global background texture/gradient */}
      <div 
        className="fixed inset-0 -z-20 pointer-events-none opacity-[0.15]" 
        style={{ background: 'radial-gradient(circle at 50% 50%, #1a1814 0%, #000000 100%)' }}
      ></div>
      <div className="fixed inset-0 -z-30 bg-[#050505] pointer-events-none"></div>
    </div>
  );
};

export default App;