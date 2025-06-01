import Link from 'next/link';
import { ArrowLeftCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="mb-4 text-6xl font-extrabold text-black">404 🧐</h1>
      <p className="mb-6 text-lg text-gray-600">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/components"
        className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-lg font-medium text-black shadow-lg transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
      >
        <ArrowLeftCircle size={18} />
        Back to components
      </Link>
    </main>
  );
}
