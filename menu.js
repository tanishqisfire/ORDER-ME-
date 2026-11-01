const menu = {
    mains: [
        { name: "Dish1", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish2", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish3", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish4", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
    ],
    snacks: [
        { name: "Dish1", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish2", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish3", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish4", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
    ],
    drinks: [
        { name: "Dish1", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish2", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish3", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish4", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
    ],
    desserts: [
        { name: "Dish1", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish2", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish3", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
        { name: "Dish4", image: "https://au.gozney.com/cdn/shop/articles/Baguettes_Richard_Bertinet_-_Large1_7624d2aa-d85a-42c9-92c6-38697bb11a21.jpg?v=1748373571"},
    ]

};

const grid = document.getElementById("dish-grid");
const buttons = document.querySelectorAll(".category-btn")

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
          `;
        
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
