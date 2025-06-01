'use client';

import { Code2 } from 'lucide-react';
import clsx from 'clsx';

const BASE_BUTTON_CLASSES =
  'flex items-center gap-1 px-3 py-1.5 rounded-lg border transition text-xs';
const TOGGLE_BUTTON_CLASSES =
  'border-black/20 text-black hover:bg-black hover:text-white';

export default function CopyCodeButton({ code }: { code: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(code)}
      className={clsx(BASE_BUTTON_CLASSES, TOGGLE_BUTTON_CLASSES, 'mb-4')}
      title="Copy Component Code"
    >
      <Code2 size={16} />
      Copy Code
    </button>
  );
}
