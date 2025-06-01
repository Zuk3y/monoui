'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { componentPreviewHtml, rawToJsx } from '@/utils/transformers';
import CopyCodeButton from '@/components/misc/CopyCodeButton';
import PreviewContent from '@/components/misc/PreviewContent';
import PreviewHeader from '@/components/misc/PreviewHeader';
import PreviewToolbar from '@/components/misc/PreviewToolbar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SIZES = {
  mobile: 'w-[360px]',
  tablet: 'w-[1024px]',
  desktop: 'w-[1280px]',
  full: 'w-full',
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

export default function ComponentPreview({
  compData,
}: {
  compData: ComponentData;
}) {
  const [size, setSize] = useState<keyof typeof SIZES>('full');
  const [showCode, setShowCode] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isPattern, setIsPattern] = useState(false);
  const [componentJsx, setComponentJsx] = useState<string | null>(null);

  const iframeHtml = useMemo(
    () =>
      componentPreviewHtml(compData.raw, isDark, isPattern, compData.fullPage),
    [compData.raw, isDark, isPattern, compData.fullPage]
  );

  const fetchComponentJsx = useCallback(async () => {
    if (componentJsx) return;

    try {
      const res = await fetch(compData.path);
      if (!res.ok)
        throw new Error(`Failed to fetch component JSX: ${res.statusText}`);

      const html = await res.text();
      setComponentJsx(rawToJsx(html));
    } catch (error) {
      console.error('Error fetching component JSX:', error);
    }
  }, [compData.path, componentJsx]);

  useEffect(() => {
    if (showCode && !componentJsx) {
      fetchComponentJsx();
    }
  }, [showCode, componentJsx, fetchComponentJsx]);

  return (
    <div className="rounded-lg bg-white transition">
      <PreviewHeader compData={compData} />
      <PreviewToolbar
        size={size}
        onSizeChange={setSize}
        isDark={isDark}
        toggleDark={() => setIsDark((d) => !d)}
        showCode={showCode}
        toggleCode={() => setShowCode((c) => !c)}
        isPattern={isPattern}
        togglePattern={() => setIsPattern((x) => !x)}
      />
      {showCode && componentJsx && <CopyCodeButton code={componentJsx} />}
      <PreviewContent
        compData={compData}
        size={size}
        iframeHtml={iframeHtml}
        showCode={showCode}
        componentJsx={componentJsx}
      />
    </div>
  );
}
