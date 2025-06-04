import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-t-gray-200">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold text-black">MonoUI ⚡</h3>
            <p className="mt-4 max-w-sm text-black/50">
              A modern, easy-to-use UI library designed to streamline your
              development process.
            </p>
          </div>

          <Link
            href="/components"
            className="inline-block self-start rounded-lg border border-neutral-300 bg-neutral-100 p-2 font-medium text-black shadow-lg transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            Browse Components
          </Link>
        </div>
      </div>
    </footer>
  );
}
