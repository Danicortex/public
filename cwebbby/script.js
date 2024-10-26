// Sample product data
const products = [
    {
        id: 1,
        name: "UK Drip Hoodie",
        price: 49.99,
        image: "path/to/hoodie.jpg"
    },
    {
        id: 2,
        name: "Designer Bag",
        price: 79.99,
        image: "path/to/bag.jpg"
    },
    {
        id: 3,
        name: "Puffer Jacket",
        price: 99.99,
        image: "path/to/jacket.jpg"
    }
];

// Cart array to hold selected products
let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productList.appendChild(productDiv);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

// Initialize the product display
displayProducts();
