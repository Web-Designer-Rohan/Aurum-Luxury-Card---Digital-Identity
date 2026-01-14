import React from 'react';
import { TIMELINE } from '../constants';

const PhilosophyPage: React.FC = () => {
  return (
    <div className="animate-fade-in pt-16 px-6 lg:px-20">
      {/* Intro */}
      <section className="max-w-[1440px] mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-[9rem] font-bold leading-[0.85] tracking-tighter mb-8">
              The Art of <br/> <span className="text-primary italic font-light">Presence.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4 border-l border-primary/20 pl-8">
            <p className="text-lg text-white/50 font-light leading-relaxed max-w-sm">
              True luxury is not loud. It is the seamless harmony of precise engineering and restrained aesthetic. We build for the few who value the essence over the noise.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 mb-48">
        <div className="flex flex-col justify-center">
          <div className="max-w-lg">
            <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">Manifesto</span>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
              Identity as <br/> a <span className="italic text-platinum">sculptural</span> form.
            </h2>
            <p className="text-white/40 text-lg leading-relaxed font-light">
              We leverage modern Grotesk principles to ensure that every pixel serves a purpose. Our design language is a silent dialogue between technology and soul.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16 lg:pl-12">
          <ManifestoItem 
            icon="diamond" 
            title="Material Integrity" 
            desc="Every digital touchpoint is weighted with the perceived value of rare elements. Refined haptics meet fluid optics."
          />
          <ManifestoItem 
            icon="shield" 
            title="The Sovereign Standard" 
            desc="Security is not a feature; it is the substrate. We provide an ecosystem of privacy that feels intuitive and invisible."
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-[1440px] mx-auto mb-48">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold tracking-[0.5em] uppercase text-white/20">The Evolution</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="hidden md:block absolute top-[11px] left-0 w-full h-[1px] bg-white/5"></div>
          {TIMELINE.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start relative pb-16 px-4 group interactive">
              <div className={`size-6 rounded-full mb-8 z-10 flex items-center justify-center transition-all duration-500 ${step.status === 'completed' ? 'bg-primary group-hover:scale-125' : 'border border-primary bg-background-dark group-hover:bg-primary/20'}`}>
                {step.status === 'completed' && <div className="size-1.5 rounded-full bg-background-dark"></div>}
              </div>
              <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-3">{step.year}</span>
              <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{step.title}</h4>
              <p className="text-white/30 text-[13px] leading-relaxed max-w-[240px] text-center md:text-left font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Break */}
      <section className="max-w-[1440px] mx-auto pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-white/5 group interactive">
            <img 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
              alt="Luxury minimal architecture" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDALjgPZjko7vLT7FNgCQLd9_e-PZXeDEUv-i2DbzE3T5Ra9Ao-qPIpgpFdXl7bp40q1pi3smF6DIeVpp52GTtOTcR1Hd-Z-JhTYLSxJfsHt6DuvKVa-e9U4DcxBqva1Ux9MO5s9f6sXjZeCuhcUxQYYILM_fX_oLsp--MwZohwmW1U151zwkilZyft8UFDUjtdQzj42dbkGHbfS2TzYFW8xVMC27mJxHQiGaU0dYWjzMS6eyGxwnHmopZ3Bm_yaOQWMk6sxjaiefm4"
            />
          </div>
          <div className="lg:pl-16 text-center lg:text-left">
            <p className="text-3xl md:text-5xl font-light italic text-white/40 mb-12 leading-tight">
              "Excellence is never accidental. It is the result of intention."
            </p>
            <div className="w-20 h-0.5 bg-primary mx-auto lg:mx-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ManifestoItem = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="group interactive pl-4 border-l border-transparent hover:border-primary/20 transition-all duration-500">
    <div className="flex items-center gap-5 mb-6">
      <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-500 group-hover:scale-110">{icon}</span>
      <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{title}</h3>
    </div>
    <p className="text-white/30 leading-relaxed font-light">{desc}</p>
  </div>
);

export default PhilosophyPage;