'use client';

import ComponentPreview from '@components/misc/ComponentPreview';

interface ComponentData {
  id: number;
  name: string;
  path: string;
  raw: string;
  fullPage: boolean;
  height: number;
  requiresJS: boolean;
}

interface PreviewProps {
  comps: ComponentData[];
}

export default function Preview({ comps }: PreviewProps) {
  return (
    <div className="space-y-10">
      {comps.map((compData) => (
        <ComponentPreview key={compData.path} compData={compData} />
      ))}
    </div>
  );
}
