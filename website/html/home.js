// ========== SMOOTH SCROLL TO SECTION ==========
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ========== SCROLLREVEAL ANIMATIONS ==========
ScrollReveal().reveal('.hero-content', { delay: 200, origin: 'left', distance: '60px' });
ScrollReveal().reveal('.hero-image', { delay: 400, origin: 'right', distance: '60px' });
ScrollReveal().reveal('.about-image', { delay: 200, origin: 'left', distance: '60px' });
ScrollReveal().reveal('.about-text', { delay: 400, origin: 'right', distance: '60px' });
ScrollReveal().reveal('.feature', { interval: 200, origin: 'bottom', distance: '40px' });

// ========== THEME TOGGLE ==========
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    toggleButton.textContent = '';
  } else {
    toggleButton.textContent = '';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    toggleButton.textContent = isDark ? '' : '';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
ScrollReveal().reveal('.feature', { interval: 200, origin: 'bottom', distance: '40px' });
// Animate each feature card with scroll reveal
ScrollReveal().reveal('.feature', {
  interval: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  easing: 'ease-out',
  reset: false
});

