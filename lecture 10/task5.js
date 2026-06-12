let totalValue = 0;

for (let product of products) {
    if (product.stock > 0) {
        let value = product.stock * product.price;

        console.log(product.name, value);

        totalValue += value;
    }
}

console.log(totalValue);