
console.log("Hello world!")


/**********
VARIABLES
***********/

//purchase var
const PURCH_FIELD = document.getElementById("purchaseField");

let purchaseList = [];

//Money
const USER_FIELD = document.getElementById("moneyField");
//let userMoney = USER_MONEY.value;


//

/**********
MAIN CODE
***********/





/**********
FUNCTIONS
***********/

function purchItem() {
    //define inside of function to set, bc when it runs the function it becomes that thing
    let itemPurch = PURCH_FIELD.value;
    console.log(itemPurch);

    purchaseList.push({
        // money: userMoney.value ,
        item: itemPurch.value,
    });
}