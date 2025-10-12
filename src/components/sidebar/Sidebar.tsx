'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSidebarStore } from '@components/sidebar/sidebarStore';
import { components } from '@utils/components-data';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const showLength = false;
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 lg:hidden" onClick={toggleSidebar} />}
      <div
        className={`fixed top-0 left-0 z-100 h-full w-64 transform bg-neutral-800 text-neutral-100 lg:relative ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        } flex flex-col border-r border-neutral-700 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-start gap-2 border-b border-neutral-700 p-4">
            <Image src="/logo.svg" width={24} height={24} alt="Logo" className="rounded-md invert" style={{ height: '24' }} />
            <Link href="/components" className="text-lg font-bold text-neutral-100">
              MonoUI
            </Link>
          </div>
          <nav className="flex-1 space-y-8 overflow-y-auto p-4">
            {components.map((category, index) => (
              <div key={index}>
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  <category.icon size={16} className="text-neutral-500" />
                  <Link href={`/components/${category.category_slug}`}>{category.category}</Link>
                </div>
                <ul className="space-y-1.5">
                  {category.items.map(({ name, link, icon: Icon, tag, updated, data }, i) => (
                    <li key={i}>
                      <Link href={link} className="group flex items-center justify-between rounded-md p-2 text-sm font-medium text-neutral-100 transition hover:bg-neutral-700">
                        <div className="flex items-center gap-2">
                          <Icon size={16} className="text-neutral-500 transition group-hover:text-blue-500" />
                          <span>{name}</span>
                          {tag && <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-700">New</span>}
                          {updated && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">Updated</span>}
                        </div>

                        {data.length && showLength && (
                          <>
                            <span className="rounded-full bg-neutral-700 px-2 py-0.5 text-xs text-neutral-500">{data.length}</span>
                          </>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
