/**
 * Lightbox built on the native <dialog>, which provides focus trapping,
 * Escape handling and focus restoration. Adds arrow keys, swipe, visible
 * previous/next controls and a live counter.
 */
interface Slide {
  src: string;
  srcset: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export function initGallery(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox]');
  const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-gallery-open]'));
  if (!dialog || triggers.length === 0 || typeof dialog.showModal !== 'function') return;

  const img = dialog.querySelector<HTMLImageElement>('[data-lightbox-image]');
  const caption = dialog.querySelector<HTMLElement>('[data-lightbox-caption]');
  const counter = dialog.querySelector<HTMLElement>('[data-lightbox-counter]');
  const prevBtn = dialog.querySelector<HTMLButtonElement>('[data-lightbox-prev]');
  const nextBtn = dialog.querySelector<HTMLButtonElement>('[data-lightbox-next]');
  const closeBtn = dialog.querySelector<HTMLButtonElement>('[data-lightbox-close]');
  const stage = dialog.querySelector<HTMLElement>('[data-lightbox-stage]');
  if (!img || !caption || !counter || !prevBtn || !nextBtn || !closeBtn || !stage) return;

  const ofWord = counter.dataset.of ?? '/';

  const slides: Slide[] = triggers.map((btn) => {
    const source = btn.querySelector<HTMLImageElement>('img');
    return {
      src: btn.dataset.fullSrc ?? source?.currentSrc ?? source?.src ?? '',
      srcset: btn.dataset.fullSrcset ?? '',
      sizes: '100vw',
      width: Number(btn.dataset.fullWidth ?? 0),
      height: Number(btn.dataset.fullHeight ?? 0),
      alt: source?.alt ?? '',
      caption: btn.dataset.caption ?? '',
    };
  });

  let index = 0;

  const preload = (i: number): void => {
    const slide = slides[i];
    if (!slide) return;
    const link = new Image();
    if (slide.srcset) link.srcset = slide.srcset;
    link.sizes = slide.sizes;
    link.src = slide.src;
  };

  const show = (i: number): void => {
    index = (i + slides.length) % slides.length;
    const slide = slides[index];
    if (!slide) return;
    img.removeAttribute('srcset');
    if (slide.srcset) img.srcset = slide.srcset;
    img.sizes = slide.sizes;
    img.src = slide.src;
    if (slide.width && slide.height) {
      img.width = slide.width;
      img.height = slide.height;
    }
    img.alt = slide.alt;
    caption.textContent = slide.caption;
    counter.textContent = `${index + 1} ${ofWord} ${slides.length}`;
    preload(index + 1);
    preload(index - 1);
  };

  const open = (i: number): void => {
    show(i);
    dialog.showModal();
    document.documentElement.classList.add('lightbox-open');
    document.dispatchEvent(new CustomEvent('gallery:open'));
    // Move focus to the “next” control so arrow keys and Enter work at once.
    nextBtn.focus();
  };

  triggers.forEach((btn, i) => btn.addEventListener('click', () => open(i)));
  prevBtn.addEventListener('click', () => show(index - 1));
  nextBtn.addEventListener('click', () => show(index + 1));
  closeBtn.addEventListener('click', () => dialog.close());

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(index - 1);
    }
  });

  // Click on the backdrop (outside the stage and controls) closes.
  dialog.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('lightbox-open');
    document.dispatchEvent(new CustomEvent('gallery:close'));
    // The dialog restores focus to the trigger; nothing else to do.
  });

  // Touch swipe with a small threshold; vertical drags are ignored.
  let startX = 0;
  let startY = 0;
  let tracking = false;
  stage.addEventListener(
    'pointerdown',
    (event) => {
      if (event.pointerType === 'mouse') return;
      tracking = true;
      startX = event.clientX;
      startY = event.clientY;
    },
    { passive: true },
  );
  stage.addEventListener(
    'pointerup',
    (event) => {
      if (!tracking) return;
      tracking = false;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        show(dx < 0 ? index + 1 : index - 1);
      }
    },
    { passive: true },
  );
  stage.addEventListener('pointercancel', () => {
    tracking = false;
  });
}
