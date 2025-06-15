import { promises as fs } from 'fs';
import path from 'path';
import { components } from '@utils/components-data';
import PreviewWrapper from '@components/misc/PreviewWrapper';
import { LucideIcon } from 'lucide-react';
import { redirect } from 'next/navigation';

type ComponentItem = {
  id: number;
  name: string;
  description: string;
  link: string;
  icon: LucideIcon;
  data?: {
    description: string;
    name: string;
    path: string;
    fullPage: boolean;
    height: number;
    requiresJS: boolean;
  }[];
};

type ComponentObject = {
  category: string;
  category_slug: string;
  icon: LucideIcon;
  items: ComponentItem[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoryName: string; componentName: string }>;
}) {
  const { categoryName, componentName } = await params;

  const category = components.find((c) => c.category_slug === categoryName);
  const component = category?.items.find((item) => {
    const parts = item.link.split('/');
    return parts[parts.length - 1] === componentName;
  });

  if (!category || !component)
    return {
      title: null,
      description: null,
    };

  return {
    title: `${component.name} | ${category.category} Components`,
    description: `Explore the ${component.name} component in the ${category.category} category.`,
    openGraph: {
      title: `${component.name} | ${category.category} Components`,
      description: `Interactive previews and source for ${component.name}.`,
      url: `/components/${categoryName}/${componentName}`,
    },
  };
}

export default async function ComponentSlugPage({
  params,
}: {
  params: Promise<{ categoryName: string; componentName: string }>;
}) {
  const { categoryName, componentName } = await params;

  const category = components.find((c) => c.category_slug === categoryName) as
    | ComponentObject
    | undefined;

  const component = category?.items.find((item) => {
    const parts = item.link.split('/');
    return parts[parts.length - 1] === componentName;
  }) as ComponentItem | undefined;

  if (!category || !component) {
    redirect('/not-found');
  }

  const demos: {
    id: number;
    name: string;
    description: string;
    path: string;
    raw: string;
    fullPage: boolean;
    height: number;
    requiresJS: boolean;
  }[] = [];

  if (component?.data) {
    for (const [index, entry] of component.data.entries()) {
      const absolutePath = path.join(process.cwd(), 'public', entry.path);
      try {
        const rawHtml = await fs.readFile(absolutePath, 'utf-8');
        demos.push({
          id: index + 1,
          name: entry.name,
          description: entry.description,
          path: entry.path,
          raw: rawHtml,
          fullPage: entry.fullPage,
          height: entry.height,
          requiresJS: entry.requiresJS,
        });
      } catch (error) {
        console.error(`Failed to load demo "${entry.name}":`, error);
      }
    }
  }

  return (
    <>
      <header className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 md:space-y-0">
        <h1 className="text-3xl font-extrabold">{component?.name}</h1>
        <span className="self-start rounded-lg bg-blue-100 px-2.5 py-0.5 text-sm font-bold text-blue-500 sm:self-auto">
          Tailwind CSS v4
        </span>
      </header>
      <section className="my-4">
        <p className="text-md max-w-2xl font-bold text-gray-600">
          {component?.description}
        </p>
      </section>
      <div className="space-y-8">
        <PreviewWrapper demos={demos} />
      </div>
    </>
  );
}
