// List of products
const products = [
    { id: 1, name: "Dog Toy - Plush Squeaky", price: 15.99, imageUrl: "images/product1.jpg", category: "Pets" },
    { id: 2, name: "Cat Bed - Cozy Design", price: 25.50, imageUrl: "images/product2.jpg", category: "Pets" },
    { id: 3, name: "Bird Feeder - Wooden", price: 12.99, imageUrl: "images/product3.jpg", category: "Pets" },
    { id: 4, name: "Dog Collar - Adjustable", price: 9.99, imageUrl: "images/product4.jpg", category: "Accessories" },
    { id: 5, name: "Cat Litter Box - Self-Cleaning", price: 89.99, imageUrl: "images/product5.jpg", category: "Supplies" },
    { id: 6, name: "Pet Shampoo - Natural Ingredients", price: 14.50, imageUrl: "images/product6.jpg", category: "Supplies" },
    { id: 7, name: "Dog Leash - Reflective", price: 19.99, imageUrl: "images/product7.jpg", category: "Accessories" },
    { id: 8, name: "Cat Scratching Post - Multi-Level", price: 49.99, imageUrl: "images/product8.jpg", category: "Accessories" },
    { id: 9, name: "Aquarium Kit - Complete Setup", price: 199.99, imageUrl: "images/product9.jpg", category: "Pets" },
    { id: 10, name: "Pet Carrier - Travel Friendly", price: 39.99, imageUrl: "images/product10.jpg", category: "Accessories" },
    // Add more products here...
];

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

// Add product to cart (simplified for demo purposes)
function addToCart(productId) {
    alert("Product added to cart!");
    // Implement cart functionality (localStorage, cart array, etc.)
}

// Call this function to initialize the product list when the page loads
loadCategoryProducts("Pets"); // Example: load products from the "Pets" category
