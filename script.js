(() => {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  const cards = [...timeline.querySelectorAll('.timeline-card')];
  const milestones = [...timeline.querySelectorAll('.milestone')];
  const yearDividers = [...timeline.querySelectorAll('.year-divider')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = null;
  let observer = null;
  let previousMask = '';

  function updateScroll() {
    frame = null;
    const viewportHeight = window.innerHeight;
    const readingPosition = viewportHeight * 0.65;
    const rect = timeline.getBoundingClientRect();
    const trackHeight = Math.max(0, rect.height - 22);
    const progress = Math.min(trackHeight, Math.max(0, readingPosition - rect.top - 22));
    timeline.style.setProperty('--timeline-progress', `${progress}px`);

    // Cut transparent gaps in both track layers instead of painting over the headings.
    const stops = ['#000 0px'];
    for (const divider of yearDividers) {
      const dividerRect = divider.getBoundingClientRect();
      const start = Math.max(0, dividerRect.top - rect.top - 22 - 8);
      const end = Math.max(start, dividerRect.bottom - rect.top - 22 + 8);
      stops.push(`#000 ${start}px`, `transparent ${start}px`, `transparent ${end}px`, `#000 ${end}px`);
    }
    stops.push('#000 100%');
    const mask = `linear-gradient(to bottom, ${stops.join(', ')})`;
    if (mask !== previousMask) {
      timeline.style.setProperty('--timeline-mask', mask);
      previousMask = mask;
    }

    for (const milestone of milestones) {
      milestone.classList.toggle('is-reached', milestone.getBoundingClientRect().top <= readingPosition);
    }

    for (const card of cards) {
      // Measure the stationary grid cell, so animation cannot feed back into its position.
      const cell = card.closest('.internship-continuation') || card.closest('.timeline-item');
      const cellRect = cell.getBoundingClientRect();
      const visible = cellRect.bottom > -100 && cellRect.top < viewportHeight + 100;
      const offset = reducedMotion.matches || !visible ? 0 : Math.max(-12, Math.min(12, (cellRect.top - viewportHeight * 0.5) * 0.035));
      card.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
    }
  }

  function scheduleUpdate() {
    if (frame === null) frame = requestAnimationFrame(updateScroll);
  }

  function configureMotion() {
    observer?.disconnect();
    timeline.classList.remove('motion-enabled');
    for (const card of cards) {
      const column = parseInt(getComputedStyle(card).gridColumnStart, 10);
      card.style.setProperty('--reveal-x', column === 1 ? '-40px' : '40px');
    }
    if (!reducedMotion.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      }, { threshold: 0, rootMargin: '0px 0px 100px 0px' });
      for (const card of cards) observer.observe(card);
      timeline.classList.add('motion-enabled');
    }
    scheduleUpdate();
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', configureMotion, { passive: true });
  window.addEventListener('load', scheduleUpdate, { once: true });
  reducedMotion.addEventListener('change', configureMotion);
  if ('ResizeObserver' in window) new ResizeObserver(scheduleUpdate).observe(timeline);
  configureMotion();
})();

(() => {
  const hero = document.querySelector('.sunset-hero');
  const typed = document.getElementById('hero-typed');
  if (!hero || !typed) return;
  const name = 'ANKE HUANG';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timer;
  function finish() {
    clearTimeout(timer);
    typed.textContent = name;
    hero.classList.remove('is-typing');
  }
  if (reducedMotion.matches) finish();
  else {
    hero.classList.add('is-typing');
    typed.textContent = '';
    hero.classList.add('typewriter-ready');
    let length = 0;
    function typeNext() {
      typed.textContent = name.slice(0, ++length);
      if (length < name.length) timer = setTimeout(typeNext, 130);
      else finish();
    }
    timer = setTimeout(typeNext, 500);
  }
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) finish();
  });
})();

(() => {
  const hero = document.querySelector('.sunset-hero');
  if (!hero) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let target = 0;
  let current = 0;
  let frame = null;
  let height = hero.getBoundingClientRect().height;

  function paint() {
    frame = null;
    current = reducedMotion.matches ? 0 : current + (target - current) * 0.12;
    if (Math.abs(target - current) < 0.0005) current = target;
    const intensity = window.innerWidth <= 700 ? 0.65 : 1;
    const distance = current * height * intensity;
    const scale = current * intensity;
    hero.style.setProperty('--far-y', `${(distance * 0.32).toFixed(2)}px`);
    hero.style.setProperty('--mid-y', `${(distance * 0.2).toFixed(2)}px`);
    hero.style.setProperty('--near-y', `${(distance * 0.09).toFixed(2)}px`);
    hero.style.setProperty('--glow-y', `${(distance * 0.38).toFixed(2)}px`);
    hero.style.setProperty('--far-scale', (1 + scale * 0.1).toFixed(4));
    hero.style.setProperty('--mid-scale', (1 + scale * 0.14).toFixed(4));
    hero.style.setProperty('--near-scale', (1 + scale * 0.2).toFixed(4));
    hero.style.setProperty('--glow-scale', (1 + scale * 0.18).toFixed(4));
    hero.style.setProperty('--hero-fade', Math.max(0, Math.min(1, (current - 0.15) / 0.65)).toFixed(4));
    hero.classList.toggle('is-parallax-active', !reducedMotion.matches && target < 1 && !document.hidden);
    if (Math.abs(target - current) >= 0.0005 && !document.hidden) frame = requestAnimationFrame(paint);
  }

  function updateTarget() {
    const rect = hero.getBoundingClientRect();
    height = rect.height;
    target = reducedMotion.matches ? 0 : Math.max(0, Math.min(1, -rect.top / Math.max(1, height)));
    if (frame === null && !document.hidden) frame = requestAnimationFrame(paint);
  }

  window.addEventListener('scroll', updateTarget, { passive: true });
  window.addEventListener('resize', updateTarget, { passive: true });
  window.addEventListener('load', updateTarget, { once: true });
  reducedMotion.addEventListener('change', updateTarget);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      hero.classList.remove('is-parallax-active');
    } else updateTarget();
  });
  updateTarget();
})();

