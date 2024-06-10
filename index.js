import { menuArray } from "./data.js"

// just to check import/export => it works
console.log(menuArray)

// ----- getting elements from dom ---------------
const menuItems = document.getElementById('menu-items')



const generateHTMLtext = menuArray.map((item) => {
    return ` <div class="menu-item-container"> 
                <p class="menu-item-img"> ${item.emoji} </p>
                <div class="menu-item-info">
                    <h2> ${item.name} </h2>
                    <p> ${item.ingredients} </p>
                    <p> $${item.price} </p>
                </div>
                <img class="menu-item-add-btn" src="./assets/add-btn.png" />
            </div>`
}).join('')

menuItems.innerHTML = generateHTMLtext

