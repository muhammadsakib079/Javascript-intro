// Enter the Unity of Fruit

let apples = 40;
let oranges = 12; 
let goabas = 10;

// Get Discount
let love = true; 














// Product Price 
let applePerKg = 390;
let orangePerKg = 330;
let goabaPerKg = 250;
// // Dicount Cupon
let EMA = 12 / 100;
let SAKIB = 8 / 100;
// Discount Value
if(love == true){cupon = EMA}
else{cupon = SAKIB};
// Price Counting Process
let grossPrice = ((applePerKg * apples) + (orangePerKg * oranges) + (goabaPerKg * goabas));
let discount = ((grossPrice * cupon).toFixed(0));
let totalPrice = (grossPrice - discount);
console.log("Gross Price:- " + grossPrice);
console.log("Discount:- " + discount);
console.log("Total Price:-" + totalPrice);




