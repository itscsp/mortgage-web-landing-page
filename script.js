document
  .getElementById('navbar-toggler')
  .addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
  });

// Function to initialize AOS
function initializeAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      // once: true,
      easing: 'ease',
      offset: 100,
      delay: 0,
      anchorPlacement: 'top-bottom',
    });
  }
}

// Main initialization sequence
document.addEventListener('DOMContentLoaded', function () {
  initializeAOS();
});
