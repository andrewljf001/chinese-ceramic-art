// chinese-ceramic-art · main.js

// ============================
// Config — TODO: fill in your actual WhatsApp number
// ============================
const WA_NUMBER = 'YOUR_NUMBER'; // e.g. 8613800138000

document.addEventListener('DOMContentLoaded', () => {

  // Update all WhatsApp links dynamically
  if (WA_NUMBER !== 'YOUR_NUMBER') {
    document.querySelectorAll('[href*="wa.me/YOUR_NUMBER"]').forEach(el => {
      el.href = el.href.replace(/YOUR_NUMBER/g, WA_NUMBER);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Subtle fade-in on scroll (fitting the quiet brand aesthetic)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(
    '.product-card, .cat-item, .story-content, .section-header, .hero-content'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
    observer.observe(el);
  });

  // Collection page: category filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        document.querySelectorAll('.product-card').forEach(card => {
          if (cat === 'all' || card.dataset.cat === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
    // Auto-filter from URL param ?cat=xxx
    const urlCat = new URLSearchParams(window.location.search).get('cat');
    if (urlCat) {
      const matchBtn = document.querySelector(`.filter-btn[data-cat="${urlCat}"]`);
      if (matchBtn) matchBtn.click();
    }
  }

});
