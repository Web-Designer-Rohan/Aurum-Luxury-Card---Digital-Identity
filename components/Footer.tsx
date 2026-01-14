import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-background-dark pt-20 pb-12 px-6 lg:px-20 mt-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-16">
        <div className="flex flex-col items-center md:items-start gap-8">
          <div className="flex items-center gap-3 opacity-30 select-none">
            <span className="material-symbols-outlined text-sm">copyright</span>
            <span className="text-[10px] uppercase tracking-[0.4em]">2024 Aurum Collective</span>
          </div>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Registry</a>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <span className="text-[9px] uppercase tracking-[0.6em] text-primary/40 mb-3 font-medium">Digital Architecture by</span>
          <div className="flex items-center gap-3 group">
            <span className="text-2xl font-bold tracking-tighter uppercase transition-colors group-hover:text-primary">Aurum</span>
            <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_12px_rgba(196,167,79,0.5)]"></div>
          </div>
          <p className="text-[8px] text-white/20 tracking-[0.4em] uppercase mt-6 font-light">Secure. Refined. Sovereign.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;