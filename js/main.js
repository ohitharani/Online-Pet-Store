// Sample data for 20 random products
const products = [
    { id: 1, name: "Dog Toy - Plush Squeaky", price: 15.99, imageUrl: "https://via.placeholder.com/150?text=Dog+Toy+Plush+Squeaky" },
    { id: 2, name: "Cat Bed - Cozy Design", price: 25.50, imageUrl: "https://via.placeholder.com/150?text=Cat+Bed+Cozy+Design" },
    { id: 3, name: "Bird Feeder - Wooden", price: 12.99, imageUrl: "https://via.placeholder.com/150?text=Bird+Feeder+Wooden" },
    { id: 4, name: "Dog Collar - Adjustable", price: 9.99, imageUrl: "https://via.placeholder.com/150?text=Dog+Collar+Adjustable" },
    { id: 5, name: "Cat Litter Box - Self-Cleaning", price: 89.99, imageUrl: "https://via.placeholder.com/150?text=Cat+Litter+Box+Self-Cleaning" },
    { id: 6, name: "Pet Shampoo - Natural Ingredients", price: 14.50, imageUrl: "https://via.placeholder.com/150?text=Pet+Shampoo+Natural" },
    { id: 7, name: "Dog Leash - Reflective", price: 19.99, imageUrl: "https://via.placeholder.com/150?text=Dog+Leash+Reflective" },
    { id: 8, name: "Cat Scratching Post - Multi-Level", price: 49.99, imageUrl: "https://via.placeholder.com/150?text=Cat+Scratching+Post" },
    { id: 9, name: "Aquarium Kit - Complete Setup", price: 199.99, imageUrl: "https://via.placeholder.com/150?text=Aquarium+Kit" },
    { id: 10, name: "Pet Carrier - Travel Friendly", price: 39.99, imageUrl: "https://via.placeholder.com/150?text=Pet+Carrier+Travel" },
    { id: 11, name: "Dog Food - Grain Free", price: 34.99, imageUrl: "https://via.placeholder.com/150?text=Dog+Food+Grain+Free" },
    { id: 12, name: "Cat Treats - Salmon Flavor", price: 5.99, imageUrl: "https://via.placeholder.com/150?text=Cat+Treats+Salmon" },
    { id: 13, name: "Pet Bed - Orthopedic Foam", price: 79.99, imageUrl: "https://via.placeholder.com/150?text=Pet+Bed+Orthopedic" },
    { id: 14, name: "Dog Bowls - Stainless Steel", price: 11.99, imageUrl: "https://via.placeholder.com/150?text=Dog+Bowls+Stainless" },
    { id: 15, name: "Interactive Cat Toy - Laser Pointer", price: 19.99, imageUrl: "https://via.placeholder.com/150?text=Cat+Toy+Laser+Pointer" },
    { id: 16, name: "Hamster Cage - 2-Level", price: 50.00, imageUrl: "https://via.placeholder.com/150?text=Hamster+Cage" },
    { id: 17, name: "Rabbit Food - Fresh Vegetables", price: 10.99, imageUrl: "https://via.placeholder.com/150?text=Rabbit+Food+Vegetables" },
    { id: 18, name: "Fish Tank - 20 Gallon", price: 75.99, imageUrl: "https://via.placeholder.com/150?text=Fish+Tank+20+Gallon" },
    { id: 19, name: "Pet Sweeper - Automatic", price: 29.99, imageUrl: "https://via.placeholder.com/150?text=Pet+Sweeper" },
    { id: 20, name: "Bird Cage - Large", price: 99.99, imageUrl: "https://via.placeholder.com/150?text=Bird+Cage+Large" },
];

// Cart array to store cart items during session
let cart = [];

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
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} has been added to your cart!`);
}

// Function to update cart count on the home and products pages
function updateCartCount() {
    const cartCount = cart.length;
    document.getElementById("cart-count").textContent = cartCount;
}

// Function to load cart items on the Cart page
function loadCartPage() {
    const cartListContainer = document.getElementById("cart-list-container");
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
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = []; // Clear cart after checkout
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
