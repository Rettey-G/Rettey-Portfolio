// Certifications Carousel Animation
const carousel = document.querySelector('.certifications-carousel');

let isScrolling;

carousel.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
  const skillLevels = document.querySelectorAll('.skill-level');

  skillLevels.forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.style.width = level + '%';
  });
});