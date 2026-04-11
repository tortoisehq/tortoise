export type CategorySlug = 'forge' | 'encode' | 'engram' | 'endure';

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
    description: 'AI learning encoded on memory palaces.',
  },
  engram: {
    slug: 'engram',
    name: 'Engram',
    description: 'Memory training and encoding.',
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
  categories.engram,
  categories.endure,
];
