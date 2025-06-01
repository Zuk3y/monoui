'use client';
import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import '@/styles/monoui.css';
import 'prismjs/components/prism-jsx';

type CodeBlockProps = {
  code: string | null;
  language?: string;
};

export default function CodeBlock({ code, language = 'jsx' }: CodeBlockProps) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code]);
  return (
    <pre className="overflow-auto rounded-xl bg-gray-900 p-4 text-sm text-white">
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
