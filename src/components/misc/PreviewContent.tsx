'use client';

import clsx from 'clsx';
import CodeBlock from '@components/misc/CodeBlock';

const SIZES = {
  mobile: 'w-[360px]',
  tablet: 'w-[1024px]',
  desktop: 'w-[1280px]',
  full: 'w-full',
} as const;

const SIZE_VALUES = {
  mobile: '360px',
  tablet: '1024px',
  desktop: '1280px',
  full: '100%',
} as const;

interface ComponentData {
  id: number;
  name: string;
  path: string;
  raw: string;
  fullPage: boolean;
  height: number;
  requiresJS: boolean;
}

interface PreviewContentProps {
  compData: ComponentData;
  size: keyof typeof SIZES;
  iframeHtml: string;
  showCode: boolean;
  componentJsx: string | null;
}

export default function PreviewContent({
  compData,
  size,
  iframeHtml,
  showCode,
  componentJsx,
}: PreviewContentProps) {
  if (!showCode) {
    return (
      <div
        className={clsx(
          'mx-auto overflow-hidden rounded-xl border border-black/10 transition-all ease-in-out',
          SIZES[size]
        )}
      >
        <iframe
          srcDoc={iframeHtml}
          className="h-full w-full transition-all"
          style={{
            height: `${compData.height}px`,
            maxWidth: SIZE_VALUES[size],
          }}
          title={`Preview of ${compData.name}`}
          sandbox="allow-scripts"
        />
      </div>
    );
  }
  return (
    <div className="relative">
      <CodeBlock code={componentJsx || ''} language="jsx" />
    </div>
  );
}
