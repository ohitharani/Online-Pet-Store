// Products Data
const products = [
    { id: 1, name: "Golden Retriever Puppy", category: "Pets", price: 800, imageUrl: "https://via.placeholder.com/200?text=Golden+Retriever" },
    { id: 2, name: "Persian Cat", category: "Pets", price: 600, imageUrl: "https://via.placeholder.com/200?text=Persian+Cat" },
    { id: 3, name: "Parakeet", category: "Pets", price: 50, imageUrl: "https://via.placeholder.com/200?text=Parakeet" },
    { id: 4, name: "Tropical Fish Set", category: "Pets", price: 120, imageUrl: "https://via.placeholder.com/200?text=Tropical+Fish" },
    { id: 5, name: "Premium Dog Food", category: "Pet Food", price: 30, imageUrl: "https://via.placeholder.com/200?text=Dog+Food" },
    { id: 6, name: "Cat Food - Salmon Flavor", category: "Pet Food", price: 25, imageUrl: "https://via.placeholder.com/200?text=Cat+Food" },
    { id: 7, name: "Bird Seed Mix", category: "Pet Food", price: 10, imageUrl: "https://via.placeholder.com/200?text=Bird+Food" },
    { id: 8, name: "Fish Flakes", category: "Pet Food", price: 8, imageUrl: "https://via.placeholder.com/200?text=Fish+Food" },
    { id: 9, name: "Chew Toy for Dogs", category: "Accessories", price: 15, imageUrl: "https://via.placeholder.com/200?text=Dog+Chew+Toy" },
    { id: 10, name: "Cat Scratching Post", category: "Accessories", price: 40, imageUrl: "https://via.placeholder.com/200?text=Cat+Post" },
    { id: 11, name: "Bird Cage Swing", category: "Accessories", price: 12, imageUrl: "https://via.placeholder.com/200?text=Bird+Swing" },
    { id: 12, name: "Fish Tank Decorations", category: "Accessories", price: 20, imageUrl: "https://via.placeholder.com/200?text=Tank+Decor" },
    { id: 13, name: "Small Pet Cage", category: "Cages", price: 150, imageUrl: "https://via.placeholder.com/200?text=Small+Cage" },
    { id: 14, name: "Large Dog Kennel", category: "Cages", price: 250, imageUrl: "https://via.placeholder.com/200?text=Dog+Kennel" },
    { id: 15, name: "Bird Cage with Stand", category: "Cages", price: 180, imageUrl: "https://via.placeholder.com/200?text=Bird+Cage" },
    { id: 16, name: "Hamster Wheel", category: "Accessories", price: 25, imageUrl: "https://via.placeholder.com/200?text=Hamster+Wheel" },
    { id: 17, name: "Aquarium Heater", category: "Supplies", price: 45, imageUrl: "https://via.placeholder.com/200?text=Aquarium+Heater" },
    { id: 18, name: "Dog Leash - Adjustable", category: "Accessories", price: 18, imageUrl: "https://via.placeholder.com/200?text=Dog+Leash" },
    { id: 19, name: "Reptile Terrarium", category: "Cages", price: 300, imageUrl: "https://via.placeholder.com/200?text=Terrarium" },
    { id: 20, name: "Cat Litter Box", category: "Supplies", price: 50, imageUrl: "https://via.placeholder.com/200?text=Cat+Litter+Box" }
];

// Load Products Based on Category
const productContainer = document.getElementById("product-container");
const categoryTitle = document.getElementById("category-title");

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayProducts(filter = "all") {
    productContainer.innerHTML = ""; // Clear existing products
    const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

// On Page Load
if (categoryTitle && productContainer) {
    const selectedCategory = getQueryParam("category");
    categoryTitle.textContent = selectedCategory || "All";
    displayProducts(selectedCategory || "all");
}
