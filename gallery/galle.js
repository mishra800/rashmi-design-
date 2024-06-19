document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const nav = document.querySelector('nav');

  menuIcon.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
});
document.getElementById('menu-icon').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});
