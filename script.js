
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
        name: " Sour Dough <br>",
        price: 27,
        photo: `<img src="bredImage/Bred_1.jpg" id="Photo">`,
        quantity: null,
    },
    //1
    {
        name: "Malt Rye<br>",
        price: 17,
        photo: `<img src="bredImage/Bred_9.jpg" id="Photo">`,
    },
    //2
    {
        name: "White Bread<br>",
        price: 2,
        photo: `<img src="bredImage/Bred_3.jpg" id="Photo">`,
    },
    //3
    {
        name: "Cinnamon Scroll<br>",
        price: 12,
        photo: `<img src="bredImage/Bred_11.jpg" id="Photo">`,
    }
];
// the arrary which contains the items in cart
const PURCHASE_LIST = [];


// init the products html aka like makes em there kinds
let products = "";
let productsInCart = "";

/**********
MAIN CODE
***********/

// build the products into html through the javascrippt
for (let id in PRODUCTS) {
    products += `
    <div>
        <h3>${PRODUCTS[id].name}</h3>
        <div>${PRODUCTS[id].price}</div>
        <div>${PRODUCTS[id].photo}</div>
        <button id="addTo" onclick="addToCart('${id}'), console.log(PURCHASE_LIST)">Add to Cart</button>
    </div>

    <style>
        #Photo{
        height:200px;
        width:auto;
        }
        
        #addTo {
            font-family: CRK_REG;
            font-size:20px;
            text-align: center;
            background-color: #F18f01;
            margin: 10px 60px;
            border: solid #011627;
            outline: solid #5797a7;
            border-radius: 30px;
            cursor: pointer;
            color: #011627;
            padding: 15px;
            transform: scale(1.13);
            transition: transform 0.03s ease-in-out, background-color 0.02s ease-in-out;
        }

        #addTo:hover {
            background-color: rgb(255, 221, 198);
            transform: scale(1.1);
        }
            </style>
    `
}


for (let id in PRODUCTS) {
    products += `
    
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
    //calculates price n puts shows it
    document.getElementById("cart").innerHTML = CALC_TOTAL(PURCHASE_LIST)
    document.getElementById("itemList").innerHTML = QUANT()
    
    console.log(FIND_QUANT)
 

}


//anon , prints the stuffs onto theSS pages

//what was this again??


// Prints
const QUANT = () => {
    let prodName = "";
    PURCHASE_LIST.forEach((item) => {
        prodName += item.name;
    });
    return prodName
}

//PARSE FLOAT CHECK LIKE THE UHHH TTHING "FLOAT" IS DECIMALS BALBLA PARSE READS SMTHN

//anon function   calculates the prices of the itemsSSS
const CALC_TOTAL = () => {
    let total = 0;
    PURCHASE_LIST.forEach((item) => {
        total += parseFloat(item.price);
    });
    return total
}


/*
so like.. 

*/


const FIND_QUANT = (_list, _item) => {

    //item in finds the item in the list .. i think

     if ( _item in _list) {

          _list.find(_list => _item.quantity === item.id);

     } else {
        
     }

}

/***********extra functions**********/

//go to top of the pagw
const TOP_FUNCTION = () => {
    console.log("clicked");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}