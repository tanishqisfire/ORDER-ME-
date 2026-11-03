const cartItemsDiv = document.getElementById("cart-items");
const summaryDiv = document.getElementById("cart-summary");

const clearBtn = document.getElementById("clear-btn");



function removeOne(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(function (item) {
        return item.id === id;
    });
    existing.qty -= 1;

    const newCart = cart.filter(function (item) {
        return item.qty > 0;
    });

    localStorage.setItem("cart", JSON.stringify(newCart));
    showCart();
}



clearBtn.addEventListener("click", function () {
    if(!confirm("Clear your whole cart?")){
        return;
    }
    localStorage.removeItem("cart");
    showCart();
})











function showCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsDiv.innerHTML = "";

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `<p class="empty-cart">Your cart is empty🥺, Add some yummy shii</p>`;
        summaryDiv.innerHTML = "";
        summaryDiv.style.display = "none";
        clearBtn.style.display = "none";
        return;
    }
    summaryDiv.style.display = "block";
    clearBtn.style.display = "block";

    let subtotal = 0;

    cart.forEach(function (item) {
        const lineTotal = item.price * item.qty;
        subtotal += lineTotal;

        const row = document.createElement("div");
        row.className = "cart-row";
        row.innerHTML = `
        <span class="cart-name">${item.name}</span>
        <span class="cart-qty">x ${item.qty}</span>
        <span class="cart-line">$${lineTotal}</span>
        <button class="remove-btn">-</button>
        `;
        const removeBtn = row.querySelector(".remove-btn");
        removeBtn.addEventListener("click", function () {
            removeOne(item.id)
        });
        cartItemsDiv.appendChild(row);
    });
    summaryDiv.innerHTML = `<p class="summary-line">Subtotal: <strong>$${subtotal}</strong></p>`
}

showCart();