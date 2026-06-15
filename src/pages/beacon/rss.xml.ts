import type { APIContext } from 'astro';
import { buildFeed } from '../../lib/rss';

// Beacon feed — building in public, the story behind the build.
export function GET(context: APIContext) {
  return buildFeed({
    site: context.site,
    title: 'Love Learn Lift — Beacon',
    description: 'Building in public. The story behind the build — what I am making, why, and the part I give away.',
    filter: (p) => p.data.category === 'beacon',
  });
}
