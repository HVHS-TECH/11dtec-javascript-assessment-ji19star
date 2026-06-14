
console.log("Hello world!")


/**********
VARIABLES
***********/

// Fields
// const PURCH_FIELD = document.getElementById("purchaseField");
// const MONEY_FIELD = document.getElementById("moneyField");
const PRODUCTS_CONTAINER = document.getElementById("products");
const CART_CONTAINER = document.getElementById("cart");

// array of the items
const PRODUCTS = [
    // objects  in the array
    //0
    {
        name: "Sour Dough",
        price: 27,
    },
    //1
    {
        name: "Malt Rye",
        price: 17,
    },
    //2
    {
        name: "White Bread",
        price: 2,
    },
    //3
    {
        name: "Chocolate Cake",
        price: 12,
    }
];

const PURCHASE_LIST = [];


// init the products html aka like makes em there kinds
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
// puts the items into the array and the calculates the prices
addToCart = function (id) {
    PURCHASE_LIST.push(PRODUCTS[id]);
    document.getElementById("cart").innerHTML = CALC_TOTAL(PURCHASE_LIST)
}

//anon , prints the stuffs onto the pages
const NAME_PROD = () => {
    let total = 0;
    PURCHASE_LIST.forEach((item) => {
        total += parseFloat(item.name);
    }); ``
    return total
}

//anon function   calculates the prices of the items
const CALC_TOTAL = () => {
    let total = 0;
    PURCHASE_LIST.forEach((item) => {
        total += parseFloat(item.price);
    }); ``
    return total
}




 //go to top of the pagw
const TOP_FUNCTION = () => {
    console.log("clicked");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}