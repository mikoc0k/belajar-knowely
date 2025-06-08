const prices = [10,30,34,86,77,181,14];
console.log(`jumlah data array prices adalah : ${prices.length}`); // 7
    
// itung total cara 1
const totalPrice = getSum(prices);
console.log(totalPrice);

function getSum(prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return `jumlah prices (for loop) adalah : ${total}`;
}


// itung total cara 2

const totalPrice2 = getSUM(prices);
console.log(totalPrice2);

function getSUM(prices) {
    let total =0;
    for (let price of prices){
        total += price;
    }
    return `jumlah prices (for of) adalah : ${total}`;
    }


// itung rerata
// agar aman dari array kosong, kita buatkan if nya

let jembod = [3,6,9];
let jembit = [];
function getAverage(values) {
    if (values.length === 0) {
        return 0;
    }
    let total = 0;
    for (let value of values) {
        total += value;
    }
    return total / values.length;
}

const average = getAverage(jembod);
console.log(average);

const aver= getAverage(jembit);
console.log(aver);

// max min value

let jembrol = [564,31,21,3]
function getMin(values) {
    let min = values[0];
    for (let value of values) {
        if (value < min) {
            min = value;
        }
    }
    return min;
}

const min = getMin(jembrol);
console.log(`nilai terkecil adalah ${min}`);