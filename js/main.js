// Products Data
const products = [
    { id: 1, name: "Dog Toy - Plush Squeaky", category: "Accessories", price: 15.99, imageUrl: "https://via.placeholder.com/200?text=Dog+Toy" },
    { id: 2, name: "Cat Bed - Cozy Design", category: "Accessories", price: 25.50, imageUrl: "https://via.placeholder.com/200?text=Cat+Bed" },
    // Add more products as needed...
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
