document.addEventListener('DOMContentLoaded', function() {
    // Image Gallery
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.image-gallery img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImage.src = this.src;
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Color Selection
    const colorOptions = document.querySelectorAll('.color-option');
    const colorSpan = document.querySelector('.color-selection span');

    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            colorSpan.textContent = this.querySelector('img').alt;
            mainImage.src = this.querySelector('img').src;
        });
    });

    // Size Selection a
    const sizeButtons = document.querySelectorAll('.size-btn');
    const sizeSpan = document.querySelector('.size-selection span');

    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            sizeSpan.textContent = this.textContent;
        });
    });

    // Add to Cart
    const addToCartBtn = document.querySelector('.btn-add-cart');
    const buyNowBtn = document.querySelector('.btn-buy-now');
    const quantitySelect = document.querySelector('.quantity select');

    addToCartBtn.addEventListener('click', function() {
        const quantity = parseInt(quantitySelect.value);
        const cartCount = document.querySelector('.nav-icons .fa-shopping-cart + span');
        const currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + quantity;

        // Add animation to cart icon
        const cartIcon = document.querySelector('.fa-shopping-cart');
        cartIcon.classList.add('shake');
        setTimeout(() => cartIcon.classList.remove('shake'), 500);

        alert(`Added ${quantity} item(s) to cart`);
    });

    buyNowBtn.addEventListener('click', function() {
        const quantity = parseInt(quantitySelect.value);
        alert(`Proceeding to checkout with ${quantity} item(s)`);
        // Implement checkout logic here
    });

    // Review Bars
    const ratingBars = document.querySelectorAll('.bar-inner');
    ratingBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
            bar.style.transition = 'width 1s ease-in-out';
        }, 100);
    });
});