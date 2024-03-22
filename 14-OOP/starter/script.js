'use strict';

///////////////////////////////////////////////////////////////////////////////////
// Constructor Functions and the new Operator
///////////////////////////////////////////////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// Person.hey();

///////////////////////////////////////
// Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototyeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species')); // it will be false because it has access to jonas by prototype but not in the jonas object

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

//////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

///////////////////////////////////////////////////////////////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     // 1. This constructor actually works in a pretty similar way as a constructor function, so as we studied previously but this one is actually a method of this class.
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //2. Instance methods: Methods will be added to .prototype property. Now, what's important to understand here is that all of these methods that we write in the class, so outside of the constructor will be on the prototype of the objects. And not on the objects themselves.

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   // 3. classes do also have getters and setters, and they do indeed work in the exact same way.

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // 4. Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   //Static Method
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// const walter = new PersonCl('Walter White', 1965); // doesn't have _fullName
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// // 3. Classes are NOT hoisted. And so even if they are class declarations. So functional declarations, remember, are hoisted, which means we can use thembefore they are declared in the code. But with classes, that doesn't work.
// // 4. Classes are first-class citizens
// // 5. Classes are executed in strict mode

// PersonCl.hey();

/////////////////////////////////////////////////////////////////////////////////////////////////
// Setters and Getters
// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();  // 1. this.movements.slice (-1) But this is actually gonna return an array, so an array with the last position and so we can simply take that out using the pop method.
//   },

//   set latest(mov) {  // 2. any setter method needs to have exactly one parameter
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

/////////////////////////////////////////////////////////////////////////////////////////////////
// Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const Shafinul = Object.create(PersonProto);

// console.log(Shafinul);

// Shafinul.name = 'Shafinul';
// Shafinul.birthYear = 1993;
// Shafinul.calcAge();

// console.log(Shafinul.__proto__ === PersonProto);

// const Sarah = Object.create(PersonProto);

// Sarah.init('Sarah', 1997);
// Sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford)



/////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
};

person.prototype.calcage = function(){
  console.log(2024-this.birthYear);
}

const student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  person.call(this, firstName, birthYear)   // commit msg 1
  this.course = course;
}

// 2. Linking prototypes
student.prototype = Object.create(person.prototype);

student.prototype.introduce = function()
{
  console.log(`My name is ${this.firstName} and I studied in ${this.course}.`)
}
const shafinul = new student ('Shafinul', 1995, 'CSE');

console.log(shafinul);
shafinul.introduce();
shafinul.calcage();

// 3. Checking all the inherit prototypes

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);