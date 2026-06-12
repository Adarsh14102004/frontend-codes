let credit = 0;
let debit = 0;

for (let t of transactions) {

    if (t.type === "credit") {
        credit += t.amount;
    } else {
        debit += t.amount;
    }
}

let balance = credit - debit;

console.log(credit);
console.log(debit);
console.log(balance);