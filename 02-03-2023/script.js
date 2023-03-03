// let p = document.createElement("p");
// p.innerHTML = "<p>test</p>";
// p.setAttribute("class", "paragraph");

// let container = document.getElementById("container");
// container.append(p);

// // document.body.append(p); // works fine
// // document.body.appendChild(p); // works fine

// document.body.append("Welcome to guvi"); // works fine
// document.body.appendChild("Welcome to guvi"); // works fine

// let text = document.querySelector(".container");
// console.log(text);

// let textArr = document.querySelectorAll(".container");
// console.log(textArr);

// const qselector = () => {
//   document.querySelector(".container").style.color = "green";
// };

// const qselectorAll = () => {
//   console.log(document.querySelectorAll(".container"));
//   document
//     .querySelectorAll(".container")
//     .forEach((value) => (value.style.color = "red"));
// };

// create 3 image tag from js and give image url src and aplly height=50 and widht=50
// create a button show big when i click it need to show height=100 width=100 from js
// create a button show small when i click it need to show height=50 width=50 from js
let image1 = document.createElement("img");
image1.setAttribute(
  "src",
  "https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
);
image1.setAttribute("height", "100");
image1.setAttribute("width", "100");
image1.setAttribute("class", "size");
document.body.appendChild(image1);
image1.style.margin = "10px";

let image2 = document.createElement("img");
image2.setAttribute(
  "src",
  "https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
);
image2.setAttribute("height", "100");
image2.setAttribute("width", "100");
image2.setAttribute("class", "size");

document.body.appendChild(image2);
image2.style.margin = "10px";

let image3 = document.createElement("img");
image3.setAttribute(
  "src",
  "https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
);
image3.setAttribute("height", "100");
image3.setAttribute("width", "100");
image3.setAttribute("class", "size");

document.body.appendChild(image3);
image3.style.margin = "10px";

let button1 = document.createElement("button");
button1.innerText = "Big Image";
button1.setAttribute("onclick", "BigImage()");
document.body.append(button1);

let button2 = document.createElement("button");
button2.innerText = "Small Image";
button2.setAttribute("onclick", "SmallImage()");
document.body.append(button2);

function BigImage() {
  document.querySelectorAll(".size").forEach((value) => {
    value.setAttribute("height", "100");
    value.setAttribute("width", "100");
  });
}

function SmallImage() {
  document.querySelectorAll(".size").forEach((value) => {
    value.setAttribute("height", "50");
    value.setAttribute("width", "50");
  });
}
