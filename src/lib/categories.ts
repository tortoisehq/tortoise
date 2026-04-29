export type CategorySlug = 'forge' | 'encode';

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  /** Tailwind palette tokens used by SplitLayout, subpages, and post pages. */
  palette: {
    /** Background utility class (e.g. 'bg-black') applied at the page root. */
    bg: string;
    /** Body text utility class. */
    text: string;
    /** Muted text (timestamps, descriptions). */
    textMuted: string;
    /** Border / divider color. */
    border: string;
    /** Subtle hover for borders + links. */
    borderHover: string;
    /** Tag/chip background. */
    chipBg: string;
    /** Tag/chip text. */
    chipText: string;
    /** Accent (used sparingly — e.g., the seam between panes). */
    accent: string;
    /** Inverse — used for opposite-side accents (e.g., headline color when on this side). */
    inverse: string;
  };
}

export const categories: Record<CategorySlug, Category> = {
  forge: {
    slug: 'forge',
    name: 'Forge',
    description: 'Building and shipping.',
    palette: {
      bg: 'bg-black',
      text: 'text-white',
      textMuted: 'text-neutral-400',
      border: 'border-neutral-800',
      borderHover: 'hover:border-white',
      chipBg: 'bg-neutral-900',
      chipText: 'text-neutral-200',
      accent: 'white',
      inverse: 'black',
    },
  },
  encode: {
    slug: 'encode',
    name: 'Encode',
    description: 'AI learning.',
    palette: {
      bg: 'bg-white',
      text: 'text-black',
      textMuted: 'text-neutral-600',
      border: 'border-neutral-200',
      borderHover: 'hover:border-black',
      chipBg: 'bg-neutral-100',
      chipText: 'text-neutral-800',
      accent: 'black',
      inverse: 'white',
    },
  },
};

export const categoryList: Category[] = [categories.forge, categories.encode];
