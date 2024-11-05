// Sample product data
const products = [
    { id: 1, name: "Dog Food", description: "High-quality dog food", price: 29.99, imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Cat Toy", description: "Interactive toy for cats", price: 9.99, imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Bird Cage", description: "Spacious cage for birds", price: 49.99, imageUrl: "https://via.placeholder.com/150" },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load products onto the product page
function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-card");

        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
}

// Load cart items onto the cart page
function loadCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear previous items

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>Price: $${item.price}</p>
        `;
        cartList.appendChild(cartItem);
    });

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
    }
}

// Checkout function
function checkout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    } else {
        alert("Your cart is empty.");
    }
}

// Navigate to products page
function navigateToProducts() {
    window.location.href = "products.html";
}

// Initialize page-specific functions
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("product-list")) loadProducts();
    if (document.getElementById("cart-list")) loadCart();
});
