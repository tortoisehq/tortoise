import type { APIContext } from 'astro';
import { buildFeed } from '../../../lib/rss';

// Build Two — Steward only.
export function GET(context: APIContext) {
  return buildFeed({
    site: context.site,
    title: 'Love Learn Lift — Forge / Steward',
    description: 'Build Two: Steward — a pocket shop steward for a railway crew, the first field tool Workhorse helped make.',
    filter: (p) => p.data.category === 'forge' && p.data.build === 'steward',
  });
}
