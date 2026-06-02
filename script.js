
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

    purchaseList.push({
        money: userMoney.value,
        name: itemPurch.value,
    });

    document.getElementById("cart").innerHTML = calcTotal(purchaseList)
}

const calcTotal = () => {
    let total = 0;

    purchaseList.forEach((item) => {
        total += parseFloat(item.money);
    });

    return total
}
