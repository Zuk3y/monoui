'use client';

import { Smartphone, Tablet, Monitor, MonitorSmartphone, Code2, Eye } from 'lucide-react';
import clsx from 'clsx';

const SIZES = {
  mobile: 'w-[360px]',
  tablet: 'w-[1024px]',
  desktop: 'w-[1280px]',
  full: 'w-full',
} as const;

const SIZE_ICONS = {
  mobile: <Smartphone size={16} />,
  tablet: <Tablet size={16} />,
  desktop: <Monitor size={16} />,
  full: <MonitorSmartphone size={16} />,
};

const BASE_BUTTON_CLASSES = 'flex items-center gap-1 px-3 py-1.5 rounded-lg border border-neutral-700 transition text-xs';
const TOGGLE_BUTTON_CLASSES = 'text-neutral-400 hover:bg-neutral-700 hover:text-white hover:border-neutral-600';

interface PreviewToolbarProps {
  size: keyof typeof SIZES;
  onSizeChange: (size: keyof typeof SIZES) => void;
  showCode: boolean;
  toggleCode: () => void;
}

export default function PreviewToolbar({ size, onSizeChange, showCode, toggleCode }: PreviewToolbarProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <div className="hidden gap-2 lg:flex">
        {Object.entries(SIZES).map(([key]) => (
          <button
            key={key}
            onClick={() => onSizeChange(key as keyof typeof SIZES)}
            className={clsx(BASE_BUTTON_CLASSES, size === key ? 'bg-neutral-700 text-neutral-100' : TOGGLE_BUTTON_CLASSES)}
            title={`Preview in ${key}`}
          >
            {SIZE_ICONS[key as keyof typeof SIZES]}
            <span className="capitalize">{key}</span>
          </button>
        ))}
      </div>
      <button onClick={toggleCode} className={clsx(BASE_BUTTON_CLASSES, TOGGLE_BUTTON_CLASSES)} title={showCode ? 'Show Component Preview' : 'Show Component Code'}>
        {showCode ? <Eye size={16} /> : <Code2 size={16} />}
        {showCode ? 'Preview' : 'Code'}
      </button>
    </div>
  );
}
