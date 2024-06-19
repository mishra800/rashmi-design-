function initMap() {
  // Specify coordinates for your map
  var location = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates

  // Create a map centered at the specified location
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location
  });

  // Add a marker at the specified location
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "New York City"
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var contactForm = document.getElementById("contactForm");
  var confirmationDiv = document.getElementById("confirmation");
  var submitBtn = document.getElementById("submitBtn");
  var clearBtn = document.getElementById("clearBtn");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform form validation
    if (validateForm()) {
      // Simulate form submission (replace with actual submission logic)
      // For demonstration purposes, display confirmation message with animation and reset form
      confirmationDiv.classList.remove("hidden");
      confirmationDiv.classList.add("fadeIn");
      contactForm.reset();
      setTimeout(function() {
        confirmationDiv.classList.remove("fadeIn");
      }, 2000); // Animation duration
    }
  });

  clearBtn.addEventListener("click", function() {
    contactForm.reset();
    confirmationDiv.classList.add("hidden");
  });

  // Function to validate form fields
  function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all required fields.");
      return false;
    }

    // You can add more advanced validation logic here (e.g., email format)

    return true;
  }
});


function toggleNav() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form data
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // Construct WhatsApp message
      let whatsappMessage = `Name: ${name}%0A`;
      whatsappMessage += `Email: ${email}%0A`;
      whatsappMessage += `Phone: ${phone ? phone : 'Not provided'}%0A`;
      whatsappMessage += `Subject: ${subject ? subject : 'Not specified'}%0A`;
      whatsappMessage += `Message: ${message}`;

      // URL to open WhatsApp with prefilled message
      const whatsappNumber = "+918099981871";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Open WhatsApp in a new tab
      window.open(whatsappURL, '_blank');

      // Clear form after submission (optional)
      form.reset();
  });

  // Clear form button
  const clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", function() {
      form.reset();
  });
});
