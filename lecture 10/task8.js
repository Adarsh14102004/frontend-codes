let highestCustomer = "";
let highestAmount = 0;

for (let customer of customers) {

    let total = 0;

    for (let order of customer.orders) {
        total += order.amount;
    }

    if (total > highestAmount) {
        highestAmount = total;
        highestCustomer = customer.customer;
    }
}

console.log(highestCustomer);