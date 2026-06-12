const sales = [
    { category: "Electronics", amount: 500 },
    { category: "Books", amount: 100 },
    { category: "Electronics", amount: 300 },
    { category: "Clothing", amount: 200 }
];

const revenue = {};


for (let item of sales) {
    if (revenue[item.category]) {
        revenue[item.category] += item.amount;
    } else {
        revenue[item.category] = item.amount;
    }
}

const result = [];

for (let category in revenue) {
    if (revenue[category] > 300) {
        result.push(category);
    }
}

console.log(result);