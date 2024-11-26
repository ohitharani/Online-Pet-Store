// Sample data for products
const products = [
    { id: 1, name: "Dog Toy - Plush Squeaky", price: 15.99, imageUrl: "images/product1.jpg" },
    { id: 2, name: "Cat Bed - Cozy Design", price: 25.50, imageUrl: "images/product2.jpg" },
    { id: 3, name: "Bird Feeder - Wooden", price: 12.99, imageUrl: "images/product3.jpg" },
    { id: 4, name: "Dog Collar - Adjustable", price: 9.99, imageUrl: "images/product4.jpg" },
    { id: 5, name: "Pet Shampoo - Natural Ingredients", price: 14.50, imageUrl: "images/product5.jpg" },
];

// Initialize cart if it doesn't exist in localStorage
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Function to load products on the Products page
function loadProductsPage() {
    const productListContainer = document.getElementById("product-list-container");

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productListContainer.appendChild(productItem);
    });
}

// Function to add products to the cart
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
}

// Function to update cart count on the home and products pages
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartCount = cart.length;
    document.getElementById("cart-count").textContent = cartCount;
}

// Function to load cart items on the Cart page
function loadCartPage() {
    const cartListContainer = document.getElementById("cart-list-container");
    const cart = JSON.parse(localStorage.getItem('cart'));
    let total = 0;

    cartListContainer.innerHTML = ""; // Clear previous items

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartListContainer.appendChild(cartItem);

        total += item.price;
    });

    // Show total price
    document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;
}

// Function to handle checkout
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        localStorage.setItem('cart', JSON.stringify([])); // Clear the cart
        loadCartPage(); // Reload the cart page to reflect empty cart
    } else {
        alert("Your cart is empty.");
    }
}

// Call functions based on the page
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes('products.html')) {
        loadProductsPage();
    } else if (window.location.pathname.includes('cart.html')) {
        loadCartPage();
        document.getElementById("checkout-button").addEventListener('click', checkout);
        updateCartCount(); // Update cart count when on the cart page
    } else {
        updateCartCount(); // Update cart count on the homepage
    }
});
