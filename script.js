
console.log("Hello world!")


/**********
VARIABLES
***********/

//purchase var
const PURCH_FIELD = document.getElementById("purchaseField");
let purchaseList = [];

//Money
const MONEY_FIELD = document.getElementById("moneyField");

//

/**********
MAIN CODE
***********/





/**********
FUNCTIONS
***********/

const purchItem = function () {
    //define inside of function to set, bc when it runs the function it becomes that thing
    let itemPurch = PURCH_FIELD.value;
    let userMoney = MONEY_FIELD.value;
    console.log(itemPurch);
    console.log(userMoney);

    //should be the name of item, and price .. can i get it going auto when add
    purchaseList.push({
        money: userMoney,
        name: itemPurch,
    });

    document.getElementById("cart").innerHTML = calcTotal(purchaseList)
}

// calculaates the price of things added to the cart and prints onto html
const calcTotal = () => {
    let total = 0;
    purchaseList.forEach((item) => {
        total += parseFloat(item.money);
    });
    return total
}
