const featuredProducts = [
    { id: 1, name: "Dog Toy - Plush Squeaky", price: 15.99, imageUrl: "https://via.placeholder.com/200?text=Dog+Toy" },
    { id: 2, name: "Cat Bed - Cozy Design", price: 25.50, imageUrl: "https://via.placeholder.com/200?text=Cat+Bed" },
    { id: 3, name: "Bird Feeder - Wooden", price: 12.99, imageUrl: "https://via.placeholder.com/200?text=Bird+Feeder" },
    { id: 4, name: "Pet Carrier - Travel Friendly", price: 39.99, imageUrl: "https://via.placeholder.com/200?text=Pet+Carrier" },
    { id: 5, name: "Aquarium Kit - Complete Setup", price: 199.99, imageUrl: "https://via.placeholder.com/200?text=Aquarium+Kit" }
];

// Dynamically load featured products on the homepage
const featuredProductsList = document.getElementById("featured-products-list");

featuredProducts.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
    `;
    featuredProductsList.appendChild(productDiv);
});
