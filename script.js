
console.log("Hello world!")


/**********
VARIABLES
***********/

// Fields
const PURCH_FIELD = document.getElementById("purchaseField");
const MONEY_FIELD = document.getElementById("moneyField");

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



/**********
FUNCTIONS
***********/


document.getElementById("breadListings").innerHTML = PRODUCTS;


const purchItem = function () {
    //define inside of function to set, bc when it runs the function it becomes that thing
    let itemPurch = PURCH_FIELD.value;
    let userMoney = MONEY_FIELD.value;
    console.log(itemPurch);
    console.log(userMoney);

    //should be the name of item, and price .. can i get it going auto when add
    PURCHASE_LIST.push({
        money: userMoney,
        name: itemPurch,
    });

    document.getElementById("cart").innerHTML = calcTotal(PURCHASE_LIST)
}

// calculaates the price of things added to the cart and prints onto html
const calcTotal = () => {
    let total = 0;
    PURCHASE_LIST.forEach((item) => {
        total += parseFloat(item.money);
    });
    return total
}
