// List of products
const products = [
    { id: 1, name: "Dog Toy - Plush Squeaky", price: 15.99, imageUrl: "images/Dog_Toy-Plush_Squeaky_1.jpg", category: "Pets" },
    { id: 2, name: "Cat Bed - Cozy Design", price: 25.50, imageUrl: "images/product2.jpg", category: "Pets" },
    { id: 3, name: "Bird Feeder - Wooden", price: 12.99, imageUrl: "images/product3.jpg", category: "Pets" },
    { id: 4, name: "Dog Collar - Adjustable", price: 9.99, imageUrl: "images/product4.jpg", category: "Accessories" },
    { id: 5, name: "Cat Litter Box - Self-Cleaning", price: 89.99, imageUrl: "images/product5.jpg", category: "Supplies" },
    { id: 6, name: "Pet Shampoo - Natural Ingredients", price: 14.50, imageUrl: "images/product6.jpg", category: "Supplies" },
    { id: 7, name: "Dog Leash - Reflective", price: 19.99, imageUrl: "images/product7.jpg", category: "Accessories" },
    { id: 8, name: "Cat Scratching Post - Multi-Level", price: 49.99, imageUrl: "images/product8.jpg", category: "Accessories" },
    { id: 9, name: "Aquarium Kit - Complete Setup", price: 199.99, imageUrl: "images/product9.jpg", category: "Pets" },
    { id: 10, name: "Pet Carrier - Travel Friendly", price: 39.99, imageUrl: "images/product10.jpg", category: "Accessories" },
];

// Initialize the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate API request for authentication
    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify({ email }));
        window.location.href = "products.html"; // Redirect on successful login
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Load products based on category selection
function loadCategoryProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ""; // Clear existing products

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
        alert(`${product.name} added to cart!`);
    }
}

// Calculate the cart total
function calculateCartTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Apply promo code discount
function applyPromoCode(promoCode) {
    const validPromoCode = "XMAS20";
    const discountPercentage = 20;

    if (promoCode === validPromoCode) {
        const cartTotal = calculateCartTotal();
        const discount = (cartTotal * discountPercentage) / 100;
        return { discountedTotal: cartTotal - discount, discount };
    } else {
        return { discountedTotal: calculateCartTotal(), discount: 0 };
    }
}

// Checkout process
function checkout() {
    const promoCode = prompt("Enter promo code (if any):");
    const { discountedTotal, discount } = applyPromoCode(promoCode);

    if (discount > 0) {
        alert(`Promo code applied! You saved $${discount.toFixed(2)}. Final total: $${discountedTotal.toFixed(2)}`);
    } else {
        alert(`No valid promo code applied. Total: $${discountedTotal.toFixed(2)}`);
    }

    // Clear the cart after checkout
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load products when the page loads
loadCategoryProducts("Pets"); // Example: load products from the "Pets" category
