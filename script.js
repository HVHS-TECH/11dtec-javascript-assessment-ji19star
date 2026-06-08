
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
        price: 27,
    },

    maltRye: {
        name: "Malt Rye",
        price: 17,
    },

    maltRye: {
        name: "White Bread",
        price: 2,
    },


    chocolateCake: {
        name: "Chocolate Cake",
        price: 12,
    }
};

const PURCHASE_LIST = [];


// init the prunducts html
let products = "";

/**********
MAIN CODE
***********/

// build the products html
for (let id in PRODUCTS) {
    products += `
    <div>
        <h3>${PRODUCTS[id].name}</h3>
        <div>$${PRODUCTS[id].price}</div>
        <button onclick="addToCart('${id}')">Add to Cart</button>
    </div>
    `
}
// inject the products html
PRODUCTS_CONTAINER.innerHTML = products;





/**********
FUNCTIONS
***********/

// global function - no const or let
addToCart = function (id) {
    PURCHASE_LIST.push(PRODUCTS[id]);
    document.getElementById("cart").innerHTML = calcTotal(PURCHASE_LIST)
}

addToList = function (id) {
    PURCHASE_LIST.push(PRODUCTS[id]);
    document.getElementById("itemList").innerHTML = nameProd
}
 
//anon
const nameProd = () => {
    let total = 0;
    PURCHASE_LIST.forEach((item) => {
        total += parseFloat(item.name);
    }); ``
    return total
}

//anon function
const calcTotal = () => {
    let total = 0;
    PURCHASE_LIST.forEach((item) => {
        total += parseFloat(item.price);
    }); ``
    return total
}

const top_function = () => {
    console.log("clicked");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}