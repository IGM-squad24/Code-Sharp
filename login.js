document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Retrieve form data (username and password)
      const username = document.getElementById('username').value;
      // Here you could integrate your actual login process.
      alert(`Welcome back, ${username}!`);
    });
  });
  