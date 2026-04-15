export type CategorySlug = 'forge' | 'encode' | 'endure';

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export const categories: Record<CategorySlug, Category> = {
  forge: {
    slug: 'forge',
    name: 'Forge',
    description: 'Building and shipping.',
  },
  encode: {
    slug: 'encode',
    name: 'Encode',
    description: 'AI learning.',
  },
  endure: {
    slug: 'endure',
    name: 'Endure',
    description: 'Life, health, the long game.',
  },
};

export const categoryList: Category[] = [
  categories.forge,
  categories.encode,
  categories.endure,
];
