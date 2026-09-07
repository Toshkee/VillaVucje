/**
 * Build-time site settings. Kept separate from property facts so that
 * `astro.config.ts` can import it without pulling in image assets.
 */
const explicitOrigin = process.env.SITE_URL?.trim();
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const raw = (explicitOrigin || (vercelDomain ? `https://${vercelDomain}` : '')).replace(/\/+$/, '');

/** Absolute production origin, or `undefined` while the domain is undecided. */
export const SITE_URL: string | undefined = raw.length > 0 ? raw : undefined;
