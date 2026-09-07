import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config/site';

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
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sr',
        locales: { sr: 'sr-Latn', en: 'en' },
      },
    }),
  ],
  image: {
    responsiveStyles: false,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
