import { photoByRole } from '@config/media';
import { buildResponsiveSet, type ResponsiveSet } from './responsive';

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
  const landscape = await buildResponsiveSet(hero.image, [960, 1280, 1600]);
  const portrait = hero.portrait ? await buildResponsiveSet(hero.portrait, [480, 640, 853]) : null;
  return { landscape, portrait };
}
