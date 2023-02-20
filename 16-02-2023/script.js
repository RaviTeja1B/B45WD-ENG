// function fname(){}

// var a = 20;
// console.log(a);
// let p = document.createElement("p");
// document.body.appendChild(p);

// function fname(a, b) {
//   //   let a = 10;
//   //   let b = 20;
//   return a + b;
// }

// let a = prompt("enter A value");
// let b = prompt("enter B value");

// console.log(a, b);

// p.innerText = fname(parseInt(a), parseInt(b));
// p.innerText = fname(+a, +b);

let arr = [
  { name: "ajesh", mobileNumber: "154131", age: 18 },
  { name: "akash", mobileNumber: "154131", age: 25 },
  { name: "anbu", mobileNumber: "154131", age: 30 },
  { name: "avinash", mobileNumber: "154131", age: 40 },
  { name: "divya", mobileNumber: "154131", age: 12 },
  { name: "karthik", mobileNumber: "154131", age: 8 },
];

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

let checkVotingEligibility = function (obj) {
  if (obj.age >= 18) {
    return "Eligible";
  } else {
    return "not Eligible";
  }
};

let div = document.createElement("div");
document.body.appendChild(div);
arr.forEach(function (value) {
  let p = document.createElement("p");
  // p.innerText = value.name + ":" + checkVotingEligibility(value);
  p.innerHTML = `${value.name} : <b>${checkVotingEligibility(value)}</b>`;

  div.appendChild(p);
});

setTimeout(function () {
  console.log(25);
}, 5000);

(function (a) {
  let countries;
})(10);
