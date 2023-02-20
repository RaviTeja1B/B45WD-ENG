// var a = 10;
// console.log(this.a);

// let obj = {
//   firstName: "jagan",
//   lastName: "mohan",
//   fullName: function () {
//     return this.firstname + this.lastName;
//   },
// };

// console.log(obj.fullName());

// const myFunction = () => {
//   console.log(this);
// };

// myFunction();

// ("use strict");
// function myFunction() {
//   console.log(this);
// }

// myFunction();

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// let car1 = new Car("Audi", 2019);
// let car2 = new Car("BMW", 2020);
// let car3 = new Car("alto", 2011);

// class Audi extends Car {
//   constructor(name, year, color) {
//     super(name, year);
//     this.color = color;
//   }
// }

// Audi.prototype.age = function () {
//   let date = new Date();
//   return date.getFullYear() - this.year;
// };

// let car1 = new Audi("Audi", 2019, "black");
// let car3 = new Audi("Audi", 2019, "black");
// console.log(car3.age());

// let car2 = new Car();

// console.log(car1);

// console.log(car3.age());

// create a class person with name, rollno, maths, physics and chemistry, add/create 5 persons,
//  create function to return
// 'Marks for {person name}/{roll number} is {total marks}'

// class Person {
//   constructor(name, rollno, maths, physics, chemistry) {
//     this.name = name;
//     this.rollno = rollno;
//     this.maths = maths;
//     this.physics = physics;
//     this.chemistry = chemistry;
//   }

//   calculateMarks() {
//     let sum = this.maths + this.physics + this.chemistry;
//     // return `Marks for ${this.name}/${this.rollno} is ${sum}`;
//   }
//   result() {
//     let total = this.maths + this.physics + this.chemistry;
//     let result = this.calculateMarks();
//     return;
//   }
// }

// let rahul = new Person("rahul", 1, 25, 23, 25);

// Array.prototype.firstElement = function () {
//   //   for (let i = 0; i <= this.length; i++) return this[i];
//   console.log(this.length);
// };

// let myArr = [7, 8, 7, 8];

// console.log(myArr.firstElement((value) => console.log(value)));

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
  new_string += numsArr[i];
}
console.log(new_string);

class Person {
  constructor(name, rollno, maths, physics, chemistry) {
    this.name = name;
    this.rollno = rollno;
    this.maths = maths;
    this.physics = physics;
    this.chemistry = chemistry;
  }

  get personName() {
    return this.name;
  }
  set setpersonName(name) {
    this.name = name;
  }
  result() {
    let total = this.maths + this.physics + this.chemistry;
    let result = this.calculateMarks();
    return;
  }
}

let person = new Person("Jagan", 265, 88, 88, 88);

person.setpersonName = "ravi";
console.log(person.personName);
