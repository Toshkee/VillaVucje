/** Accessible mobile navigation: toggle, Escape to close, close on link click and outside click. */
export function initNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const label = toggle?.querySelector<HTMLElement>('[data-menu-label]');
  if (!toggle || !nav || !label) return;

  const openText = toggle.dataset.labelOpen ?? 'Menu';
  const closeText = toggle.dataset.labelClose ?? 'Close menu';

  const setOpen = (open: boolean): void => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    label.textContent = open ? closeText : openText;
  };

  const isOpen = (): boolean => toggle.getAttribute('aria-expanded') === 'true';

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  nav.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest('[data-nav-link]')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!isOpen()) return;
    const target = event.target as Node | null;
    if (target && !nav.contains(target) && !toggle.contains(target)) setOpen(false);
  });

  // Reset when growing past the desktop breakpoint so the menu state does not leak.
  const desktop = window.matchMedia('(min-width: 60em)');
  desktop.addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}
