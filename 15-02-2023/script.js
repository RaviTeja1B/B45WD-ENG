// var arr = ["orange", "banana", "grape"];

// var persons = {
//   name: "akash",
//   age: 22,
//   color: "red",
//   address: ["chennai", "hyderbad"],
// };
// console.log(JSON.stringify(persons));

// // let div = document.createElement("div");
// // document.body.appendChild(div);

// // for (var i = 0; i < persons.length; i++) {
// //   let p = document.createElement("p");
// //   p.innerText = persons[i].name;
// //   //   p.setAttribute("style", `color:${persons[i].color}`);
// //   p.setAttribute("style", "color:" + persons[i].color);
// //   p.setAttribute("class", "test");

// //   div.appendChild(p);
// // }
// // for(initialisation, condition, increment/decrement);
// // for..of and for..in
// let obj = { name: "akash", age: 22, color: "red" };
// console.log(arr[0]);
// for (var i of persons) {
//   //   console.log(obj[i]);
//   // let p = document.createElement("p");
//   // p.innerText = persons[i].name;
//   // //   p.setAttribute("style", `color:${persons[i].color}`);
//   // p.setAttribute("style", "color:" + persons[i].color);
//   // p.setAttribute("class", "test");
//   // div.appendChild(p);
//   for (var j of i.age) {
//     console.log(j);
//   }

// }

let div = document.createElement("div");
document.body.appendChild(div);
// create a new xmlhttprequest object
let xhr = new XMLHttpRequest();
// configure request
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// send over the network
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    let users = JSON.parse(xhr.response);
    // console.log(users);
    // for (var i of users) {
    //   console.log(i);
    //   let p = document.createElement("p");
    //   p.innerHTML = `<b>${i.name}</b> : ${i.phone}`;
    //   div.appendChild(p);
    // }
    // users.forEach((value, index) => {
    //   let p = document.createElement("p");
    //   p.innerHTML = `${index + 1} <b>${value.name}</b> : ${value.phone}`;
    //   div.appendChild(p);
    // });
  } else {
    console.log(xhr.status);
  }
};

let users = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

// hoisting

// const
// let a = 10;

// {
//   let a = 20;
// }
// a = 30;
// console.log(a);
