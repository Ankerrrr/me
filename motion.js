(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const selectors = [
    '#profile-name', '.profile-bio > p', '.profile-facts > div',
    '.profile-highlights > li', '.profile-links > a',
    '.certifications-container > h2', '.certification-card', '.projects-heading',
    '.project-feature-copy', '.project-prototype', '.project-demo-image',
    '.project-video-gallery > a', '.project-tech > h4', '.project-tech-item',
    '.project-app-heading', '.app-demo-intro', '.app-phone', '.app-demo-guide',
    '.project-awards > h4', '.project-award-card', '.campus-partnership',
    '.campus-data > h4', '.campus-data > h5', '.campus-data-sources > li',
    '.campus-data-flow > li', '.campus-test-video > h4',
    '.campus-pose-grid > figure', '.campus-test-video > video',
    '.timeline-heading', '.year-divider > div', '.timeline-end', 'footer',
  ];
  let observer;
  const targets = [...document.querySelectorAll(selectors.join(','))];

  function show(element) {
    element.classList.remove('motion-pending');
    observer?.unobserve(element);
  }

  function configure() {
    observer?.disconnect();
    targets.forEach(show);
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) show(entry.target);
      }
    }, { threshold: 0, rootMargin: '0px 0px 100px 0px' });

    for (const element of targets) {
      // Never hide anything the visitor can already see, including after resize.
      if (element.dataset.motionSeen || element.getBoundingClientRect().top < innerHeight + 24) continue;
      const siblings = [...element.parentElement.children].filter(sibling => sibling.matches(selectors.join(',')));
      element.style.setProperty('--motion-delay', `${Math.min(siblings.indexOf(element), 3) * 70}ms`);
      element.classList.add('motion-item', 'motion-pending');
      element.dataset.motionSeen = 'true';
      observer.observe(element);
    }
  }

  document.addEventListener('focusin', event => {
    const element = event.target.closest('.motion-item');
    if (element) show(element);
  });
  // Fragment navigation and browser Find can reveal content without a scroll animation.
  window.addEventListener('beforeprint', () => targets.forEach(show));
  reducedMotion.addEventListener('change', configure);
  configure();

  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  let frame = null;
  function paintProgress() {
    frame = null;
    const distance = document.documentElement.scrollHeight - innerHeight;
    progress.style.setProperty('--reading-progress', distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0);
  }
  function scheduleProgress() {
    if (frame === null) frame = requestAnimationFrame(paintProgress);
  }
  window.addEventListener('scroll', scheduleProgress, { passive: true });
  window.addEventListener('resize', scheduleProgress, { passive: true });
  window.addEventListener('load', scheduleProgress, { once: true });
  if ('ResizeObserver' in window) new ResizeObserver(scheduleProgress).observe(document.body);
  scheduleProgress();
})();
