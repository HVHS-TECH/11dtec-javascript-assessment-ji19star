
console.log("Hello world!")


/**********
VARIABLES
***********/

// Fields
// const PURCH_FIELD = document.getElementById("purchaseField");
// const MONEY_FIELD = document.getElementById("moneyField");
const PRODUCTS_CONTAINER = document.getElementById("products");

//is a map , not array different 
const PRODUCTS = {
    sourDough: {
        name: "Sour Dough",
        price: 17,
    },

    chocolateCake: {
        name: "chocolateCake",
        price: 16,
    }
};

const PURCHASE_LIST = [];

/**********
MAIN CODE
***********/

window.addToCart = function(id) {
    PURCHASE_LIST.push(PRODUCTS[id]);
}

let products = "";
for (let id in PRODUCTS) {
    products += `
    <div>
        <h3>${PRODUCTS[id].name}</h3>
        <div>$${PRODUCTS[id].price}</div>
        <button onclick="addToCart('${id}')">Add to Cart</button>
    </div>
    `
}
PRODUCTS_CONTAINER.innerHTML = products;

/**********
FUNCTIONS
***********/

// document.getElementById("breadListings").innerHTML = PRODUCTS;

// const purchItem = function () {
//     //define inside of function to set, bc when it runs the function it becomes that thing
//     let itemPurch = PURCH_FIELD.value;
//     let userMoney = MONEY_FIELD.value;
//     console.log(itemPurch);
//     console.log(userMoney);

//     //should be the name of item, and price .. can i get it going auto when add
//     PURCHASE_LIST.push({
//         money: userMoney,
//         name: itemPurch,
//     });

//     document.getElementById("cart").innerHTML = calcTotal(PURCHASE_LIST)
// }

// calculaates the price of things added to the cart and prints onto html
const calcTotal = () => {
    let total = 0;
    PURCHASE_LIST.forEach((item) => {
        total += parseFloat(item.money);
    });
    return total
}
