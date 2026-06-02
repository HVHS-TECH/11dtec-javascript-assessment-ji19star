
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

const purchItem = function() {
    //define inside of function to set, bc when it runs the function it becomes that thing
    let itemPurch = PURCH_FIELD.value;
    console.log(itemPurch);

    purchaseList.push({
        // money: userMoney.value ,
        item: itemPurch.value,
    });
}

function cartItemProcessor(k, v) {
    total += v.item;
    cartItems++;
}

function peener(callback) {
    // do some stuff
    sizeOfPoop = 'big'

    //notify callback
    callback(sizeOfPoop);
}

peener((arg) => { console.log(arg); })

const calcTotal = () => {
    let total = 0;
    let cartItems = 0;

    purchaseList.forEach(cartItemProcessor);

    for (let i=0; i<purchaseList.length; i++) {
        total += purchaseList[i].item;
    }
    return total
}
