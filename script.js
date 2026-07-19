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

// ===== WEB3FORMS CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    // Get submit button and show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Clear previous status
    formStatus.innerHTML = '';
    formStatus.style.color = 'var(--gold)';
    
    try {
      const formData = new FormData(this);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! We\'ll get back to you soon.';
        formStatus.style.color = '#4caf50';
        this.reset();
      } else {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + error.message;
      formStatus.style.color = '#f44336';
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// ===== CARD ANIMATION ON SCROLL =====
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

// ===== GALLERY ITEM CLICK (Lightbox effect) =====
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', function () {
    const imgSrc = this.querySelector('img').src;
    // Simple lightbox: open image in new tab
    window.open(imgSrc, '_blank');
  });
});

console.log('Ron_Pan Tour & Safari — ready!');
