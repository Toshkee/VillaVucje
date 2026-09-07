import type { APIRoute } from 'astro';
import { SITE_URL } from '@config/site';

/** Allows all crawlers; advertises the sitemap only once the domain is configured. */
export const GET: APIRoute = () => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (SITE_URL) lines.push('', `Sitemap: ${SITE_URL}/sitemap-index.xml`);
  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
