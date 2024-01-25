function add(value){
    return balance + value;
}

function sub(value){
    return balance - value;
}

function mult(tax){
    return balance * tax/100;
}

function div(value){
    return balance / value;
}

let balance = 1000;

let subtraction = sub(30)
let adition = add(30);
let multiplication = mult(10);
let division = div(10);

console.log(`soma: ${adition} subtração: ${subtraction} multiplicação por taxa: ${multiplication} divisão:${division}`);
