let text = "The quick brown fox jumps over the lazy dog. The fox is quick.";

text = text.toLowerCase().replace(/[.,]/g, "");

let words = text.split(" ");

let count = {};

for (let word of words) {
    count[word] = (count[word] || 0) + 1;
}

console.log(count);