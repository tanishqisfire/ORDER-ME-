const orderList = document.getElementById("order-list");
const orderTitle = document.querySelector(".order-title");


function showOrders() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        orderTitle.textContent = "No orders to arrive😰";
        orderList.style.display = "none";
        return;
    }


    orders.forEach(function (order, index) {
        
        const box = document.createElement("div");
        box.className = "order-box";
        

        let itemsHTML = "";

        order.items.forEach(function (item) {
            itemsHTML += `<li>${item.name} x${item.qty}</li>`
        });

        box.innerHTML = `
        <h2 class="order-number">Order #${index + 1}</h2>
        <div class="order-inner">
            <ul class="order-items">${itemsHTML}</ul>
        </div>
        <p class="delivery-note">Will arrive in 3-4 business daya </p>
        <p class="delivery-note"> (no way🤣❌) </p>
        `


        orderList.appendChild(box);
    });

}

showOrders();