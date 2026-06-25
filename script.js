
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
        quantity: null,
    },
    //2
    {
        name: "White Bread<br>",
        price: 2,
        photo: `<img src="bredImage/Bred_3.jpg" id="Photo">`,
        quantity: null,
    },
    //3
    {
        name: "Cinnamon Scroll<br>",
        price: 12,
        photo: `<img src="bredImage/Bred_11.jpg" id="Photo">`,
        quantity: null,
    }
];
// the arrary which contains the items in cart
const PURCHASE_LIST = [];


// init the products html aka like makes em there kinds
let products = "";
let productsInCart = "";

const QUANTITY_INPUT = document.getElementById("quantityField");



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
        <form onsubmit="return false;">
        <input type="text">
        <input type="submit" id="quantityField" onclick="NUM_CHECK();" placeholder="0">
        </form>
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





// inject the products html
PRODUCTS_CONTAINER.innerHTML = products;

/**********
FUNCTIONS
***********/
let quantity = {}

// global function - no const or let
// puts the items into the array and the calculates the prices
addToCart = function (id) {
    PURCHASE_LIST.push(PRODUCTS[id]);
    //ADDS TO QUANTITY

    if (quantity[id]) {
        quantity[id]++
    } else {
        quantity[id] = 1;
    }
/*
    for (let i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }
*/
    //calculates price n puts shows it
    document.getElementById("cart").innerHTML = CALC_TOTAL(PURCHASE_LIST);
    document.getElementById("itemList").innerHTML += ITEM_NAMEPRINT()+quantity[id];
    
    console.log(quantity)

}


// is null why
const NUM_CHECK =() =>{
    let quantInput = QUANTITY_INPUT.value;

    console.log("meow")
    if (isNaN(quantInput)) {
         console.log("wow")
        document.getElementById("bugZone").innerHTML = `<p>Cannot use letters</p>`
         throw new Error("ohno");  
    }else{
        console.log("bad")
    }

}



// Prints

PRODUCTS[id].name

const ITEM_NAMEPRINT = () => {
    let prodName = "";
    PURCHASE_LIST.forEach((item) => {
        prodName += item.name;

    });
    return prodName
}

/*
const ITEM_NAMEPRINT = () => {
    let prodName = "";
    PURCHASE_LIST.forEach((item) => {
        prodName += item.name;

    });
    return prodName
}
*/
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




/*
const FIND_QUANT = (PRODUCTS) => {

    const ITEM_IN_CART = PRODUCTS.find(PRODUCTS => PRODUCTS.name === name);

     if (ITEM_IN_CART) {
            ITEM_IN_CART.quantity =+ ITEM_IN_CART.quantity;
     } else {
         PRODUCTS.push (item)
     }

}

/***********extra functions**********/

//go to top of the pagw
const TOP_FUNCTION = () => {
    console.log("clicked");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}