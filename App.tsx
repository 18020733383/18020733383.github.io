
import React from 'react';
import { sections } from './constants';
import Sidebar from './components/Sidebar';
import Section from './components/Section';

const App: React.FC = () => {
  React.useEffect(() => {
    document.title = "人类操作系统开发文档";
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary font-sans">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-accent font-mono tracking-tighter">
            &lt;HumanOS /&gt;
          </h1>
          <p className="text-brand-text-secondary mt-2 text-lg">
            α-0.9.9 (不稳定测试版) - 开发文档
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar sections={sections} />
          <main className="flex-1 space-y-12">
            {sections.map((section) => (
              <Section key={section.id} id={section.id} title={section.title} icon={section.icon}>
                {section.content}
              </Section>
            ))}
          </main>
        </div>

        <footer className="text-center mt-16 text-brand-text-secondary font-mono text-sm">
          <p>
            开发者：宇宙混沌工作室 &copy; 大约20万年前
          </p>
          <p className="mt-1">
            免责声明：本系统概不保修，且可能没有备份。阁下自担风险。
          </p>
          <div className="mt-6">
            <a
              href="https://example.com/buy-me-coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow hover:opacity-90 text-brand-bg font-sans font-bold py-2 px-4 rounded-lg transition-opacity duration-200 shadow-lg text-base"
            >
              ☕️ 给我买杯咖啡
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
