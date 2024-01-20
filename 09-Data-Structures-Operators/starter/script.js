'use strict';

/////////////////////////////////////////////////////////////////////////////////////////
//   Data needed for a later exercise
/////////////////////////////////////////////////////////////////////////////////////////

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


/////////////////////////////////////////////////////////////////////////////////////////
//   Data needed for first part of the section
/////////////////////////////////////////////////////////////////////////////////////////  

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

  //Function to Displaying the ingredients after user input

  orderPasta: function(ing1, ing2, ing3){
    console.log(`You added ${ing1}, ${ing2}, ${ing3} to your pasta.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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

/////////////////////////////////////////////////////////////////////////////////////////
//   DE Structuring Arrays
/////////////////////////////////////////////////////////////////////////////////////////


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

/////////////////////////////////////////////////////////////////////////////////////////
//   Nested Array destructuring
/////////////////////////////////////////////////////////////////////////////////////////


// const nested= [1,2, , [4,5]];

// const [ i, j, ,[k,l]]=  nested;

// console.log(j, k, l);



/////////////////////////////////////////////////////////////////////////////////////////
//   Spread Operators Some basics 
/////////////////////////////////////////////////////////////////////////////////////////


// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // normal array representation
// console.log(badNewArr);

// const newArr = [1, 2, ...arr]; // array's data are calling with **spread** operators
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // Changing the name of object's property , also adding new array item to that property.
// console.log(newMenu);

/////////////////////////////////////////////////////////////////////////////////////////
//**Destructuring object with function(updating on restuarant object script line 19-21) */
/////////////////////////////////////////////////////////////////////////////////////////



// restaurant.orderDelivery({
//   address: '119/2 Ahmedbag, Dhaka-1214',
//   starterIndex: 1       //updating data on function calling
  
// })

/////////////////////////////////////////////////////////////////////////////////////////
//***Spread operator: Calling the array data stored in ingredients by object's property function (Script:39-41) */
/////////////////////////////////////////////////////////////////////////////////////////



//promt to ask about ingredients to customer

// const ingredients= [
//   prompt('Make Pasta Ingredient 1?'),
//   prompt('Make Pasta Ingredient 2?'),
//   prompt('Make Pasta Ingredient 3?')
// ]

// console.log(ingredients); //Displaying the ingredients after user input

// // restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]); //old ways function calling


// restaurant.orderPasta(...ingredients); //Calling the array data stored in ingredients by object's property function (Script:39-41) with spread operators

//////////////////////////////////////////////////////////////////////////////////////////
//   Modifying objects with spread operators */
//////////////////////////////////////////////////////////////////////////////////////////

//Spread operators can work with iterables , but objects are not iterables so we have to call it inside{}
// const restaurantNew= {...restaurant}; // storing objects value to new variable with spread operator
// console.log(restaurantNew);

// restaurantNew.name='Hatam Tai'; // Updating name on new object

// console.log(restaurant.name); // Displying older name
// console.log(restaurantNew.name); // Displaying new name


//////////////////////////////////////////////////////////////////////////////////////////
//                         Rest Pattern and Parameters 
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
//                         The Basics
//////////////////////////////////////////////////////////////////////////////////////////



//Spread operator unpack an array
//Rest operator packed an array

// Spread works with value , used on right side of =
// const arr= [1, 2, 3, ...[4,5]] ;
// console.log(arr);

// // Rest works with variable , used on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // The rest operator should be the last element, so there should be one rest operators

// const [pizza , ...otherFood]= [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(pizza);
// console.log(...otherFood);

// //Rest operators working on Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //Rest on functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++)
//    sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// //Rest operators on function perameters
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');


//////////////////////////////////////////////////////////////////////////////////////////
//                         OR, && Operators ShortCircuiting 
//////////////////////////////////////////////////////////////////////////////////////////

// console.log('---- OR ----');
// // Use ANY data type, return ANY data type, short-circuiting
// //OR operator will return first truthy value
// console.log(3 || 'Jishan');
// console.log('' || 'Jishan');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// //AND operator will return first falsie value
// console.log(0 && 'Jishan');
// console.log(7 && 'Jishan');

// console.log('Hello' && 23 && null && 'Jishan');

// // Practical example
// //if logic to check if a method exist
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// //Tarnary logic to check if a method exist
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//////////////////////////////////////////////////////////////////////////////////////////
//                         The Nullish Coalescing Operator
//////////////////////////////////////////////////////////////////////////////////////////


// // The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10; //Null and undefined is falsie value so turthy value 10 is return
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10; //0 or empty string as truthy value so 0 is returned
// console.log(guestCorrect)


//////////////////////////////////////////////////////////////////////////////////////////
//                        Coding Challenge: Array 
//////////////////////////////////////////////////////////////////////////////////////////

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //////////////////////////////////////////////////////////////////////////////////////////
// //1. Create one player array for each team (variables 'players1' and 'players2')
// //////////////////////////////////////////////////////////////////////////////////////////

// const [players1, players2]= game.players; //Setting array variables from object's array
// console.log(players1, players2)

// //////////////////////////////////////////////////////////////////////////////////////////
// //2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// //////////////////////////////////////////////////////////////////////////////////////////

// const [gk, ...fieldPlayers]= players1; //Using rest operators, assigning 1st member then remainings player
// console.log(gk, fieldPlayers);

// //////////////////////////////////////////////////////////////////////////////////////////
// //3. Create an array 'allPlayers' containing all players of both teams (22 players)
// //////////////////////////////////////////////////////////////////////////////////////////

// const allPlayers =[...players1,...players2];  //Using spread operator 2 array is joined to one array
// console.log(allPlayers);

// //////////////////////////////////////////////////////////////////////////////////////////
// //4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// //////////////////////////////////////////////////////////////////////////////////////////

// const players1Final =[...players1,'Thiago','Continho','Perisic']; //Using spread operator and playername to update all payers to a final variable
// console.log(players1Final);

// //////////////////////////////////////////////////////////////////////////////////////////
// //5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// //////////////////////////////////////////////////////////////////////////////////////////

// const {odds: { team1, x:draw , team2}} =game; //Setting the variable name on a nested destructuring , here we rename x to draw, It's a compex concept

// console.log(team1,draw, team2);

// //////////////////////////////////////////////////////////////////////////////////////////
// //6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// //////////////////////////////////////////////////////////////////////////////////////////

// const printGoals= function(...players){ // Recieve an array of perameters
//   console.log(players); //Dispalayng the array
//   console.log(`${players.length} goles are scored`); //Number of array are goaled
// }

// printGoals(...game.scored);

// //////////////////////////////////////////////////////////////////////////////////////////
// //7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// //////////////////////////////////////////////////////////////////////////////////////////

// team1 < team2 && console.log('Team 1 is more likely to win'); //passed the condition and print
// team1 > team2 && console.log('Team 2 is more likely to win');

//////////////////////////////////////////////////////////////////////////////////////////
//                        110 Looping Arrays The for of Loop
//////////////////////////////////////////////////////////////////////////////////////////

const menu = [...restaurant.starterMenu,...restaurant.mainMenu] //Joining two array into one variable

console.log(menu);

for (const item of menu){ //for of loop
  console.log(item);
}

console.log(...menu.entries());

//Old Ways to use for of loop
for (const item of menu.entries()){     
  console.log(`${item[0]+1}: ${item[1]}`);
}

//New Way to use for of loop
for (const [i, el] of menu.entries()){     // we know the resut is stored in two array so we destructuring those array
  console.log(`${i+1}: ${el}`);
}