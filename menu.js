const menu = {
    mains: [
        { name: "Curyy!!", image: "images/curry.jpg", id: "m1", price: 4500},
        { name: "Fishyy", image: "images/Fish.jpeg", id: "m2", price: 7000},
        { name: "Shoeshi", image: "images/shushii.jpeg", id: "m3", price: 23000},
        { name: "LeftOverFood", image: "images/LeftOverFood.jpg", id: "m4", price: 0},
    ],
    snacks: [
        { name: "Boorger", image: "images/Burger.jpeg", id: "s1", price: 20},
        { name: "French Fries🇫🇷", image: "images/FrenchFries.jpg", id: "s2", price: 80},
        { name: "Popcorn", image: "images/popcorn.jpg", id: "s3", price: 500},
        { name: "Dumplings", image: "images/dumplings.jpeg", id: "s4", price: 9050},
    ],
    drinks: [
        { name: "Orange Juice", image: "images/Orange_Juice.jpg", id: "dr1", price: 2},
        { name: "Diet Coke", image: "images/dietcoke.jpg", id: "dr2", price: 500000},
        { name: "Tea", image: "images/tea.png", id: "dr3", price: 500},
        { name: "water", image: "images/water.jpg", id: "dr4", price: 0},
    ],
    desserts: [
        { name: "Ice creamyy", image: "images/icecream.jpg", id: "ds1", price: 400},
        { name: "Pastry of uhh...", image: "images/uhhh...Pastry.jpeg", id: "ds2", price: 84000},
        { name: "Baguette🇫🇷", image: "images/baguette.png", id: "ds3", price: 6000}, 
    ]

};

const grid = document.getElementById("dish-grid");
const buttons = document.querySelectorAll(".category-btn")

function addToCart(dish) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(function (item) {
        return item.id === dish.id;
    });

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: dish.id, name: dish.name, price: dish.price, qty: 1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

}







function showCategory(category) {
    grid.innerHTML = "";

    menu[category].forEach(function (dish) {
        const card = document.createElement("div");
        card.className = "dish-card";
        card.innerHTML = `
          <div class="dish-image">
            <img src="${dish.image}" alt="${dish.name}">
          </div>
          <p class="dish-name">${dish.name}</p>
          <P class="dish-price">$${dish.price}</p>
          <button class="add-btn">Add to cart</button>
          `;
          const addBtn = card.querySelector(".add-btn");
          addBtn.addEventListener("click", function() {
            addToCart(dish);
            addBtn.textContent = "Added 😘"
            setTimeout(function () {
                addBtn.textContent = "Add to cart";
            }, 1000)

          })
        
        grid.appendChild(card);
        
    });

}

buttons.forEach(function (button) {
    button.addEventListener("click", function() {
        buttons.forEach(function (b) {
            b.classList.remove("active");
        });
        button.classList.add("active");

        showCategory(button.dataset.category)
    });
});

showCategory("mains");
