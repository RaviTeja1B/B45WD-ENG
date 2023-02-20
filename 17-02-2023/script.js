// let a = 20;

// function test() {
//   let a = 30;
//   console.log(a);
// }

// console.log(a);
// test();

// // output : 20 30

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }

// sayHi();

// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1);
//   console.log(i);
// }
// 20;
// 20;
// 20;
// 3;
// 3;
// 3;

// {
//     let i = 0;
//     console.log(i)
// },1
// {
//     let i = 1;
//     console.log(i)
// },1
// {
//     let i = 2;
//     console.log(i)
// },1

// let i=3;

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// var a = 20;

// {
//   var a = 30;
// }
// {
//     var a =40;
// }

// console.log(a);

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   // arr.push(i)
//   arr = [...arr, i];
//   console.log([...arr, i]);
// }

// console.log(arr);

// let obj = {
//   name: "guvi",
//   class: "B45",
//   name: "jagan",
// };
// // obj.name = "jagan";

// obj = { ...obj, names: "jagan" };

// console.log(obj);

// function add(name, batch, ...arr) {
//   console.log(name, batch);
//   console.log(arr);
//   let sum = 0;
//   arr.forEach((value) => console.log((sum += value)));
//   return sum;
// }

// add("jagan", "ece", 7, 8, 56, 54, 33);
// let arr = [
//   { name: "ajesh", mobileNumber: "154131", age: 18 },
//   { name: "akash", mobileNumber: "154131", age: 25 },
//   { name: "anbu", mobileNumber: "154131", age: 30 },
//   { name: "avinash", mobileNumber: "154131", age: 40 },
//   { name: "divya", mobileNumber: "154131", age: 12 },
//   { name: "karthik", mobileNumber: "154131", age: 8 },
// ];

// Create a function which accepts object if age is greater than or equal 18 return Eligible for voting
// or else return not eligible for voting

// name : eligible/not eligible

// function checkVotingEligibility(obj) {
//   if (obj.age >= 18) {
//     return "Eligible";
//   } else {
//     return "not Eligible";
//   }
// }

// let obj = {
//   name: "guvi",
//   batch: "B45",
//   rollnumber: "15451341",
//   address: "chennai",
// };

// let { name, batch } = obj;

// console.log(batch);

// let xhr = new XMLHttpRequest();
// // configure request
// xhr.open("GET", "https://restcountries.com/v3.1/all");
// // send over the network
// xhr.send();

// xhr.onload = function () {
//   if (xhr.status == 200) {
//     let users = JSON.parse(xhr.response);
//     users.forEach(({ population, subregion, name }) => {
//       let { common } = name;
//       console.log(population, subregion, common);
//     });
//   } else {
//     console.log(xhr.status);
//   }
// };

// function add(arr) {
//   let name, batch;
//   [name, batch, ...rest] = arr;
//   console.log(name, batch);
//   let sum = 0;
//   name = "guvi";
//   console.log(name);
//   console.log(arr);
//   rest.forEach((value) => console.log((sum += value)));
//   return sum;
// }

// add(["jagan", "ece", 7, 8, 56, 54, 33]);

// let user = prompt("enter name");
// let age = prompt("enter age");

// // let obj = { username: user, age:age };
// let obj = { username: user, age };

// console.log(obj);

let word = 5;
// let sentense = 6;
// // let user = prompt("enter name");
// // Hello user, welcome to guvi

// console.log(`${word} word`);
// console.log(`${sentense}`);
// (()=>{

// })()

// re
