import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in px-6">
      <section className="flex flex-col items-center justify-center min-h-[85vh] py-12 relative overflow-hidden">
        {/* Subtle Textured Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
        
        {/* The Digital Card Container */}
        <div className="group relative flex aspect-[1.58/1] w-full max-w-[620px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#121212] via-[#0a0a0a] to-[#020202] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-primary/30 hover:shadow-[0_40px_120px_rgba(196,167,79,0.1)] hover:-translate-y-2">
          
          {/* Card Shine Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-card-shine"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 pointer-events-none"></div>
          
          <div className="relative z-20 flex flex-col items-center gap-6 text-center">
            <h1 className="text-6xl md:text-9xl font-light tracking-[0.3em] text-aurum-ivory uppercase drop-shadow-2xl">
              Aurum
            </h1>
            <div className="h-[1px] w-16 bg-primary/30"></div>
            <p className="text-aurum-silver/40 text-[10px] md:text-xs font-medium tracking-[0.6em] uppercase">
              Digital Identity Redefined
            </p>
          </div>

          <div className="absolute bottom-12 z-30">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full border border-primary/20 bg-background-dark/80 px-8 py-4 text-primary text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:bg-primary hover:text-background-dark hover:border-primary active:scale-95 interactive">
              <span>Access Portal</span>
              <span className="material-symbols-outlined !text-[16px]">arrow_right_alt</span>
            </button>
          </div>

          {/* Precision Details */}
          <div className="absolute bottom-8 left-10 z-20 opacity-30 select-none">
            <p className="text-[8px] tracking-[0.4em] uppercase font-bold">SN: 8842-AURUM-X</p>
          </div>
          <div className="absolute top-10 right-10 z-20 opacity-20 select-none">
            <span className="material-symbols-outlined !text-[32px]">contactless</span>
          </div>
          <div className="absolute top-10 left-10 z-20 opacity-10 select-none">
             <div className="w-10 h-7 rounded-md border border-white/20 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center gap-4 opacity-20">
          <div className="h-20 w-[1px] bg-gradient-to-b from-primary/0 via-primary to-primary/0"></div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full pb-32">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-20">
            <Feature 
              icon="verified_user" 
              title="Sovereignty" 
              desc="Encrypted digital presence architecture for the modern sovereign entity." 
            />
            <Feature 
              icon="all_inclusive" 
              title="Continuity" 
              desc="A modular identity designed to evolve seamlessly across emerging networks." 
            />
            <Feature 
              icon="token" 
              title="Exclusivity" 
              desc="Verified entry to curated virtual assets and high-fidelity social nodes." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="flex flex-col gap-6 group items-center text-center md:items-start md:text-left interactive p-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-500">
    <div className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-primary group-hover:scale-110 group-hover:border-primary/20 transition-all duration-500">
      <span className="material-symbols-outlined !text-[24px]">{icon}</span>
    </div>
    <div className="space-y-3">
      <h2 className="text-white text-xs font-bold tracking-[0.3em] uppercase">{title}</h2>
      <p className="text-white/30 text-xs leading-relaxed font-light max-w-[260px]">{desc}</p>
    </div>
  </div>
);

export default HomePage;