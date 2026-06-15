import type { APIContext } from 'astro';
import { buildFeed } from '../lib/rss';

// Master feed — every post (Forge, Encode, Beacon, Evolve).
export function GET(context: APIContext) {
  return buildFeed({
    site: context.site,
    title: 'Love Learn Lift — All posts',
    description: 'Every post from a 24-month public build program: Forge, Encode, Beacon, Evolve.',
  });
}
