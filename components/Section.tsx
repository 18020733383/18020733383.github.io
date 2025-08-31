
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-brand-surface border border-brand-border rounded-lg shadow-lg overflow-hidden">
        <header className="p-4 bg-brand-bg border-b border-brand-border flex items-center gap-3">
          <span className="w-6 h-6 text-brand-accent">{icon}</span>
          <h2 className="text-2xl font-bold text-brand-text-primary font-mono">{title}</h2>
        </header>
        <div className="p-6 text-brand-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
   