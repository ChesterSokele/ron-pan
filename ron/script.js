// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== HERO "BOOK NOW" BUTTON =====
const bookNowBtn = document.querySelector('.hero .btn-gold');
if (bookNowBtn) {
  bookNowBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const toursSection = document.querySelector('#tours');
    if (toursSection) {
      toursSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

// ===== CONTACT FORM (demo handler) =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[placeholder="First Name"]')?.value || '';
    const email = this.querySelector('input[placeholder="Email"]')?.value || '';
    const msg = this.querySelector('textarea')?.value || '';

    if (name.trim() === '' || email.trim() === '' || msg.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    alert('Thank you for your message, ' + name + '! We\'ll get back to you soon.');
    this.reset();
  });
}

// ===== CARD ANIMATION ON SCROLL (enhancement) =====
const cards = document.querySelectorAll('.tour-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  observer.observe(card);
});

console.log('Ron_Pan Tour & Safari — ready!');