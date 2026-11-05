(() => {
  'use strict';

  const doc = document;
  const qs = (selector, scope = doc) => scope.querySelector(selector);
  const qsa = (selector, scope = doc) => Array.from(scope.querySelectorAll(selector));

  const header = qs('[data-header]');
  const progress = qs('[data-progress]');
  const navLinks = qsa('[data-nav]');
  const sections = qsa('[data-section]');

  const menu = qs('[data-menu]');
  const menuToggle = qs('[data-menu-toggle]');
  const menuClose = qs('[data-menu-close]');
  const menuLinks = qsa('[data-menu-link]');
  const main = qs('main');
  const footer = qs('footer');
  const html = doc.documentElement;
  const body = doc.body;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const supportsInert = 'inert' in HTMLElement.prototype;

  let isMenuOpen = false;
  let menuReturnFocus = null;

  /* ------------------------------------------------------------------
     Scroll lock
     ------------------------------------------------------------------ */
  const lockPage = (locked) => {
    body.classList.toggle('is-locked', locked);
    html.classList.toggle('is-locked', locked);
  };

  /* ------------------------------------------------------------------
     Background inert helpers
     ------------------------------------------------------------------ */
  const setInert = (element, inert) => {
    if (!element) return;
    if (supportsInert) {
      element.inert = inert;
    } else if (inert) {
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.removeAttribute('aria-hidden');
    }
  };

  const setBackgroundInert = (inert) => {
    [header, main, footer].forEach((element) => setInert(element, inert));
  };

  /* ------------------------------------------------------------------
     Focus trap
     ------------------------------------------------------------------ */
  const getFocusable = (container) =>
    Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => {
      if (element.hidden) return false;
      if (element.getAttribute('aria-hidden') === 'true') return false;
      return Boolean(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    });

  const trapTab = (event, container) => {
    if (event.key !== 'Tab') return;
    const items = getFocusable(container);
    if (!items.length) {
      event.preventDefault();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    if (!container.contains(doc.activeElement)) {
      event.preventDefault();
      first.focus();
      return;
    }
    if (event.shiftKey && doc.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && doc.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  /* ------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------ */
  const openMenu = () => {
    if (!menu || isMenuOpen) return;
    isMenuOpen = true;
    menuReturnFocus = doc.activeElement instanceof HTMLElement ? doc.activeElement : menuToggle;
    menu.hidden = false;
    lockPage(true);
    // Keep the header usable until after focus has moved into the menu;
    // making the focused toggle inert first can cause the browser to drop
    // the focus move.
    setInert(main, true);
    setInert(footer, true);
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'MENU 关闭菜单');
    const firstLink = menuLinks[0];
    if (firstLink) firstLink.focus({ preventScroll: true });
    setInert(header, true);
  };

  const closeMenu = (restoreFocus = true) => {
    if (!menu || !isMenuOpen) return;
    isMenuOpen = false;
    menu.hidden = true;
    setBackgroundInert(false);
    lockPage(false);
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'MENU 打开菜单');
    if (restoreFocus) {
      const target = menuReturnFocus || menuToggle;
      target.focus({ preventScroll: true });
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (isMenuOpen) closeMenu();
      else openMenu();
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', () => closeMenu());
  }

  if (menuLinks.length) {
    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        // Close and return focus to the menu button; the anchor still scrolls.
        closeMenu();
      });
    });
  }

  doc.addEventListener('keydown', (event) => {
    if (isMenuOpen) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }
      trapTab(event, menu);
    }
  });

  window.addEventListener('resize', () => {
    if (isMenuOpen && window.innerWidth > 900) closeMenu(false);
  });

  /* ------------------------------------------------------------------
     Header, progress bar, active section
     ------------------------------------------------------------------ */
  const setActiveSection = (current) => {
    navLinks.forEach((link) => {
      const isActive = link.dataset.nav === current;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const updateOnScroll = () => {
    const y = window.scrollY || html.scrollTop || 0;
    if (header) header.classList.toggle('is-scrolled', y > 16);

    if (progress) {
      const max = html.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(Math.max(y / max, 0), 1) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }

    const offset = (header ? header.offsetHeight : 64) + window.innerHeight * 0.25;
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (y + offset >= top && y + offset < bottom) current = section.dataset.section || '';
    });

    if (!current && y + window.innerHeight >= html.scrollHeight - 4 && sections.length) {
      current = sections[sections.length - 1].dataset.section || '';
    }

    setActiveSection(current);
  };

  const requestScrollUpdate = () => {
    updateOnScroll();
  };

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate);
  updateOnScroll();

  /* ------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------ */
  const revealItems = qsa('.reveal');
  const showAllReveals = () => {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  };

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    showAllReveals();
  } else {
    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    revealItems.forEach((item) => observer.observe(item));

    // Safety net: if the observer never fires for above-the-fold content,
    // reveal what is currently visible after a short delay.
    window.setTimeout(() => {
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) item.classList.add('is-visible');
      });
    }, 900);
  }

  reduceMotion.addEventListener?.('change', (event) => {
    if (event.matches) showAllReveals();
  });

  /* ------------------------------------------------------------------
     Qingdao time
     ------------------------------------------------------------------ */
  const timeElement = qs('[data-qingdao-time]');
  if (timeElement) {
    const formatter = new Intl.DateTimeFormat('zh-CN', {
      timeZone: 'Asia/Shanghai',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    });

    const updateTime = () => {
      try {
        timeElement.textContent = formatter.format(new Date());
      } catch (error) {
        timeElement.textContent = '';
      }
    };

    updateTime();
    window.setInterval(updateTime, 60 * 1000);
  }

  /* ------------------------------------------------------------------
     Keep an accessible name for the menu button in sync if the DOM
     is mutated by other scripts.
     ------------------------------------------------------------------ */
  if (menuToggle && menu) {
    menuToggle.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
  }
})();
