// function displayNumber(num) {
//   document.getElementById("sum").innerText = num;
// }

// function displayNumberindiv(num) {
//   document.getElementById("sum2").innerText = num;
// }

// function addNumber(num1, num2, mycallback) {
//   mycallback(num1 + num2);
// }

// addNumber(3, 2, displayNumber);

// function callapi(callback) {
//   let xhr = new XMLHttpRequest();
//   let response;
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//   // send over the network
//   xhr.send();

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       let users = JSON.parse(xhr.response);
//       response = xhr.response;
//       callback(response);
//     } else {
//       console.log(xhr.status);
//     }
//   };
//   return response;
// }

// function showInUI(data) {
//   console.log("showinui", data);
// }
// function showInUI2(data) {
//   console.log("showinui2", data);
// }
// callapi(showInUI);
// callapi(showInUI2);

// create a function to print name and age
// input should get from prompt from another function.

// function print(name, age) {}

// function execute(name, age) {}

// function input(callback) {
//   let name = prompt("enter name");
//   let age = prompt("enter age");
//   callback(name, age);
// }

// input(execute);

// setTimeout(() => {}, 1000);

setTimeout(function () {
  console.log("welcome");
  setTimeout(function () {
    console.log("to");
    setTimeout(function () {
      console.log("guvi");
    }, 2000);
  }, 2000);
}, 2000);

while (queue.waitForMessage()) {
  queue.processNextMessage();
}
