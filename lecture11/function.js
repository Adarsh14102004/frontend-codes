function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        getBalance: function() {
            return balance;
        },


        deposit: function(amount) {
            balance += amount;
        },

        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
            }
        }
    };
}

const acc = createBankAccount(1000);

acc.deposit(500);
acc.withdraw(200);

console.log(acc.getBalance());
console.log(acc.balance); // undefined, balance is private
function multiplier(factor) {
    return function(number) {

        return number * factor;
    }
}
const double = multiplier(2);

console.log(double(5)); // 10