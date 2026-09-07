/**
 * Build-time site settings. Kept separate from property facts so that
 * `astro.config.ts` can import it without pulling in image assets.
 */
const explicitOrigin = process.env.SITE_URL?.trim();
// Set automatically by Cloudflare Pages builds; Workers builds rely on SITE_URL.
const cfPagesUrl = process.env.CF_PAGES_URL?.trim();
const raw = (explicitOrigin || cfPagesUrl || '').replace(/\/+$/, '');

/** Absolute production origin, or `undefined` while the domain is undecided. */
export const SITE_URL: string | undefined = raw.length > 0 ? raw : undefined;
