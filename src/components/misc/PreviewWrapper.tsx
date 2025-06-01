'use client';

import Preview from './Preview';

export default function PreviewWrapper({
  demos,
}: {
  demos: {
    id: number;
    name: string;
    path: string;
    raw: string;
    fullPage: boolean;
    height: number;
    requiresJS: boolean;
  }[];
}) {
  return <Preview comps={demos} />;
}
