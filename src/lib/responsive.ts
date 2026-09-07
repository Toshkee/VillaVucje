import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/**
 * Builds AVIF + WebP sources and a JPEG fallback for one image, with
 * per-format quality (AVIF needs a lower number for the same visual result).
 * Candidate widths never exceed the source width, so nothing is upscaled.
 */
export interface ResponsiveSet {
  avif: string;
  webp: string;
  fallbackSrc: string;
  fallbackSrcset: string;
  width: number;
  height: number;
}

export const QUALITY = { avif: 62, webp: 78, jpg: 80 } as const;

export function clampWidths(widths: readonly number[], max: number): number[] {
  const under = widths.filter((w) => w < max);
  const list = widths.some((w) => w >= max) ? [...under, max] : under;
  return Array.from(new Set(list)).sort((a, b) => a - b);
}

export async function buildResponsiveSet(
  image: ImageMetadata,
  widths: readonly number[],
  quality: { avif: number; webp: number; jpg: number } = QUALITY,
): Promise<ResponsiveSet> {
  const list = clampWidths(widths, image.width);
  const [avif, webp, jpg] = await Promise.all([
    getImage({ src: image, widths: list, format: 'avif', quality: quality.avif }),
    getImage({ src: image, widths: list, format: 'webp', quality: quality.webp }),
    getImage({ src: image, widths: list, format: 'jpg', quality: quality.jpg }),
  ]);
  // The fallback <img src> is a mid-size rendition, not the largest.
  const mid = list[Math.min(list.length - 1, Math.max(0, Math.floor(list.length / 2)))] ?? image.width;
  const fallback = await getImage({ src: image, width: mid, format: 'jpg', quality: quality.jpg });
  return {
    avif: avif.srcSet.attribute,
    webp: webp.srcSet.attribute,
    fallbackSrc: fallback.src,
    fallbackSrcset: jpg.srcSet.attribute,
    width: image.width,
    height: image.height,
  };
}
