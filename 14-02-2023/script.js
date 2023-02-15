// var, let and const

// var a = "";

// var b = 10;

// var obj = { name: "jagan" };

// console.log(typeof obj);

// let person = {
//   name: "jagan",
//   mobileNo: "15244413",
//   age: 5,
//   eligible: true,
//   address: {
//     number: "7-3",
//   },
// };

// person.name = "guvi";

// console.log(typeof person.address.number, person.mobileNo);
// console.log(person["name"], person["mobileNo"]);

// Window and Document Object

// console.log(window.document.URL);
// console.log(document.URL);

// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.length);

// console.log(window.alert("name"));
// alert('')
// window.console('test')

// let test = document.createElement("div");

// test.innerHTML = "<p>test</p>";
// document.body.appendChild(test);
// test.setAttribute("style", "color:red;");

// <div><p>test</div>

// let p = document.createElement("p");
// p.innerText = "Welcome to guvi";
// p.setAttribute("class", "bold");
// div.appendChild(p);

// document.getElementById("access1").innerText = "access1";
// document.getElementById("access2").innerText = "access2";

// let a = 10;
// b = a;
// b = 20;
// console.log(b, a);

// let person = {
//   name: "jagan",
//   mobileNo: "15244413",
//   age: 5,
//   eligible: true,
//   address: {
//     number: "7-3",
//   },
// };

// let person1 = person;
// person1.name = "guvi";
// console.log(person1.name, person.name);

// let a = 10;
// b = a;
// let c = 20;
// b = c;
// console.log(b); //20

const value1 = Symbol("hello");
const value2 = Symbol("hello");

console.log(value1 === value2);
