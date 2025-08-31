
import React from 'react';
import type { SectionData } from '../types';

interface SidebarProps {
  sections: SectionData[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="md:w-64 md:sticky top-8 self-start">
      <nav className="bg-brand-surface border border-brand-border rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4 font-mono text-brand-accent">导航</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left flex items-center gap-3 px-3 py-2 text-brand-text-secondary hover:bg-brand-border hover:text-brand-text-primary rounded-md transition-all duration-200"
              >
                <span className="w-5 h-5">{section.icon}</span>
                <span>{section.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
