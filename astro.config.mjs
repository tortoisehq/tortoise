import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // NOTE: flip to 'https://lovelearnlift.com' during the DNS + Vercel cutover
  // (see CUTOVER-CHECKLIST.md). Kept at the serving domain so the sitemap does
  // not advertise a domain that is not resolving yet.
  site: 'https://tortoisehq.io',
  integrations: [mdx(), sitemap(), tailwind()],
});
