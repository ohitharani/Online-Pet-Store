// Sample data for products
const products = [
    { id: 1, name: "Dog Toy - Plush Squeaky", price: 15.99, imageUrl: "images/product1.jpg" },
    { id: 2, name: "Cat Bed - Cozy Design", price: 25.50, imageUrl: "images/product2.jpg" },
    { id: 3, name: "Bird Feeder - Wooden", price: 12.99, imageUrl: "images/product3.jpg" },
    { id: 4, name: "Dog Collar - Adjustable", price: 9.99, imageUrl: "images/product4.jpg" },
    { id: 5, name: "Pet Shampoo - Natural Ingredients", price: 14.50, imageUrl: "images/product5.jpg" },
];

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

// Function to add products to the cart (for demonstration)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} has been added to your cart!`);
}

// Initialize the products page when it loads
document.addEventListener("DOMContentLoaded", loadProductsPage);
