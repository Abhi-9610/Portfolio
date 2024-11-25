// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      
      target.scrollIntoView({ behavior: 'smooth' });
      
      // Highlight active link
      document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Fade in sections as they come into view
  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
  
    document.querySelectorAll('section').forEach(section => {
      if (section.offsetTop <= scrollPosition + 100) {
        section.classList.add('visible');
      }
    });
  });
  