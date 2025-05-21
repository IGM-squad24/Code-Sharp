document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function () {
      navList.classList.toggle('active');
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
        if (navList.classList.contains('active')) {
          navList.classList.remove('active');
        }
      });
    });
    
    // Background Image Slider for Hero Section
    const heroBg = document.getElementById('hero-bg');
    // List of background image URLs (using your provided images)
    const bgImages = [
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1624526808886-66d692cad486?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://media.istockphoto.com/id/2196257923/photo/abstract-view-of-blue-translucent-acrylic-sheets-in-dynamic-arrangement.webp?a=1&b=1&s=612x612&w=0&k=20&c=RVjJIyXJUhpTjjW6_nhgg8grYiiDjH0qgnNWgQItSB0=",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ];
    
    let current = 0;
    // Preload images (optional)
    bgImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    function changeBackground() {
      heroBg.style.opacity = 0;
      setTimeout(() => {
        heroBg.style.backgroundImage = `url('${bgImages[current]}')`;
        heroBg.style.opacity = 1;
        current = (current + 1) % bgImages.length;
      }, 1000);
    }
    
    // Initialize background and change every 8 seconds
    heroBg.style.backgroundImage = `url('${bgImages[current]}')`;
    current = (current + 1) % bgImages.length;
    setInterval(changeBackground, 8000);
  });
  