
const products = [
    {
        id: 1,
        name: "Dog Toy - Plush Squeaky",
        price: 15.99,
        imageUrl: "https://via.placeholder.com/150?text=Dog+Toy+Plush+Squeaky"
    },
    {
        id: 2,
        name: "Cat Bed - Cozy Design",
        price: 25.50,
        imageUrl: "https://via.placeholder.com/150?text=Cat+Bed+Cozy+Design"
    },
    {
        id: 3,
        name: "Bird Feeder - Wooden",
        price: 12.99,
        imageUrl: "https://via.placeholder.com/150?text=Bird+Feeder+Wooden"
    },
    {
        id: 4,
        name: "Dog Collar - Adjustable",
        price: 9.99,
        imageUrl: "https://via.placeholder.com/150?text=Dog+Collar+Adjustable"
    },
    {
        id: 5,
        name: "Cat Litter Box - Self-Cleaning",
        price: 89.99,
        imageUrl: "https://via.placeholder.com/150?text=Cat+Litter+Box+Self-Cleaning"
    },
    {
        id: 6,
        name: "Pet Shampoo - Natural Ingredients",
        price: 14.50,
        imageUrl: "https://via.placeholder.com/150?text=Pet+Shampoo+Natural"
    },
    {
        id: 7,
        name: "Dog Leash - Reflective",
        price: 19.99,
        imageUrl: "https://via.placeholder.com/150?text=Dog+Leash+Reflective"
    },
    {
        id: 8,
        name: "Cat Scratching Post - Multi-Level",
        price: 49.99,
        imageUrl: "https://via.placeholder.com/150?text=Cat+Scratching+Post"
    },
    {
        id: 9,
        name: "Aquarium Kit - Complete Setup",
        price: 199.99,
        imageUrl: "https://via.placeholder.com/150?text=Aquarium+Kit"
    },
    {
        id: 10,
        name: "Pet Carrier - Travel Friendly",
        price: 39.99,
        imageUrl: "https://via.placeholder.com/150?text=Pet+Carrier+Travel"
    },
    {
        id: 11,
        name: "Dog Food - Grain Free",
        price: 34.99,
        imageUrl: "https://via.placeholder.com/150?text=Dog+Food+Grain+Free"
    },
    {
        id: 12,
        name: "Cat Treats - Salmon Flavor",
        price: 5.99,
        imageUrl: "https://via.placeholder.com/150?text=Cat+Treats+Salmon"
    },
    {
        id: 13,
        name: "Pet Bed - Orthopedic Foam",
        price: 79.99,
        imageUrl: "https://via.placeholder.com/150?text=Pet+Bed+Orthopedic"
    },
    {
        id: 14,
        name: "Dog Bowls - Stainless Steel",
        price: 11.99,
        imageUrl: "https://via.placeholder.com/150?text=Dog+Bowls+Stainless"
    },
    {
        id: 15,
        name: "Interactive Cat Toy - Laser Pointer",
        price: 19.99,
        imageUrl: "https://via.placeholder.com/150?text=Cat+Toy+Laser+Pointer"
    }
];

// Function to display products
function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-item");

        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productElement);
    });
}


// Call loadProducts on page load to display the products
document.addEventListener("DOMContentLoaded", loadProducts);


// Initialize cart from localStorage or create a new array
let cart = JSON.parse(localStorage.getItem("cart")) || [];



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
