function toggleNav() {
  var navLinks = document.querySelector('.nav-links');
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    navLinks.style.display = 'flex';
  } else {
    navLinks.style.display = 'none';
  }
}
function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    // Animation for navigation links
    var links = document.querySelectorAll('.nav-links li');
    links.forEach(function(link, index) {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    // Animation for toggle button
    var toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.classList.toggle('active');
}

// JavaScript animation for navigation links fade in
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-links li');
    links.forEach(function(link, index) {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    });
});
function toggleNav() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');

  // Animation for navigation links
  var links = document.querySelectorAll('.nav-links li');
  links.forEach(function(link, index) {
      if (link.style.animation) {
          link.style.animation = '';
      } else {
          link.style.animation = `navLinkSlideIn 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
  });

  // Animation for toggle button
  var toggleBtn = document.querySelector('.toggle-btn');
  toggleBtn.classList.toggle('active');
  toggleBtn.classList.toggle('rotate'); // Added
}

// JavaScript animation for navigation links slide in
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.nav-links li');
  links.forEach(function(link, index) {
      link.style.animation = `navLinkSlideIn 0.5s ease forwards ${index / 7 + 0.5}s`;
  });
});
// JavaScript to randomly change the logo image source
function changeLogoImage() {
  var logoImg = document.querySelector('.logo img');
  var randomIndex = Math.floor(Math.random() * logoImages.length);
  var randomImage = logoImages[randomIndex];
  logoImg.src = randomImage;
}

// Array of logo images
var logoImages = [
  '/assets/images/logo/1.png',
  '/assets/images/logo/2.png',
  '/assets/images/logo/3.png'
];

// Change logo image every 5 seconds
setInterval(changeLogoImage, 5000);
