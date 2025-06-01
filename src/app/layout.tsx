import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const nunitoText = Nunito({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-dm-serif-text',
});

export const generateMetadata = (): Metadata => {
  const title = 'MonoUI – Beautiful Tailwind CSS v4 Components';
  const description =
    'MonoUI is a fast, modern component library for Tailwind CSS v4. Build stunning, responsive interfaces in minutes with plug-and-play React components.';

  return {
    title,
    description,
    metadataBase: new URL('https://monoui.dev'),
    openGraph: {
      title,
      description,
      url: 'https://monoui.dev',
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
      'Tailwind UI kit',
      'React UI components',
      'MonoUI',
      'responsive web components',
      'free Tailwind templates',
      'developer tools',
      'open-source UI library',
    ],
  };
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoText} antialiased`}>
        <div className="">
          <div className="z-100">{children}</div>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
