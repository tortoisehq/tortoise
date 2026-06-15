import type { APIContext } from 'astro';
import { buildFeed } from '../../lib/rss';

// Forge feed — both builds (Workhorse + Steward).
export function GET(context: APIContext) {
  return buildFeed({
    site: context.site,
    title: 'Love Learn Lift — Forge',
    description: 'Building and shipping. Both builds: Workhorse (the pipeline) and Steward (the field tool).',
    filter: (p) => p.data.category === 'forge',
  });
}
