document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
      });
    }
  });
  