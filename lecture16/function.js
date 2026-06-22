function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function goodbye() {
    console.log("Goodbye");
}

greet("Daksh", goodbye);

console.log("Download Started");

setTimeout(() => {
    console.log("Download Completed");
}, 5000);

console.log("Show Data");

const myPromise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("fulfilled");
    } else {
        reject("Tera password galat hai");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Ho gaya ab");
    });

async function greet() {
    return ("hello");
    console.log(greet());
}