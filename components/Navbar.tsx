import React, { useState } from 'react';
import { PageType } from '../types';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-background-dark/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-20 md:h-24 flex items-center justify-between">
        <button 
          className="flex items-center gap-3 group focus:outline-none interactive"
          onClick={() => handleNav('HOME')}
          aria-label="Home"
        >
          <div className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110">
            <svg fill="currentColor" viewBox="0 0 48 48">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors duration-300">Aurum</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:text-primary interactive ${
                currentPage === link.page ? 'text-primary' : 'text-white/40'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            className="bg-primary hover:bg-primary-hover text-background-dark text-[10px] font-bold px-8 py-3 rounded-full uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-primary/20 interactive active:scale-95"
            onClick={() => handleNav('CONNECT')}
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none interactive"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-[1.5px] bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-[1.5px] bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-[1.5px] bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background-dark/95 border-b border-white/5 backdrop-blur-2xl transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100 py-10' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`text-sm font-bold tracking-[0.3em] uppercase transition-colors duration-300 interactive ${
                currentPage === link.page ? 'text-primary' : 'text-white/40'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            className="bg-primary text-background-dark text-[10px] font-bold px-10 py-4 rounded-full uppercase tracking-[0.2em] interactive"
            onClick={() => handleNav('CONNECT')}
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;