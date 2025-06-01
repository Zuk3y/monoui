import { countAllComponents } from '@/utils/counter';
import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    alternates: {
      canonical: '/',
    },
  };
};

export default function Home() {
  const totalComponents = countAllComponents();
  return (
    <>
      <div>
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div className="px-4 text-center">
            <h1 className="mb-6 text-5xl leading-tight font-extrabold md:text-6xl lg:text-6xl">
              Welcome to MonoUI ⚡
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-black/50">
              A modern, easy-to-use UI library designed to streamline your
              development process.
            </p>
            <p className="mx-auto mb-8 max-w-2xl text-2xl font-extrabold">
              {totalComponents} components and growing.
            </p>
            <Link
              href="/components"
              className="inline-block rounded-lg border border-neutral-300 bg-neutral-100 px-8 py-4 text-lg font-medium text-black shadow-lg transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
              Browse Components
            </Link>
          </div>
          <div className="absolute -top-10 -left-10 hidden h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-purple-300 to-transparent opacity-20 blur-3xl md:block"></div>
          <div className="absolute -right-10 -bottom-10 hidden h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-yellow-300 to-transparent opacity-20 blur-3xl md:block"></div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform">
            <Link href="#info">
              <span className="animate-pulse text-2xl text-black">↓</span>
            </Link>
          </div>
        </section>
        <section className="relative py-20" id="info">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-5xl font-extrabold">About MonoUI</h2>
            <p className="text-lg leading-relaxed">
              MonoUI is a sleek, modern UI library built to help developers
              design beautiful, responsive websites faster. With a curated set
              of pre-built components and a focus on customization, it
              simplifies the development process without sacrificing flexibility
              or aesthetics.
            </p>
          </div>
        </section>
        <section className="relative rounded-lg py-20">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-10 text-center text-5xl font-extrabold">
              Features
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">
                  ⚡ Lightweight & Fast
                </h3>
                <p className="text-sm">Built for performance and clean code</p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">
                  🎨 Easy customization
                </h3>
                <p className="text-sm">
                  Easily tailor colors and styles to match your brand.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">
                  📱 Fully Responsive
                </h3>
                <p className="text-sm">
                  Looks great on all devices and screen sizes.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">
                  🧩 Pre-Built Components
                </h3>
                <p className="text-sm">
                  Save time with plug-and-play UI building blocks.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">
                  🔗 Easy Integration
                </h3>
                <p className="text-sm">
                  Works seamlessly with any modern frontend framework that uses
                  tailwind css v4
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-xl font-semibold">🛠️ LTS</h3>
                <p className="text-sm">
                  More components planned in the future!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
