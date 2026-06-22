const user = Promise.resolve("User Data");
// const posts = Promise.resolve("Posts Data");
// const comments = Promise.resolve("Comments Data");

// Promise.all([user, posts, comments])
//     .then(result => {
//         console.log(result);
//     });



// // 10. Promise.race()
// const server1 = new Promise(resolve => {
//     setTimeout(() => resolve("Response from Server 1"), 3000);
// });

// const server2 = new Promise(resolve => {
//     setTimeout(() => resolve("Response from Server 2"), 1000);
// });

// const server3 = new Promise(resolve => {
//     setTimeout(() => resolve("Response from Server 3"), 2000);
// });

// Promise.race([server1, server2, server3])
//     .then(result => {
//         console.log(result);
//     });