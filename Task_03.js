// Rule ------ 1. Create an array of books containing different book.
const books = ['The Alchemist', 'The Little Prince', 'The Da Vinci Code'];

// Rule ------ 2. Use the includes method to check if the array contains a javascript book.
console.log(books.includes('Javascript Book'));

// Rule ------ 3. Print a message to the console indicating whether the element is present in the array or not.
if (books.includes('Javascript Book')) {
    console.log('The array contains a Javascript book.');
} else {
    console.log('The array does not contain a Javascript book.');
}