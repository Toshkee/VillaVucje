/**
 * Mobile booking bar. Shown only after the hero CTA has scrolled out of view,
 * hidden again while the final booking section or footer is on screen, while
 * the gallery dialog is open, and on wide screens. Reserves its height on
 * <body> so it never covers content.
 */
export function initBookingBar(): void {
  const bar = document.querySelector<HTMLElement>('[data-booking-bar]');
  const heroCta = document.querySelector<HTMLElement>('[data-hero-cta]');
  if (!bar || !heroCta) return;

  const stops = document.querySelectorAll<HTMLElement>('[data-bar-stop]');
  const mobile = window.matchMedia('(max-width: 59.99em)');

  let heroVisible = true;
  let stopVisible = false;
  let dialogOpen = false;

  const render = (): void => {
    const show = mobile.matches && !heroVisible && !stopVisible && !dialogOpen;
    bar.classList.toggle('is-visible', show);
    bar.setAttribute('aria-hidden', String(!show));
    bar.inert = !show;
    document.body.classList.toggle('has-bar', show);
  };

  const heroObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry) return;
      heroVisible = entry.isIntersecting;
      render();
    },
    { threshold: 0 },
  );
  heroObserver.observe(heroCta);

  if (stops.length > 0) {
    const visible = new Set<Element>();
    const stopObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        stopVisible = visible.size > 0;
        render();
      },
      { threshold: 0 },
    );
    stops.forEach((el) => stopObserver.observe(el));
  }

  document.addEventListener('gallery:open', () => {
    dialogOpen = true;
    render();
  });
  document.addEventListener('gallery:close', () => {
    dialogOpen = false;
    render();
  });

  mobile.addEventListener('change', render);
  render();
}
