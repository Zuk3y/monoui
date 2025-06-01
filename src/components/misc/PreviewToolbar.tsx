'use client';

import {
  Smartphone,
  Tablet,
  Monitor,
  MonitorSmartphone,
  Code2,
  Eye,
  Sun,
  Moon,
  Grip,
} from 'lucide-react';
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

const BASE_BUTTON_CLASSES =
  'flex items-center gap-1 px-3 py-1.5 rounded-lg border transition text-xs';
const TOGGLE_BUTTON_CLASSES =
  'border-black/20 text-black hover:bg-black hover:text-white';

interface PreviewToolbarProps {
  size: keyof typeof SIZES;
  onSizeChange: (size: keyof typeof SIZES) => void;
  isDark: boolean;
  toggleDark: () => void;
  showCode: boolean;
  toggleCode: () => void;
  isPattern: boolean;
  togglePattern: () => void;
}

export default function PreviewToolbar({
  size,
  onSizeChange,
  isDark,
  toggleDark,
  showCode,
  toggleCode,
  isPattern,
  togglePattern,
}: PreviewToolbarProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <div className="hidden gap-2 lg:flex">
        {Object.entries(SIZES).map(([key]) => (
          <button
            key={key}
            onClick={() => onSizeChange(key as keyof typeof SIZES)}
            className={clsx(
              BASE_BUTTON_CLASSES,
              size === key ? 'bg-black text-white' : TOGGLE_BUTTON_CLASSES
            )}
            title={`Preview in ${key}`}
          >
            {SIZE_ICONS[key as keyof typeof SIZES]}
            <span className="capitalize">{key}</span>
          </button>
        ))}
      </div>
      <button
        onClick={toggleDark}
        className={clsx(BASE_BUTTON_CLASSES, TOGGLE_BUTTON_CLASSES)}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
        {isDark ? 'Light' : 'Dark'}
      </button>
      <button
        onClick={toggleCode}
        className={clsx(BASE_BUTTON_CLASSES, TOGGLE_BUTTON_CLASSES)}
        title={showCode ? 'Show Component Preview' : 'Show Component Code'}
      >
        {showCode ? <Eye size={16} /> : <Code2 size={16} />}
        {showCode ? 'Preview' : 'Code'}
      </button>
      <button
        onClick={togglePattern}
        className={clsx(BASE_BUTTON_CLASSES, TOGGLE_BUTTON_CLASSES)}
        title={isPattern ? 'Show Pattern' : 'Hide Pattern'}
      >
        {isPattern ? <Grip size={16} /> : <Grip size={16} />}
        {isPattern ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
