const products = [
    { id: 1, name: "Dog Toy - Plush Squeaky", category: "Accessories", price: 15.99, imageUrl: "https://via.placeholder.com/200?text=Dog+Toy" },
    { id: 2, name: "Cat Bed - Cozy Design", category: "Accessories", price: 25.50, imageUrl: "https://via.placeholder.com/200?text=Cat+Bed" },
    { id: 3, name: "Bird Feeder - Wooden", category: "Supplies", price: 12.99, imageUrl: "https://via.placeholder.com/200?text=Bird+Feeder" },
    { id: 4, name: "Pet Carrier - Travel Friendly", category: "Accessories", price: 39.99, imageUrl: "https://via.placeholder.com/200?text=Pet+Carrier" },
    { id: 5, name: "Aquarium Kit - Complete Setup", category: "Cages", price: 199.99, imageUrl: "https://via.placeholder.com/200?text=Aquarium+Kit" },
    { id: 6, name: "Dog Food - Premium", category: "Pet Food", price: 49.99, imageUrl: "https://via.placeholder.com/200?text=Dog+Food" },
    { id: 7, name: "Cat Food - Grain-Free", category: "Pet Food", price: 29.99, imageUrl: "https://via.placeholder.com/200?text=Cat+Food" },
    { id: 8, name: "Bird Cage - Large", category: "Cages", price: 149.99, imageUrl: "https://via.placeholder.com/200?text=Bird+Cage" },
    { id: 9, name: "Hamster Wheel", category: "Accessories", price: 19.99, imageUrl: "https://via.placeholder.com/200?text=Hamster+Wheel" },
    { id: 10, name: "Fish Food - Tropical", category: "Pet Food", price: 14.99, imageUrl: "https://via.placeholder.com/200?text=Fish+Food" },
];

// Dynamically load products for Products Page
const productContainer = document.getElementById("product-container");
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p>$${product.price.toFixed(2)}</p>
    `;
    productContainer?.appendChild(productDiv);
});

// Dynamically load featured products for Home Page
const featuredProductsList = document.getElementById("featured-products-list");
products.slice(0, 4).forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
    `;
    featuredProductsList?.appendChild(productDiv);
});
