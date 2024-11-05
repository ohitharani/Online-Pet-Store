// Sample products array (for demonstration)
const products = [
    { id: 1, name: "Dog Toy", price: 15.99, imageUrl: "images/dog-toy.jpg" },
    { id: 2, name: "Cat Bed", price: 25.50, imageUrl: "images/cat-bed.jpg" },
    { id: 3, name: "Bird Feeder", price: 12.99, imageUrl: "images/bird-feeder.jpg" },
    // Add more products as needed
];

// Initialize cart from localStorage or create a new array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Navigate to products page
function navigateToProducts() {
    window.location.href = "products.html";
}

// Add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} has been added to your cart!`);
    } else {
        alert("Product not found!");
    }
}

// Load cart items to the UI
function loadCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartList.appendChild(cartItem);
    });
}

// Improved checkout function
function checkout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase!");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    } else {
        alert("Your cart is empty.");
    }
}

// Call loadCart on page load to refresh cart items
document.addEventListener("DOMContentLoaded", loadCart);
