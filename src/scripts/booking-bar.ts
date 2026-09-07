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

  let heroPassed = false;
  let stopVisible = false;
  let dialogOpen = false;

  const render = (): void => {
    const show = mobile.matches && heroPassed && !stopVisible && !dialogOpen;
    bar.classList.toggle('is-visible', show);
    bar.setAttribute('aria-hidden', String(!show));
    bar.inert = !show;
    document.body.classList.toggle('has-bar', show);
  };

  const heroObserver = new IntersectionObserver(
    () => {
      // A CTA below the viewport has not been reached yet. Only show the
      // fixed bar once the visitor has scrolled past it, above the viewport.
      heroPassed = heroCta.getBoundingClientRect().bottom <= 0;
      render();
    },
    { threshold: 0 },
  );
  heroObserver.observe(heroCta);
  // Also observe the section so an anchor jump from before to after the CTA
  // updates the bar even when the button never intersects the viewport.
  const hero = heroCta.closest('.hero');
  if (hero) heroObserver.observe(hero);

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
