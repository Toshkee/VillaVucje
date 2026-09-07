/**
 * Build-time site settings. Kept separate from property facts so that
 * `astro.config.ts` can import it without pulling in image assets.
 */

/** Production domain. Overridable with SITE_URL for staging or preview builds. */
const DEFAULT_ORIGIN = 'https://villavucje.me';

const override = process.env.SITE_URL?.trim();
const raw = (override || DEFAULT_ORIGIN).replace(/\/+$/, '');

/** Absolute production origin used for canonical URLs, hreflang, OG and the sitemap. */
export const SITE_URL: string = raw;
