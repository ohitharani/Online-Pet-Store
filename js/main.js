// Product Data (Example)
const products = [
    { id: 1, name: "Golden Retriever Puppy", category: "Pets", price: 800, imageUrl: "https://via.placeholder.com/300x200?text=Golden+Retriever" },
    { id: 2, name: "Persian Cat", category: "Pets", price: 600, imageUrl: "https://via.placeholder.com/300x200?text=Persian+Cat" },
    { id: 3, name: "Premium Dog Food", category: "Pet Food", price: 30, imageUrl: "https://via.placeholder.com/300x200?text=Dog+Food" },
    { id: 4, name: "Cat Food", category: "Pet Food", price: 25, imageUrl: "https://via.placeholder.com/300x200?text=Cat+Food" },
    { id: 5, name: "Dog Leash", category: "Accessories", price: 10, imageUrl: "https://via.placeholder.com/300x200?text=Dog+Leash" },
    { id: 6, name: "Bird Cage", category: "Cages", price: 50, imageUrl: "https://via.placeholder.com/300x200?text=Bird+Cage" },
    { id: 7, name: "Hamster Cage", category: "Cages", price: 40, imageUrl: "https://via.placeholder.com/300x200?text=Hamster+Cage" },
    { id: 8, name: "Cat Scratcher", category: "Accessories", price: 15, imageUrl: "https://via.placeholder.com/300x200?text=Cat+Scratcher" },
    // More products...
];

// Dynamically display products based on category
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
}
