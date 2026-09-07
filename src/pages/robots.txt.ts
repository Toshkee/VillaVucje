import type { APIRoute } from 'astro';
import { SITE_URL } from '@config/site';

/** Allows all crawlers and advertises the sitemap. */
export const GET: APIRoute = () => {
  const lines = ['User-agent: *', 'Allow: /'];
  lines.push('', `Sitemap: ${SITE_URL}/sitemap-index.xml`);
  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
