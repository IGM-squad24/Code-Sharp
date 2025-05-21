document.addEventListener('DOMContentLoaded', function() {
    // Tab Switch Logic
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
  
    loginTab.addEventListener('click', function() {
      loginTab.classList.add('active');
      signupTab.classList.remove('active');
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
    });
  
    signupTab.addEventListener('click', function() {
      signupTab.classList.add('active');
      loginTab.classList.remove('active');
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
    });
  
    // Handle Login Submission
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      alert(`Welcome back, ${username}!`);
    });
  
    // Handle Sign Up Submission
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('signupUsername').value;
      alert(`Account created for ${username}!`);
    });
  
    // Background Image Slider for Authentication Page
    const authBg = document.getElementById('auth-bg');
    const bgImages = [
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=600&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&auto=format&fit=crop&q=60"
    ];
    
    let current = 0;
    // Preload images
    bgImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    function changeBackground() {
      authBg.style.opacity = 0;
      setTimeout(() => {
        authBg.style.backgroundImage = `url('${bgImages[current]}')`;
        authBg.style.opacity = 1;
        current = (current + 1) % bgImages.length;
      }, 1000);
    }
    
    // Initialize background and change every 8 seconds
    authBg.style.backgroundImage = `url('${bgImages[current]}')`;
    current = (current + 1) % bgImages.length;
    setInterval(changeBackground, 8000);
  });
  