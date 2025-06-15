import { components } from 'src/utils/components-data';

export default function sitemap() {
  const categoryLinks = components.map(({ category_slug }) => ({
    url: `https://www.monoui.dev/components/${category_slug}`,
    lastModified: new Date(),
  }));

  const componentLinks = components.flatMap(({ items }) =>
    items.map(({ link }) => ({
      url: `https://www.monoui.dev${link}`,
      lastModified: new Date(),
    }))
  );

  const staticPages = [
    {
      url: 'https://www.monoui.dev',
      lastModified: new Date(),
    },
  ];

  return [...staticPages, ...categoryLinks, ...componentLinks];
}
