function toggleNav() {
  var navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    navLinks.style.display = 'flex';
  } else {
    navLinks.style.display = 'none';
  }
}
