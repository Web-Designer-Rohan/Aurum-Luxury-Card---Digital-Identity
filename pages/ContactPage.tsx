import React from 'react';
import { CONTACT_LINKS } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-40">
      <div className="w-full max-w-5xl mx-auto space-y-32">
        <div className="text-center space-y-8">
          <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase block">Inquiry</span>
          <h2 className="text-5xl md:text-8xl font-light tracking-tight text-white leading-[0.9]">
            The journey to <br/>
            <span className="italic text-platinum font-normal">sovereignty</span> begins here.
          </h2>
        </div>

        <div className="flex flex-col items-center w-full">
          {CONTACT_LINKS.map((link) => (
            <a 
              key={link.id}
              className="group flex items-center justify-between w-full max-w-4xl border-b border-white/5 py-10 px-4 transition-all duration-500 hover:px-8 interactive hover:bg-white/[0.01]" 
              href={link.url}
            >
              <div className="flex items-center gap-10">
                <span className="text-white/20 text-xs font-bold tracking-[0.3em] transition-colors group-hover:text-primary">{link.id}</span>
                <span className="text-4xl md:text-6xl font-light text-white tracking-tight relative transition-all group-hover:text-primary">
                  {link.label}
                </span>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45">
                <span className="material-symbols-outlined text-white/40 group-hover:text-background-dark !text-[24px]">{link.icon}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-4xl mx-auto pt-10">
          <InfoCard title="Global Nodes" detail="London / Zurich / Singapore" />
          <InfoCard title="Private Line" detail="concierge@aurum.luxury" isLink />
          <InfoCard title="Status" detail="Nodes Active (24/7)" />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, detail, isLink }: { title: string, detail: string, isLink?: boolean }) => (
  <div className="space-y-4 text-center md:text-left interactive p-2 rounded-lg hover:bg-white/[0.02] transition-colors">
    <p className="text-[10px] text-primary uppercase font-bold tracking-[0.4em]">{title}</p>
    <p className={`text-sm font-light text-white/40 tracking-wide ${isLink ? 'underline underline-offset-8 decoration-white/10 hover:text-white transition-colors cursor-pointer hover:decoration-primary' : ''}`}>
      {detail}
    </p>
  </div>
);

export default ContactPage;