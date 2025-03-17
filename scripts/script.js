// Sample product data
const products = [
    { id: 1, name: "Zen+ Defender Helmet", price: "₹3499.00", image: "productpicture/Zplusdefender.jpg", type: "Buy Now" },
    { id: 2, name: "Mountain Bike Helmet", price: "₹2299.00", image: "productpicture/mountain.jpeg", type: "Buy Now" },
    { id: 3, name: "Urban Commuter Helmet", price: "₹2699.00", image: "productpicture/urban.jpeg", type: "Buy Now" },
    { id: 4, name: "Professional Racing Helmet", price: "₹3899.00", image: "productpicture/professionalracing.jpeg", type: "Buy Now" }
];

// Populate products function
function populateProducts(filteredProducts = products) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = "";
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <button class="buy-now" onclick="openProductPage(${product.id})">Buy Now</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Open unique product page function
function openProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Search functionality
function searchProducts() {
    const searchInput = document.getElementById('search-box').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );
    populateProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    populateProducts();
    initializeSlideshow();
});

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Auto advance slides every 5 seconds
let slideInterval = setInterval(() => {
    changeSlide(1);
}, 5000);

// Pause auto-advance on hover
const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshowContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => changeSlide(1), 5000);
    });
}
