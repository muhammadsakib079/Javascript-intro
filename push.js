let Unity = [40, 12];
Unity.push(10);
let love = true; 
const fruits = [390, 330, 250];
let EMA = 12 / 100;
let SAKIB = 8 / 100;
cupon = love ? EMA : SAKIB;
let grossPrice = (fruits[0] * Unity[0]) + (fruits[1] * Unity[1]) + (fruits[2] * Unity[2]);
let discount = ((grossPrice * cupon).toFixed(0));
let totalPrice = (grossPrice - discount);
console.log("Gross Price:- " + grossPrice);
console.log("Discount:- " + discount);
console.log("Total Price:-" + totalPrice);