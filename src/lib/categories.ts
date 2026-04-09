export type CategorySlug = 'forge' | 'guild' | 'engram' | 'endure';

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
  guild: {
    slug: 'guild',
    name: 'Guild',
    description: 'Learning in public.',
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
  categories.guild,
  categories.engram,
  categories.endure,
];
