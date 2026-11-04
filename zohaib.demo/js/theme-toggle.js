/* Theme toggle — vanilla port of Magic UI AnimatedThemeToggler.
   Reads state from <html> class, saves to the same key the inline script in index.html reads. */
(() => {
  const KEY = 'zohaib-theme';
  const DURATION = 420;
  const root = document.documentElement;
  const SUN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
  let busy = false;

  const isDark = () => root.classList.contains('dark');

  function apply(theme) {
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    root.style.colorScheme = theme;
    const meta = document.getElementById('theme-color-meta');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0A0A0B' : '#EFEDEA');
    try { localStorage.setItem(KEY, theme); } catch (e) { /* storage blocked */ }
  }

  function render(btn) {
    const dark = isDark();
    btn.innerHTML = dark ? SUN : MOON;
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.setAttribute('aria-pressed', String(dark));
  }

  function toggle(btn) {
    if (busy) return;
    const next = isDark() ? 'light' : 'dark';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduce) { apply(next); return; }
    busy = true;
    const vt = document.startViewTransition(() => apply(next));
    vt.ready.then(() => {
      const { top, left, width, height } = btn.getBoundingClientRect();
      const x = left + width / 2, y = top + height / 2;
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: DURATION, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
    vt.finished.finally(() => { busy = false; });
  }

  function mount() {
    const actions = document.querySelector('.topnav .nav-actions');
    if (!actions) return false;
    if (actions.querySelector('.theme-toggle')) return true;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle';
    btn.setAttribute('data-testid', 'theme-toggle-button');
    render(btn);
    btn.addEventListener('click', () => toggle(btn));
    actions.insertBefore(btn, actions.firstChild);
    new MutationObserver(() => render(btn)).observe(root, { attributes: true, attributeFilter: ['class'] });
    return true;
  }

  const obs = new MutationObserver(() => { mount(); });
  obs.observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
  window.setTimeout(() => obs.disconnect(), 20000);
})();
