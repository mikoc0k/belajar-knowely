const prices = [10,30,34,86,77,181,14];
console.log(prices.length); // 7
    
// itung total cara 1
const totalPrice = getSum(prices);
console.log(totalPrice);

function getSum(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}


// itung total cara 2

const totalPrice2 = getSUM(prices);
console.log(totalPrice2);

function getSUM(prices) {
    let total =0;
    for (let price of prices){
        total += price;
    }
    return total;
    }