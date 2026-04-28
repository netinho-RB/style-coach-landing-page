import './css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Logic
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileCloseBtn = document.querySelector('.mobile-close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

  const openMenu = () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', openMenu);
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMenu);
  }

  // Close menu when clicking a nav link
  mobileNavItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // ===== Scroll Reveal Logic =====
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target); // fire once
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach(el => revealObserver.observe(el));
});
