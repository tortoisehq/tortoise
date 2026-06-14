import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['forge', 'encode', 'beacon', 'evolve']),
    // Which Forge build a post belongs to. Only meaningful for category 'forge'
    // (Build One = Workhorse, Build Two = Steward). Absent => Workhorse (the
    // default/original build), so the ~37 existing Workhorse posts need no edit.
    build: z.enum(['workhorse', 'steward']).optional(),
    tags: z.array(z.string()).max(4).default([]),
    excerpt: z.string().max(160),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
