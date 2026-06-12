// Normal Function
function add(a, b) {
    return a + b;
}

// Function Expression
const multiply = function(a, b) {
    return a * b;
};

// Arrow Function
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

// Function with Default Parameter
const power = (base, exponent = 2) => Math.pow(base, exponent);

// Function with Rest Parameters
const sum = (...numbers) =>
    numbers.reduce((total, num) => total + num, 0);

// Greeting Function
const greet = (name) => console.log(`Hello, ${name}!`);

// Callback Function Example
const fetchData = (callback) => {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 1000);
};

// ===============================
// Arrow Functions with Arrays
// ===============================

const numbers = [1, 2, 3, 4, 5];

// map()
const squares = numbers.map(num => num * num);

// filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce()
const total = numbers.reduce((sum, num) => sum + num, 0);

// find()
const firstEven = numbers.find(num => num % 2 === 0);

// forEach()
numbers.forEach(num => console.log(`Number: ${num}`));

// ===============================
// Example Usage
// ===============================

console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 5));
console.log("Divide:", divide(10, 2));
console.log("Power:", power(5));
console.log("Sum:", sum(1, 2, 3, 4, 5));

console.log("Squares:", squares);
console.log("Even Numbers:", evenNumbers);
console.log("Total:", total);
console.log("First Even:", firstEven);

greet("Ideal");

fetchData((data) => {
    console.log("Fetched Data:", data);
});