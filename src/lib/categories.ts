export type CategorySlug = 'forge' | 'encode' | 'beacon' | 'evolve' | 'dispatch';

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
    // S61 repaint — Forge page palette now matches the homepage Forge block (flame bg, gold text).
    name: 'Forge',
    description: 'Building and shipping.',
    palette: {
      bg: 'bg-flame',
      text: 'text-gold',
      textMuted: 'text-gold/70',
      border: 'border-gold/30',
      borderHover: 'hover:border-gold',
      chipBg: 'bg-black/20',
      chipText: 'text-gold',
      accent: 'gold',
      inverse: 'black',
    },
  },
  encode: {
    slug: 'encode',
    // S61 repaint — Encode page palette now matches the homepage Encode block (black).
    name: 'Encode',
    description: 'AI learning.',
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
  beacon: {
    slug: 'beacon',
    name: 'Beacon',
    description: 'Building in public.',
    palette: {
      bg: 'bg-amber-400',
      text: 'text-green-900',
      textMuted: 'text-green-800',
      border: 'border-amber-600',
      borderHover: 'hover:border-black',
      chipBg: 'bg-amber-200',
      chipText: 'text-green-800',
      accent: 'black',
      inverse: 'white',
    },
  },
  evolve: {
    slug: 'evolve',
    name: 'Evolve',
    description: 'How the pipeline evolves.',
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
  dispatch: {
    slug: 'dispatch',
    // S61 repaint — Dispatch page palette now matches the homepage Dispatch block (white bg, red accents).
    name: 'Dispatch',
    description: "The machine's own story.",
    palette: {
      bg: 'bg-white',
      text: 'text-black',
      textMuted: 'text-neutral-600',
      border: 'border-red-200',
      borderHover: 'hover:border-red-600',
      chipBg: 'bg-red-100',
      chipText: 'text-red-700',
      accent: 'black',
      inverse: 'white',
    },
  },
};

// Pillar order: Encode (I), Forge (II).
// Beacon archived from nav + homepage S61 (kept at /beacon for later).
// Dispatch archived from nav + homepage E32 2026-06-27 — kept at /dispatch + posts on disk;
// being spun out into its own standalone creative/design website.
export const categoryList: Category[] = [categories.encode, categories.forge];
