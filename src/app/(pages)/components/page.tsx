import React from 'react';
import { components } from '@/utils/components-data';
import Link from 'next/link';
import { Metadata } from 'next';

type ComponentItem = {
  name: string;
  link: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
};

type ComponentCategory = {
  category: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  items: ComponentItem[];
};

export function generateMetadata(): Metadata {
  const title = 'MonoUI – Free Tailwind CSS v4 Components';
  const description =
    'Explore a curated collection of beautiful, reusable Tailwind CSS v4 components including buttons, cards, forms, and more. Perfect for building modern UIs fast.';

  return {
    title,
    description,
    metadataBase: new URL('https://monoui.dev'),
    openGraph: {
      title,
      description,
      url: 'https://monoui.dev/components',
      images: [
        {
          url: '/og.jpg',
          width: 1200,
          height: 630,
          alt: 'MonoUI Preview',
        },
      ],
    },
    keywords: [
      'Tailwind CSS components',
      'UI library',
      'React components',
      'Mono UI',
      'free Tailwind UI',
      'responsive UI elements',
      'component library',
    ],
  };
}

export default function ComponentsPage() {
  const allItems = components.flatMap((c) => c.items);
  const newComponents = allItems.filter((item) => item.tag);
  const updatedComponents = allItems.filter((item) => item.updated);
  return (
    <main className="mx-auto max-w-6xl space-y-20 px-4 py-10 text-black sm:px-6 md:px-8">
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          📦 Components
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Explore a curated library of clean, reusable UI components designed
          for productivity and scalability.
        </p>
      </section>
      {newComponents.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold">✨ New Components</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newComponents.map(({ name, link, icon: Icon }) => (
              <Link
                href={link}
                key={name}
                className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <Icon
                      size={20}
                      className="text-blue-600 transition-transform group-hover:scale-110"
                    />
                  )}
                  <h3 className="text-lg font-semibold">{name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      {updatedComponents.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold">✨ Updated Components</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {updatedComponents.map(({ name, link, icon: Icon }) => (
              <Link
                href={link}
                key={name}
                className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <Icon
                      size={20}
                      className="text-blue-600 transition-transform group-hover:scale-110"
                    />
                  )}
                  <h3 className="text-lg font-semibold">{name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      <section>
        <h2 className="mb-6 text-2xl font-bold">🗂️ Browse by Category</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {components.map(
            ({ category, icon: Icon, items }: ComponentCategory) => (
              <div
                key={category}
                className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <Link
                  href={`/components/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mb-3 flex items-center gap-2 hover:underline"
                >
                  {Icon && <Icon size={18} className="text-muted-foreground" />}
                  <h3 className="font-bold">{category}</h3>
                </Link>
                <ul className="space-y-1 text-sm">
                  {items.slice(0, 4).map(({ name, link }) => (
                    <li key={name}>
                      <Link
                        href={link}
                        className="text-muted-foreground hover:underline"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                  {items.length > 4 && (
                    <li>
                      <Link
                        href={`/components/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm font-medium text-blue-500"
                      >
                        + {items.length - 4} more
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
