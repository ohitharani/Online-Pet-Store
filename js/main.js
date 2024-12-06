// List of products with categories
const products = [
    { id: 1, name: "Dog Toy - Plush Squeaky", price: 15.99, category: "Pets", imageUrl: "https://via.placeholder.com/150?text=Dog+Toy" },
    { id: 2, name: "Cat Bed - Cozy Design", price: 25.50, category: "Pets", imageUrl: "https://via.placeholder.com/150?text=Cat+Bed" },
    { id: 3, name: "Bird Feeder - Wooden", price: 12.99, category: "Accessories", imageUrl: "https://via.placeholder.com/150?text=Bird+Feeder" },
    { id: 4, name: "Dog Collar - Adjustable", price: 9.99, category: "Accessories", imageUrl: "https://via.placeholder.com/150?text=Dog+Collar" },
    { id: 5, name: "Pet Shampoo - Natural Ingredients", price: 14.50, category: "Pet Food", imageUrl: "https://via.placeholder.com/150?text=Pet+Shampoo" },
    { id: 6, name: "Dog Leash - Reflective", price: 19.99, category: "Accessories", imageUrl: "https://via.placeholder.com/150?text=Dog+Leash" },
    { id: 7, name: "Cat Scratching Post", price: 49.99, category: "Pets", imageUrl: "https://via.placeholder.com/150?text=Cat+Scratching+Post" },
    { id: 8, name: "Aquarium Kit - Complete Setup", price: 199.99, category: "Cages", imageUrl: "https://via.placeholder.com/150?text=Aquarium+Kit" },
    { id: 9, name: "Pet Carrier - Travel Friendly", price: 39.99, category: "Accessories", imageUrl: "https://via.placeholder.com/150?text=Pet+Carrier" },
    { id: 10, name: "Cat Litter Box - Self-Cleaning", price: 89.99, category: "Pet Food", imageUrl: "https://via.placeholder.com/150?text=Cat+Litter+Box" },
    // Add more products as needed
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display Products
const displayProducts = (category = null) => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear previous products
    let filteredProducts = category ? products.filter(p => p.category === category) : products;

    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
};

// Add Product to Cart
const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }
};

// Update Cart Count
const updateCartCount = () => {
    document.getElementById("cart-count").textContent = cart.length;
};

// Display Cart Items
const displayCartItems = () => {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear previous cart items
    let totalPrice = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.imageUrl}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            </div>
        `;
        totalPrice += item.price;
    });

    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
};

// Apply Coupon Code for Discount
document.getElementById("apply-coupon").addEventListener("click", () => {
    const couponCode = document.getElementById("coupon-code").value.trim();
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    if (couponCode === "XMAS20") {
        totalPrice *= 0.8; // Apply 20% discount
        alert("Coupon applied! You got a 20% discount.");
    }

    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
});

// Initial Page Load
if (window.location.pathname === "/products.html") {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    displayProducts(category);
}

if (window.location.pathname === "/cart.html") {
    displayCartItems();
}

updateCartCount(); // Update cart count on all pages
