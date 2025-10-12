import Link from 'next/link';
import { ArrowLeftCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-neutral-900 px-6 py-12 text-center">
      <h1 className="mb-4 animate-bounce text-6xl font-extrabold text-neutral-100">404 🧐</h1>
      <p className="mb-6 text-lg text-neutral-400">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/components"
        className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-lg text-neutral-400 transition-colors hover:border-neutral-600 hover:bg-neutral-700 hover:text-neutral-100"
      >
        <ArrowLeftCircle size={18} />
        Back to components
      </Link>
    </main>
  );
}
