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

// Function to display products based on category
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
    const filteredProducts = products.filter(product => product.category === category);
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = "<p>No products found in this category.</p>";
    } else {
        filteredProducts.forEach(product => {
            productContainer.innerHTML += `
                <div class="product-card">
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
        });
    }
} else {
    const productContainer = document.getElementById("products");
    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="product-card">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
    });
}
