// 1. Implement your own setTimeout using Callbacks

function mySetTimeout(callback, delay) {
    const start = Date.now();

    function check() {
        if (Date.now() - start >= delay) {
            callback();
        } else {
            setTimeout(check, 1);
        }
    }

    check();
}

mySetTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

// 2. Login → Profile → Posts Flow using Callbacks
function login(callback) {
    setTimeout(() => {
        console.log("User Logged In");
        callback();
    }, 1000);
}

function getProfile(callback) {
    setTimeout(() => {
        console.log("Profile Loaded");
        callback();
    }, 1000);
}

function getPosts(callback) {
    setTimeout(() => {
        console.log("Posts Loaded");
        callback();
    }, 1000);
}

login(() => {
    getProfile(() => {
        getPosts(() => {
            console.log("Display Posts");
        });
    });
});
// 3. Convert Callback Hell into Promise Chaining
function download() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Downloaded");
            resolve();
        }, 1000);
    });
}

function compress() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Compressed");
            resolve();
        }, 1000);
    });
}

function upload() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Uploaded");
            resolve();
        }, 1000);
    });
}

download()
    .then(() => compress())
    .then(() => upload())
    .then(() => console.log("Process Completed"));



// 4. E-Commerce Checkout Process
function addToCart() {
    return Promise.resolve("Product Added to Cart");
}

function payment() {
    return Promise.resolve("Payment Successful");
}

function placeOrder() {
    return Promise.resolve("Order Placed");
}

addToCart()
    .then(msg => {
        console.log(msg);
        return payment();
    })
    .then(msg => {
        console.log(msg);
        return placeOrder();
    })
    .then(msg => console.log(msg));



// 5. Traffic Light Sequence
function light(color, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(color);
            resolve();
        }, time);
    });
}

light("🔴 Red", 1000)
    .then(() => light("🟡 Yellow", 1000))
    .then(() => light("🟢 Green", 1000));



// 6. Movie Ticket Booking System
function selectSeat() {
    return Promise.resolve("Seat Selected");
}

function makePayment() {
    return Promise.resolve("Payment Done");
}

function bookTicket() {
    return Promise.resolve("Ticket Booked");
}

selectSeat()
    .then(msg => {
        console.log(msg);
        return makePayment();
    })
    .then(msg => {
        console.log(msg);
        return bookTicket();
    })
    .then(msg => console.log(msg));



// 7. Simulate Bank Transactions
function deposit(balance, amount) {
    return Promise.resolve(balance + amount);
}

function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        if (balance >= amount)
            resolve(balance - amount);
        else
            reject("Insufficient Balance");
    });
}

deposit(1000, 500)
    .then(balance => {
        console.log("After Deposit:", balance);
        return withdraw(balance, 800);
    })
    .then(balance => {
        console.log("After Withdrawal:", balance);
    })
    .catch(err => console.log(err));



// 8. Fetch Student Marks and Calculate Grade
function getMarks() {
    return Promise.resolve(85);
}

function calculateGrade(marks) {
    return new Promise(resolve => {
        let grade;

        if (marks >= 90) grade = "A+";
        else if (marks >= 80) grade = "A";
        else if (marks >= 70) grade = "B";
        else if (marks >= 60) grade = "C";
        else grade = "Fail";

        resolve(grade);
    });
}

getMarks()
    .then(marks => {
        console.log("Marks:", marks);
        return calculateGrade(marks);
    })
    .then(grade => console.log("Grade:", grade));



// 9. Promise.all()
const user = Promise.resolve("User Data");
const posts = Promise.resolve("Posts Data");
const comments = Promise.resolve("Comments Data");

Promise.all([user, posts, comments])
    .then(result => {
        console.log(result);
    });



// 10. Promise.race()
const server1 = new Promise(resolve => {
    setTimeout(() => resolve("Response from Server 1"), 3000);
});

const server2 = new Promise(resolve => {
    setTimeout(() => resolve("Response from Server 2"), 1000);
});

const server3 = new Promise(resolve => {
    setTimeout(() => resolve("Response from Server 3"), 2000);
});

Promise.race([server1, server2, server3])
    .then(result => {
        console.log(result);
    });