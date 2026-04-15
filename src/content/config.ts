import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['forge', 'encode', 'endure']),
    tags: z.array(z.string()).max(4).default([]),
    excerpt: z.string().max(160),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
