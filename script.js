"use strict";

// Products Section Button scroll
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const productContainer = document.querySelector('.product__image-container');

// Function to scroll left (previous)
prevBtn.addEventListener('click', function () {
  productContainer.scrollBy({
    left: -productContainer.offsetWidth, // Scroll by the width of the container
    behavior: 'smooth',
  });
});

// Function to scroll right (next)
nextBtn.addEventListener('click', function () {
  productContainer.scrollBy({
    left: productContainer.offsetWidth, // Scroll by the width of the container
    behavior: 'smooth',
  });
});


// FAQ interactivity
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove('active'); // Close other open FAQs
      }
    });

    item.classList.toggle('active'); // Toggle the clicked one
  });
});


