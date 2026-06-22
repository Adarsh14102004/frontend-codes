// 1. Downloading a File (Callback)
function downloadFile(url, callback) {
    console.log("Starting download...");
    setTimeout(() => {
        console.log("Download completed");
        callback();
    }, 2000);
}

downloadFile("file.pdf", () => {
    console.log("Opening file...");
});



// 2. User Authentication (Nested Callbacks)
function login(callback) {
    setTimeout(() => {
        console.log("User authenticated");
        callback();
    }, 1000);
}

function getProfile(callback) {
    setTimeout(() => {
        console.log("Profile fetched");
        callback();
    }, 1000);
}

login(() => {
    getProfile(() => {
        console.log("Displaying profile");
    });
});



// 3. Food Delivery Process
function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order placed");
        callback();
    }, 1000);
}

function prepareFood(callback) {
    setTimeout(() => {
        console.log("Food prepared");
        callback();
    }, 2000);
}

function deliverFood(callback) {
    setTimeout(() => {
        console.log("Food delivered");
        callback();
    }, 1000);
}

placeOrder(() => {
    prepareFood(() => {
        deliverFood(() => {
            console.log("Enjoy your meal!");
        });
    });
});



// 4. Callback Hell
function download(cb) {
    setTimeout(() => {
        console.log("Download Complete");
        cb();
    }, 1000);
}

function compress(cb) {
    setTimeout(() => {
        console.log("Compression Complete");
        cb();
    }, 1000);
}

function upload(cb) {
    setTimeout(() => {
        console.log("Upload Complete");
        cb();
    }, 1000);
}

console.log("Start Download");

download(() => {
    console.log("Compressing File");

    compress(() => {
        console.log("Uploading File");

        upload(() => {
            console.log("Process Finished");
        });
    });
});



// 5. Download File using Promise
function downloadFilePromise() {
    return new Promise((resolve) => {
        console.log("Starting download...");
        setTimeout(() => {
            resolve("Download completed");
        }, 2000);
    });
}

downloadFilePromise()
    .then(result => {
        console.log(result);
    });



// 6. Check Even or Odd
function checkEven(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0)
            resolve("Even Number");
        else
            reject("Odd Number");
    });
}

checkEven(8)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));



// 7. ATM Withdrawal
function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        if (balance >= amount)
            resolve("Withdrawal Successful");
        else
            reject("Insufficient Balance");
    });
}

withdraw(5000, 2000)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));



// 8. Promise Chaining
function downloadP() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Downloaded");
            resolve();
        }, 1000);
    });
}

function compressP() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Compressed");
            resolve();
        }, 1000);
    });
}

function uploadP() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Uploaded");
            resolve();
        }, 1000);
    });
}

downloadP()
    .then(() => compressP())
    .then(() => uploadP())
    .then(() => console.log("All Tasks Completed"));



// 9. Promise.all()
const api1 = Promise.resolve("User Data");
const api2 = Promise.resolve("Orders Data");
const api3 = Promise.resolve("Payment Data");

Promise.all([api1, api2, api3])
    .then(results => {
        console.log(results);
    });