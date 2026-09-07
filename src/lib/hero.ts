import { getImage } from 'astro:assets';
import { photoByRole } from '@config/media';
import { buildResponsiveSet, clampWidths, QUALITY, type ResponsiveSet } from './responsive';

/** Breakpoint below which the portrait crop is served. Keep in sync with Hero.astro. */
export const HERO_PORTRAIT_MEDIA = '(max-width: 47.99em)';
export const HERO_LANDSCAPE_MEDIA = '(min-width: 48em)';

export interface HeroSources {
  landscape: ResponsiveSet;
  portrait: ResponsiveSet | null;
}

/** Shared by the layout (preload hints) and the Hero component (markup). */
export async function getHeroSources(): Promise<HeroSources> {
  const hero = photoByRole('hero');
  const landscape = await buildResponsiveSet(hero.image, [960, 1280, 1600, 1920]);
  if (hero.portrait) {
    return { landscape, portrait: await buildResponsiveSet(hero.portrait, [480, 640, 853]) };
  }

  // Crop at build time so phones receive a portrait image, not an entire
  // landscape photograph that the browser then discards most of.
  const maxWidth = Math.min(hero.image.width, Math.floor(hero.image.height / 1.5));
  const widths = clampWidths([480, 640, 768], maxWidth);
  const variants = await Promise.all(widths.map(async (width) => {
    const options = {
      src: hero.image,
      width,
      height: Math.round(width * 1.5),
      fit: 'cover' as const,
      position: 'centre',
    };
    const [avif, webp, jpg] = await Promise.all([
      getImage({ ...options, format: 'avif', quality: QUALITY.avif }),
      getImage({ ...options, format: 'webp', quality: QUALITY.webp }),
      getImage({ ...options, format: 'jpg', quality: QUALITY.jpg }),
    ]);
    return { width, avif: avif.src, webp: webp.src, jpg: jpg.src };
  }));
  const fallback = variants[Math.floor(variants.length / 2)]!;
  const portrait: ResponsiveSet = {
    avif: variants.map(v => `${v.avif} ${v.width}w`).join(', '),
    webp: variants.map(v => `${v.webp} ${v.width}w`).join(', '),
    fallbackSrc: fallback.jpg,
    fallbackSrcset: variants.map(v => `${v.jpg} ${v.width}w`).join(', '),
    width: fallback.width,
    height: Math.round(fallback.width * 1.5),
  };
  return { landscape, portrait };
}
