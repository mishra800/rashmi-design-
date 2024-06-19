document.addEventListener("DOMContentLoaded", function() {
  function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showPopup();
  }
  
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('.count');
    cartCountElements.forEach(element => {
      element.textContent = cart.length;
    });
  }

  function generateRandomStars() {
    const minStars = 3;
    const maxStars = 5;
    const starRating = Math.floor(Math.random() * (maxStars - minStars + 1) + minStars);
    let stars = '';
    for (let i = 0; i < starRating; i++) {
      stars += '<ion-icon name="star" style="color: gold;"></ion-icon>';
    }
    for (let j = starRating; j < maxStars; j++) {
      stars += '<ion-icon name="star-outline" style="color: gold;"></ion-icon>';
    }
    return stars;
  }

  function showPopup() {
    const popup = document.getElementById('add-to-cart-popup');
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 2000); // Popup will disappear after 2 seconds
  }

  // Navigate to the cart page
  document.getElementById('go-to-cart').addEventListener('click', function() {
    window.location.href = 'cart.html'; // Replace 'cart.html' with your actual cart page URL
  });

  fetch('../data/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load product details.');
    }
    return response.json();
  })
  .then(data => {
    const menProducts = data.filter(product => product.category === 'men');
    const womenProducts = data.filter(product => product.category === 'women');
    
    renderProducts(menProducts, 'mens');
    renderProducts(womenProducts, 'womens');
  })
  .catch(error => {
    console.error('Error loading product details:', error);
  });

function renderProducts(products, category) {
  const productList = document.getElementById(`${category}-product-list`);
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'showcase';
    const stars = generateRandomStars();
    productDiv.innerHTML = `
      <a href="product-details.html?id=${product.id}" class="showcase-link">
        <div class="showcase-banner">
          <img src="${product.image}" alt="${product.name}" class="product-img default" width="300">
        </div>
        <div class="showcase-content">
          <a href="product-details.html?id=${product.id}" class="showcase-category">${product.name}</a>
          <h3><a href="product-details.html?id=${product.id}" class="showcase-title">${product.description}</a></h3>
          <div class="showcase-rating">${stars}</div>
          <div class="price-box">
            <p class="price">₹${(product.price).toFixed(2)}</p>
          </div>
        </div>
      </a>
    `;

    const btn = document.createElement('button');
    btn.className = 'btn-action add-to-cart-btn';
    btn.innerHTML = '<ion-icon name="cart-outline"></ion-icon> Add to Cart';
    btn.addEventListener('click', () => addToCart(product));

    productDiv.appendChild(btn);
    productList.appendChild(productDiv);
  });
  updateCartCount();
}

});


////////imahe /////////
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  let imageWidth = images[0].clientWidth;
  let totalImages = images.length;

  let counter = 0;

  function slide() {
    counter++;
    if (counter === totalImages) {
      counter = 0;
    }
    slider.style.transform = `translateX(-${imageWidth * counter}px)`;
  }

  function updateDimensions() {
    imageWidth = images[0].clientWidth;
    slider.style.transition = 'none'; // Disable transition to prevent sudden movement
    slider.style.transform = `translateX(-${imageWidth * counter}px)`;
    setTimeout(() => {
      slider.style.transition = ''; // Re-enable transition after resizing
    });
  }

  window.addEventListener('resize', updateDimensions);

  setInterval(slide, 3000); // Change slides every 3 seconds (adjust as needed)
});
