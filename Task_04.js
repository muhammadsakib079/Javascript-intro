// Rule ----- 1. Create different variables, each containing either an array or a non-array value.
const touristDestinations = ['Paris', 'New York', 'London'];

// Rule ----- 2. Now use isArray to check if each variable is an array.
console.log(Array.isArray(touristDestinations));

// Rule ----- 3. Print a message to the console indicating whether the variable is an array or not.
if (Array.isArray(touristDestinations)) {
    console.log('The variable is an array.');
}   else {
    console.log('The variable is not an array.');
}
