// Shared RSS feed builder. One master feed plus per-section / per-build feeds so the
// posts are organized for listening (e.g. add a feed to Speechify and new posts in that
// section auto-appear). Full post HTML is included as <content:encoded> so a reader/TTS
// gets the whole article, not just the excerpt.
import rss from '@astrojs/rss';
import MarkdownIt from 'markdown-it';
import { getCollection, type CollectionEntry } from 'astro:content';

const md = new MarkdownIt({ html: true, linkify: true });

type Post = CollectionEntry<'blog'>;

export async function buildFeed(opts: {
  site: string | URL | undefined;
  title: string;
  description: string;
  filter?: (post: Post) => boolean;
}): Promise<Response> {
  let posts = await getCollection('blog', ({ data }) => !data.draft);
  if (opts.filter) posts = posts.filter(opts.filter);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: opts.title,
    description: opts.description,
    site: opts.site ?? 'https://lovelearnlift.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      categories: [
        post.data.category,
        ...(post.data.build ? [post.data.build] : []),
        ...post.data.tags,
      ],
      // Full article HTML for full-text listening (Speechify, readers).
      content: md.render(post.body ?? ''),
    })),
    customData: '<language>en</language>',
  });
}
