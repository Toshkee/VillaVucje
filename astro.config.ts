import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config/site';

/**
 * The production domain is not known yet. Set SITE_URL in `.env`
 * (see `.env.example`) once the domain is decided; canonical URLs,
 * hreflang alternates, Open Graph image URLs and the sitemap are
 * emitted only when it is present.
 */
if (!SITE_URL) {
  console.warn(
    '[villa-vucje] SITE_URL is not set: building without canonical URLs, hreflang, OG image URLs and sitemap.',
  );
}

export default defineConfig({
  output: 'static',
  site: SITE_URL,
  trailingSlash: 'always',
  compressHTML: true,
  i18n: {
    defaultLocale: 'sr',
    locales: [{ path: 'en', codes: ['en'] }, { path: 'sr', codes: ['sr-Latn', 'sr'] }],
    routing: { prefixDefaultLocale: false },
  },
  integrations: SITE_URL
    ? [
        sitemap({
          i18n: {
            defaultLocale: 'sr',
            locales: { sr: 'sr-Latn', en: 'en' },
          },
        }),
      ]
    : [],
  image: {
    responsiveStyles: false,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
