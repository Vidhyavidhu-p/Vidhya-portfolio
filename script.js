
    // Get references to the hamburger icon and navigation links
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Optional: Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
 