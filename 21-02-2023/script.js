// let array = [
//   {
//     name: "Incredible Soft Shoes",
//     price: "180",
//     description:
//       "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
//     image: "https://loremflickr.com/640/480/sports",
//     id: "4",
//   },
//   {
//     name: "Modern Plastic Shoes",
//     price: "755",
//     description:
//       "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
//     image: "https://loremflickr.com/640/480/sports",
//     id: "5",
//   },
//   {
//     name: "Rustic Steel Keyboard",
//     price: "979",
//     description:
//       "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
//     image: "https://loremflickr.com/640/480/sports",
//     id: "6",
//   },
//   {
//     name: "Sleek Wooden Hat",
//     price: "767",
//     description:
//       "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
//     image: "https://loremflickr.com/640/480/sports",
//     id: "7",
//   },
//   {
//     name: "Tasty Concrete Chips",
//     price: "303",
//     description:
//       "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
//     image: "https://loremflickr.com/640/480/sports",
//     id: "8",
//   },
//   {
//     name: "Generic Cotton Computer",
//     price: "965",
//     description: "The Football Is Good For Training And Recreational Purposes",
//     image: "https://loremflickr.com/640/480/sports",
//     id: "9",
//   },
//   {
//     name: "Small Frozen Table",
//     price: "451",
//     description:
//       "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
//     image: "https://loremflickr.com/640/480/sports",
//     id: "10",
//   },
// ];
// let tempArr = [];
// array.forEach((value) => {
//   if (parseInt(value.price) < 500) {
//     tempArr.push(value);
//   }
// });

// // tempArr.forEach((value) => console.log(value.name));

// // let tempArr = array.map((value) => {
// //   let totalAmout = parseInt(value.price) * 0.18 + parseInt(value.price);
// //   return `${totalAmout}, ${value.price}`;
// // });

// // let arr = array
// //   .map((value) => {
// //     let totalAmout = parseInt(value.price) * 0.18 + parseInt(value.price);
// //     return { ...value, totalAmout };
// //   })
// //   .filter((value) => parseInt(value.price) > 500);

// let search = "SH";

// let newArr = array.filter(
//   (value) =>
//     value.region === 'Asia'
//     value.description.toLowerCase().includes(search.toLowerCase())
// );

// console.log(newArr);

// let array = [78, 88, 77, 88, 77, 77, 77];

// // array.reduce((total/previousvalue, currentValue, currentIndex, arr)=>{

// // }, initialValue);

// function sum(total, num) {
//   return total + parseInt(num.price);
// }

// console.log(array.reduce(sum,0));

// let sum = 0;

// array.forEach((value) => (sum += parseInt(value.price)));

let obj = {
  name: "Sleek Wooden Hat",
  price: "767",
  description:
    "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
  image: "https://loremflickr.com/640/480/sports",
  id: "7",
};

console.log(obj.hasOwnProperty("names"));
