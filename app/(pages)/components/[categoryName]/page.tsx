import { components } from '@utils/components-data';
import CategoryPage from '@components/misc/CategoryPage';

export async function generateMetadata({ params }: { params: Promise<{ categoryName: string }> }) {
  const { categoryName } = await params;
  const category = components.find(c => c.category_slug === categoryName);
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'Category does not exist',
    };
  }
  return {
    title: `${category.category} Components`,
    description: `Explore all components under the ${categoryName} category.`,
  };
}

export default async function CategorySlugPage({ params }: { params: Promise<{ categoryName: string }> }) {
  const { categoryName } = await params;
  return (
    <>
      <CategoryPage categoryName={categoryName} />
    </>
  );
}
