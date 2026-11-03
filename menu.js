const menu = {
    mains: [
        { name: "Dish1", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "m1", price: 200},
        { name: "Dish2", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "m2", price: 200},
        { name: "Dish3", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "m3", price: 200},
        { name: "Dish4", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "m4", price: 200},
    ],
    snacks: [
        { name: "Dish1", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "s1", price: 200},
        { name: "Dish2", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "s2", price: 200},
        { name: "Dish3", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "s3", price: 200},
        { name: "Dish4", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "s4", price: 200},
    ],
    drinks: [
        { name: "Dish1", image: "./Orange_Juice.jpg", id: "dr1", price: 200},
        { name: "Dish2", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "dr2", price: 200},
        { name: "Dish3", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "dr3", price: 200},
        { name: "Dish4", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "dr4", price: 200},
    ],
    desserts: [
        { name: "Dish1", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "ds1", price: 200},
        { name: "Dish2", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "ds2", price: 200},
        { name: "Dish3", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "ds3", price: 200}, 
        { name: "Dish4", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571", id: "ds4", price: 200},
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