// Scroll-linked depth keeps the page moving naturally without pinning sections.
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const groups = [
    ['#profile-name', 10],
    ['.profile-bio', 6],
    ['.profile-photo', -28],
    ['.project-prototype', -20],
    ['.project-demo-image', 20],
  ];
  const layers = groups.flatMap(([selector, amplitude]) =>
    [...document.querySelectorAll(selector)].map(element => ({
      element,
      anchor: element.closest('.profile-container, .project-feature-grid') || element.parentElement,
      amplitude,
    }))
  );
  let frame = null;
  function paint() {
    frame = null;
    const viewport = window.innerHeight;
    const mobile = window.innerWidth <= 800;
    for (const { element, anchor, amplitude } of layers) {
      // Measure stationary containers so movement never feeds back into itself.
      const rect = anchor.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1,
        (viewport / 2 - rect.top - rect.height / 2) / ((viewport + rect.height) / 2)
      ));
      const distance = reducedMotion.matches ? 0 : progress * amplitude * (mobile ? 0.35 : 1);
      element.style.setProperty('--scroll-depth-y', `${distance.toFixed(2)}px`);
      element.classList.toggle('scroll-depth', !reducedMotion.matches);
    }
  }
  function schedule() {
    if (frame === null) frame = requestAnimationFrame(paint);
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('load', schedule, { once: true });
  reducedMotion.addEventListener('change', schedule);
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(schedule);
    for (const anchor of new Set(layers.map(layer => layer.anchor))) observer.observe(anchor);
  }
  schedule();
})();

// Contact dialog keeps the mailto link as a no-JavaScript fallback.
(() => {
  const trigger = document.querySelector('[data-email-dialog]');
  const dialog = document.querySelector('#email-dialog');
  if (!trigger || !dialog || !dialog.showModal) return;
  const address = dialog.querySelector('#contact-email');
  const copy = dialog.querySelector('[data-copy-email]');
  const status = dialog.querySelector('.email-dialog-status');
  trigger.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (dialog.open) return;
    status.textContent = '';
    copy.textContent = '複製信箱';
    dialog.showModal();
    copy.focus({ preventScroll: true });
  });
  copy.addEventListener('click', async () => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(address.value);
      copied = true;
    } catch {
      address.focus();
      address.select();
      try { copied = document.execCommand('copy'); } catch { /* Keep the address selected for manual copying. */ }
    }
    copy.textContent = copied ? '已複製 ✓' : '複製信箱';
    status.textContent = copied ? '信箱已複製到剪貼簿。' : '請選取信箱文字，使用 Ctrl+C 或長按複製。';
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => trigger.focus({ preventScroll: true }));
})();

// Native dialog keeps keyboard focus inside the player and supports Escape.
(() => {
  const triggers = document.querySelectorAll('[data-video-modal]');
  if (!triggers.length) return;
  let activeTrigger;
  const modal = document.createElement('dialog');
  modal.className = 'project-video-modal';
  modal.setAttribute('aria-labelledby', 'video-modal-title');
  modal.innerHTML = `
    <div class="video-modal-header">
      <h2 id="video-modal-title">智慧搖椅｜完整介紹</h2>
      <button type="button" class="video-modal-close" aria-label="關閉影片">×</button>
    </div>
    <div class="video-inline-player"></div>
    <a class="video-inline-fallback" target="_blank" rel="noopener noreferrer">在 YouTube 觀看 ↗</a>`;
  document.body.append(modal);
  const frame = modal.querySelector('.video-inline-player');
  let previousOverflow;
  document.addEventListener('languagechange', () => {
    if (!activeTrigger || !modal.open) return;
    const title = window.siteLanguage.translate(`智慧搖椅｜${activeTrigger.dataset.videoTitle}`);
    modal.querySelector('#video-modal-title').textContent = title;
    const player = frame.querySelector('iframe');
    if (player) player.title = title;
  });
  triggers.forEach(trigger => trigger.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    activeTrigger = trigger;
    modal.querySelector('#video-modal-title').textContent = `智慧搖椅｜${trigger.dataset.videoTitle}`;
    modal.querySelector('.video-inline-fallback').href = trigger.href;
    const player = document.createElement('iframe');
    player.width = '560';
    player.height = '315';
    player.src = trigger.dataset.videoModal;
    player.title = `智慧搖椅｜${trigger.dataset.videoTitle}`;
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    player.allowFullscreen = true;
    frame.replaceChildren(player);
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modal.showModal();
  }));
  modal.querySelector('.video-modal-close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', event => {
    const bounds = modal.getBoundingClientRect();
    if (event.target === modal && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) modal.close();
  });
  modal.addEventListener('close', () => {
    frame.replaceChildren();
    document.body.style.overflow = previousOverflow;
    activeTrigger?.focus({ preventScroll: true });
  });
})();
