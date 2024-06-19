'use strict';


document.addEventListener("DOMContentLoaded", function() {
  const modal = document.querySelector('[data-modal]');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

  // Function to close modal
  function closeModal() {
    modal.classList.add('closed');
    sessionStorage.setItem('modalShown', 'true');  // Store the flag in sessionStorage
  }

  // Attach event listeners to close the modal
  modalCloseOverlay.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('click', closeModal);

  // Check if the modal was already shown in the current session
  if (sessionStorage.getItem('modalShown') !== 'true') {
    modal.classList.remove('closed');  // Show the modal
  } else {
    modal.classList.add('closed'); 
  }
});

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');
const dontWantBtn = document.querySelector('[data-dont-want]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

dontWantBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
  // You can add additional logic here to stop the notifications permanently, such as setting a flag in localStorage or sessionStorage.
});



// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}


// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  let currentIndex = 0;

  function slide() {
      currentIndex++;
      if (currentIndex >= images.length) {
          currentIndex = 0;
      }
      updateSlider();
  }

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(slide, 3000); // Change image every 3 seconds (adjust as needed)
});


//////whatapp pop////
function closePopup() {
  document.getElementById('whatsapp-popup').style.display = 'none';
}

window.onload = function() {
  // Show the pop-up when the page loads
  document.getElementById('whatsapp-popup').style.display = 'block';
};


