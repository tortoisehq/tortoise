import type { APIContext } from 'astro';
import { buildFeed } from '../../lib/rss';

// Encode feed — learning in public.
export function GET(context: APIContext) {
  return buildFeed({
    site: context.site,
    title: 'Love Learn Lift — Encode',
    description: 'Learning in public. Sit down at zero, leave with one thing locked.',
    filter: (p) => p.data.category === 'encode',
  });
}
