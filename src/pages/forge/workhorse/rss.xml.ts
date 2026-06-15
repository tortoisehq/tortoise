import type { APIContext } from 'astro';
import { buildFeed } from '../../../lib/rss';

// Build One — Workhorse only (absent `build` defaults to Workhorse).
export function GET(context: APIContext) {
  return buildFeed({
    site: context.site,
    title: 'Love Learn Lift — Forge / Workhorse',
    description: 'Build One: Workhorse — the machine that builds, and the dev tooling behind every other build.',
    filter: (p) => p.data.category === 'forge' && p.data.build !== 'steward',
  });
}
