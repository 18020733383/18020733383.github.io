import React from 'react';

interface CodeBlockProps {
  title?: string;
  // FIX: Add 'json' to the list of supported languages.
  language: 'python' | 'bash' | 'text' | 'json';
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ title, language, children }) => {
    // FIX: Add a color mapping for 'json'.
    const langColor = {
        python: 'text-brand-accent',
        bash: 'text-brand-green',
        text: 'text-brand-yellow',
        json: 'text-brand-yellow'
    }[language];

  return (
    <div className="my-4 bg-brand-bg rounded-lg border border-brand-border overflow-hidden shadow-inner">
      <div className="flex justify-between items-center px-4 py-2 bg-brand-surface border-b border-brand-border">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-brand-red rounded-full"></span>
          <span className="w-3 h-3 bg-brand-yellow rounded-full"></span>
          <span className="w-3 h-3 bg-brand-green rounded-full"></span>
        </div>
        <span className={`text-xs font-mono font-semibold ${langColor}`}>{title || language}</span>
      </div>
      <pre className="p-4 text-sm font-mono overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;