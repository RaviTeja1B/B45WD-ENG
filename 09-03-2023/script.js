// syntax for promise

// let promise = new Promise((resolve, reject) => {});

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// });
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 3000);
// });

// let promise2 = promise.then()

// promise
//   .then((num) => {
//     console.log(num);
//     promise2.then((data) => {
//       console.log(data);
//       promise3.then((value) => console.log(value));
//     });
//   })
//   //   .then((value) => {
//   //     console.log(value);
//   //     return promise3;
//   //   })
//   //   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     console.log(data);
//     data.json();
//   })
//   .then((res) => {
//     let users = res.map(({ username }) => {
//       if (username.length > 5) {
//         return username;
//       }
//     });
//     return users;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// function printData(res) {
//   res.map(({ username }) => {
//     if (username.length > 5) {
//       console.log(username);
//     }
//   });
// }

// create an api call and get the users
// crete a function which will print users whose username lenght is greater than 5

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// }).then((res) => {
//   console.log(res);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(2), 1000);
//   })
//     .then((res) => {
//       console.log(res);
//       return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(3), 1000);
//       });
//     })
//     .then((res) => {
//       console.log(res);
//     });
// });

// let promise1 = Promise.resolve(3);
// let promise2 = 42;
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve(10), 5000);
// });

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );

// let promise1 = fetch("https://jsonplaceholder.typicode.com/posts");
// let promise2 = fetch("https://jsonplaceholder.typicode.com/users");

// Promise.all([promise1, promise2])
//   .then((value) => Promise.all(value.map((data) => data.json())))
//   .then((res) => console.log(res));

// let promise1 = Promise.reject(0);
// let promise2 = Promise.resolve(2);
// let promise3 = Promise.resolve(3);

// Promise.all([promise1, promise2, promise3])
//   .then((data) => data.forEach((data) => console.log(data)))
//   .catch((err) => console.log("reject" + err));

let promise1 = Promise.reject();
let promise2 = new Promise((resolve) => setTimeout(resolve(100), 2000));
let promise3 = new Promise((resolve) => setTimeout(resolve(500), 5000));
Promise.race([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log("reject" + err));
