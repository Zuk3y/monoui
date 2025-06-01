'use client';

interface ComponentData {
  id: number;
  name: string;
  path: string;
  raw: string;
  fullPage: boolean;
  height: number;
  requiresJS: boolean;
}

export default function PreviewHeader({
  compData,
}: {
  compData: ComponentData;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="group relative text-2xl font-extrabold" id={compData.name}>
        <a
          href={`#${compData.name}`}
          className="text-black opacity-50 transition group-hover:opacity-100"
          aria-label={`Link to ${compData.name}`}
        >
          #
        </a>{' '}
        {compData.name}
      </h2>
      {compData.requiresJS && (
        <span className="rounded-full border border-neutral-300 bg-neutral-100 px-2.5 py-0.5 text-sm text-black">
          Requires JS
        </span>
      )}
    </div>
  );
}
