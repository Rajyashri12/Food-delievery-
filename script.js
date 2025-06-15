// script.js

// Toggle hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Modal login popup
const modal = document.getElementById("login-modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Shopping Cart functionality
let cart = [];
const cartList = document.getElementById("cart-list");

function addToCart(itemName) {
    cart.push(itemName);
    updateCartUI();
}

function updateCartUI() {
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${item}`;
        cartList.appendChild(li);
    });
}

// Attach event listeners to all "Add to Cart" buttons
const addButtons = document.querySelectorAll(".add-to-cart");
addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const itemName = button.getAttribute("data-item");
        addToCart(itemName);
    });
});
