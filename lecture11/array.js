// using Array Literal
let array = ["apple", "banana", "orange", "grape", "mango"];

// using Array Constructor
let fruits = new Array(
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "lichi"
);

// length
console.log(array.length);

// push
array.push("watermelon");
console.log(array);

// pop
array.pop();
console.log(array);

// unshift
array.unshift("watermelon");
console.log(array);

// shift
array.shift();
console.log(array);

// includes
console.log(array.includes("mango"));
console.log(array.includes("watermelon"));

// indexOf
console.log(array.indexOf("mango"));

// join
console.log(array.join("-"));

// slice
console.log(array.slice(1, 3));

// splice
console.log(array.splice(1, 4));

// array restore
array = ["apple", "banana", "orange", "grape", "mango"];

// Normal Loop
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// For Of Loop
for (let fruit of array) {
    console.log(fruit);
}

// forEach
array.forEach(function(fruit) {
    console.log(fruit);
});

// =========================
// ADVANCED ARRAY METHODS
// =========================

// Map
array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const double = array.map(function(x) {
    return x * 2;
});

const doubledemo = array.map(x => x * 2);

console.log(double);
console.log(doubledemo);
console.log(array);

// Filter
const even = array.filter(function(x) {
    return x % 2 === 0;
});

const evendemo = array.filter(x => x % 2 === 0);

console.log(even);
console.log(evendemo);

const odd = array.filter(x => x % 2 !== 0);

console.log(odd);

// Reduce
const sum = array.reduce(function(total, x) {
    return total + x;
}, 0);

const sum1 = array.reduce(function(total, x) {
    return total + x;
});

const sum2 = array.reduce((total, x) => total + x, 0);

const sum3 = array.reduce((total, x) => total + x);

console.log(sum);
console.log(sum1);
console.log(sum2);
console.log(sum3);

// FIND
// condition satisfy karne wala pehla element return karta hai
const f = array.find(function(x) {
    return x == 3;
});

const fdemo = array.find(x => x == 3);

console.log(f);
console.log(fdemo);

// SOME
// batata hai ki sare elements satisfy condition kar rahge hai ya nahi
const s = array.some(function(x) {
    return x > 3;
});

const sdemo = array.some(x => x > 3);

console.log(s);
console.log(sdemo);

// EVERY
// agar saare elements condition satisfy kare to true
const e = array.every(function(x) {
    return x > 5;
});

const edemo = array.every(x => x > 5);

console.log(e);
console.log(edemo);