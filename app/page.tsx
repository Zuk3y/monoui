import { countAllComponents } from '@utils/counter';
import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    alternates: {
      canonical: '/',
    },
  };
};

export default async function Home() {
  const totalComponents = countAllComponents();

  return (
    <>
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="px-4 text-center">
          <h1 className="mb-6 text-5xl leading-tight font-extrabold text-neutral-100 md:text-6xl lg:text-6xl">Welcome to MonoUI ⚡</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-neutral-400">A modern, easy-to-use UI library designed to streamline your development process.</p>
          <p className="mx-auto mb-8 max-w-2xl text-2xl font-extrabold text-neutral-100">{totalComponents} components and growing.</p>
          <Link
            href="/components"
            className="inline-block rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-lg text-neutral-400 transition-colors hover:border-neutral-600 hover:bg-neutral-700 hover:text-neutral-100"
          >
            Browse Components
          </Link>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform animate-bounce">
          <Link href="#info">
            <span className="text-2xl text-neutral-400">↓</span>
          </Link>
        </div>
      </section>

      <section className="relative py-20" id="info">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-5xl font-extrabold text-neutral-100">About MonoUI</h2>
          <p className="text-lg leading-relaxed text-neutral-400">
            MonoUI is a sleek, modern UI library built to help developers design beautiful, responsive websites faster. With a curated set of pre-built components and a focus on customization, it
            simplifies the development process without sacrificing flexibility or aesthetics.
          </p>
        </div>
      </section>

      <section className="relative rounded-lg py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-5xl font-extrabold text-neutral-100">Features</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">⚡ Lightweight & Fast</h3>
              <p className="text-sm text-neutral-400">Built for performance and clean code</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">🎨 Easy customization</h3>
              <p className="text-sm text-neutral-400">Easily tailor colors and styles to match your brand.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">📱 Fully Responsive</h3>
              <p className="text-sm text-neutral-400">Looks great on all devices and screen sizes.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">🧩 Pre-Built Components</h3>
              <p className="text-sm text-neutral-400">Save time with plug-and-play UI building blocks.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">🔗 Easy Integration</h3>
              <p className="text-sm text-neutral-400">Works seamlessly with any modern frontend framework that uses tailwind css v4</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">🛠️ LTS</h3>
              <p className="text-sm text-neutral-400">More components planned in the future!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative rounded-lg py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-5xl font-extrabold text-neutral-100">FAQ</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">Is MonoUI free to use?</h3>
              <p className="text-sm text-neutral-400">Yes, MonoUI is completely free to use.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">How do I use MonoUI?</h3>
              <p className="text-sm text-neutral-400">Choose a component you like, copy the code, and paste it into your project.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">Do I need to install any dependencies?</h3>
              <p className="text-sm text-neutral-400">
                No, MonoUI is dependency-light. It only uses{' '}
                <Link href="https://tailwindcss.com/" className="text-blue-500 hover:underline">
                  Tailwind CSS
                </Link>{' '}
                and{' '}
                <Link href="https://lucide.dev/" className="text-blue-500 hover:underline">
                  Lucide icons
                </Link>
                .
              </p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">Can I contribute to MonoUI?</h3>
              <p className="text-sm text-neutral-400">Not at the moment, but contribution support may be added in the future. Stay tuned!</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100">How often is MonoUI updated?</h3>
              <p className="text-sm text-neutral-400">MonoUI is actively developed and receives frequent updates, including bug fixes and new components.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
