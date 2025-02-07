// Enter the Unity of Fruit

// let apples = 40;
// let oranges = 12; 
// let goabas = 10;

let Unity = [40, 12, 10];


// Get Discount
let love = false; 


// Product Price 
// let applePerKg = 390;
// let orangePerKg = 330;
// let goabaPerKg = 250;

const fruits = [390, 330, 250];


// // Dicount Cupon
let EMA = 12 / 100;
let SAKIB = 8 / 100;
// Discount Value

// if(love == true){cupon = EMA}
// else{cupon = SAKIB};

cupon = love ? EMA : SAKIB;


// Price Counting Process
let grossPrice = (fruits[0] * Unity[0]) + (fruits[1] * Unity[1]) + (fruits[2] * Unity[2]);
let discount = ((grossPrice * cupon).toFixed(0));
let totalPrice = (grossPrice - discount);
console.log("Gross Price:- " + grossPrice);
console.log("Discount:- " + discount);
console.log("Total Price:-" + totalPrice);




