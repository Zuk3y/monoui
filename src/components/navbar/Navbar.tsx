'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSidebarStore } from '@components/sidebar/sidebarStore';
import { House, PanelLeftOpen } from 'lucide-react';

const Navbar = () => {
  const toggleSidebar = useSidebarStore(state => state.toggleSidebar);
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const buildPath = (index: number) => '/' + pathSegments.slice(0, index + 1).join('/');

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-neutral-700 bg-neutral-800 px-4 py-3">
      <div className="flex items-center overflow-x-auto p-1.5 whitespace-nowrap">
        <Link href="/components" className="text-neutral-500 hover:underline">
          <House size={20} />
        </Link>
        {pathSegments.map((segment, index) => {
          const href = buildPath(index);
          const isLast = index === pathSegments.length - 1;
          const label = decodeURIComponent(segment).replace(/-/g, ' ');
          return (
            <React.Fragment key={index}>
              <span className="mx-2 text-neutral-500">/</span>
              {isLast ? (
                <span className="text-sm font-bold text-neutral-500 uppercase">{label}</span>
              ) : (
                <Link href={href} className="text-sm font-bold text-neutral-500 uppercase transition-colors hover:text-neutral-100">
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <button className="rounded p-2 text-neutral-500 transition-colors hover:text-neutral-400 lg:hidden" onClick={toggleSidebar}>
        <PanelLeftOpen size={20} />
      </button>
    </nav>
  );
};

export default Navbar;
