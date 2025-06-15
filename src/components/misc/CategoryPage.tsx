import { components } from '@utils/components-data';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface CategoryPageProps {
  categoryName: string;
}

export default function CategoryPage({ categoryName }: CategoryPageProps) {
  const category = components.find((c) => c.category_slug === categoryName);

  if (!category) {
    redirect('/not-found');
  }

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-4 py-10 text-black sm:px-6 md:px-8">
      <div className="mb-10">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {category.category}
        </h1>
        <p className="max-w-2xl text-base text-gray-600">
          Discover all {category.category} available in MonoUI.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map(({ name, link, icon: Icon }) => (
          <li key={name}>
            <Link href={link}>
              <div className="group h-full cursor-pointer rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="flex items-center gap-3">
                  {Icon && (
                    <Icon className="text-primary h-5 w-5 text-blue-600 transition-transform group-hover:scale-110" />
                  )}
                  <h3 className="text-lg font-semibold">{name}</h3>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
