'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function({starterIndex, mainIndex, time, address}){
  //   console.log(
  //     //**Error on: ${this.starterMenu.[starterIndex]}, there will be no dot after starter */
  //     // `Order Recieved! ${this.starterMenu.[starterIndex]} and ${this.mainMenu.[mainIndex]} will be delivered at ${time} to ${address}`
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //     );
  // },

  //*******Another Way: Calling a function from an obect's property's to interchange  array data.

  orderDelivery: function({starterIndex=2, mainIndex=2, time='19:30', address}){  //setting perameters data on function
    console.log(
      //**Error on: ${this.starterMenu.[starterIndex]}, there will be no dot after starter */
      // `Order Recieved! ${this.starterMenu.[starterIndex]} and ${this.mainMenu.[mainIndex]} will be delivered at ${time} to ${address}`
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
  },


  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


//*******DE Structuring Arrays*******

//Storing array in multiple variable

// const arr = [0, 1, 2];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2]; OR we can declare as:

// const [a, b, c] = arr; //1. How to store array in multiplevariable?



// let [ first, , third] = restaurant.categories; //2. How to store data in an array variable, retrieving from object data.

// console.log(first, third );

// [ first, third] = [third,first];

// console.log(first, third );  //3. Interchanging the values of an arrayS

// const restaurant2 = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

// };

// console.log(restaurant2.order(0,1)); //4. Retrieving data from object array using function
// console.log(restaurant2.order(1,2)); 
// console.log(restaurant2.order(2,3));


//********Nested Array destructuring

// const nested= [1,2, , [4,5]];

// const [ i, j, ,[k,l]]=  nested;

// console.log(j, k, l);


// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // normal array representation
// console.log(badNewArr);

// const newArr = [1, 2, ...arr]; // array's data are calling with **spread** operators
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // Changing the name of object's property , also adding new array item to that property.
// console.log(newMenu);

//**Destructuring object with function(updating on restuarant object script line 19-21) */

restaurant.orderDelivery({
  address: '119/2 Ahmedbag, Dhaka-1214',
  starterIndex: 1       //updating data on function calling
  
})

