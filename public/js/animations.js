// animations.js

document.addEventListener('DOMContentLoaded', function() {
  
  // Animate Navbar entry
  gsap.from('.navbar', {
    duration: 1,
    y: '-100%',
    ease: 'bounce',
  });

  // Animate main content (articles, news feed)
  gsap.from('.container', {
    duration: 1,
    opacity: 0,
    delay: 0.5,
    ease: 'power2.inOut',
  });

  // Animate article titles
  gsap.from('.article-header', {
    duration: 1,
    x: '-100%',
    opacity: 0,
    delay: 0.3,
    ease: 'power2.out',
  });

  // Animate comment section entry
  gsap.from('.comment-section', {
    duration: 1,
    y: '50%',
    opacity: 0,
    delay: 1,
    ease: 'power2.out',
  });

  // Animate buttons for smoother interaction
  document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { duration: 0.2, scale: 1.05 });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, { duration: 0.2, scale: 1 });
    });
  });

});
