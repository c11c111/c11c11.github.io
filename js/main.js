/* ============================================================
   陈晋钦 · 个人主页  —  Interactions
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  // ---- Navbar scroll state ----
  const navbar = document.querySelector('.navbar');
  const toTop = document.getElementById('toTop');
  function onScroll() {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 60);
    if (toTop) toTop.classList.toggle('show', y > 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu ----
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  // ---- Active nav link ----
  const pages = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop() || 'index.html';
    if (href === pages) a.classList.add('active');
  });

  // ---- Back to top ----
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ---- Reveal on scroll ----
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ---- Animated counters ----
  const counters = document.querySelectorAll('.num[data-count]');
  if (counters.length) {
    const cObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = +el.getAttribute('data-count');
          const dur = 1600;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.firstChild.nodeValue = Math.floor(ease * target);
            if (p < 1) requestAnimationFrame(tick);
            else el.firstChild.nodeValue = target;
          }
          requestAnimationFrame(tick);
          cObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObs.observe(c));
  }

  // ---- Skill bars ----
  const bars = document.querySelectorAll('.bar > span[data-width]');
  if (bars.length) {
    const bObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.getAttribute('data-width');
          bObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b => bObs.observe(b));
  }

  // ---- Contact form (demo) ----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '✓ 消息已准备好';
      btn.style.background = '#10b981';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        form.reset();
      }, 2600);
      // 提示：静态站点无后端，真实发送请接入邮件或表单服务
    });
  }
});
