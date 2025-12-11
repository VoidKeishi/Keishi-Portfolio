/**
 * Scroll-triggered animations using Intersection Observer
 * Elements with data-animate attribute will animate when entering viewport
 */

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (animatedElements.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optionally unobserve after animation triggers
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Re-initialize on Astro page transitions (if using View Transitions)
document.addEventListener('astro:page-load', initScrollAnimations);

// Export for potential manual use
export { initScrollAnimations };


