'use strict';

/////////////////////////////////////////////////////////////////////////////////////////
//   Data needed for a later exercise
/////////////////////////////////////////////////////////////////////////////////////////

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


/////////////////////////////////////////////////////////////////////////////////////////
//   Data needed for first part of the section
/////////////////////////////////////////////////////////////////////////////////////////  

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // orderDelivery: function({starterIndex, mainIndex, time, address}){
//   //   console.log(
//   //     //**Error on: ${this.starterMenu.[starterIndex]}, there will be no dot after starter */
//   //     // `Order Recieved! ${this.starterMenu.[starterIndex]} and ${this.mainMenu.[mainIndex]} will be delivered at ${time} to ${address}`
//   //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//   //     );
//   // },

//   //*******Another Way: Calling a function from an obect's property's to interchange  array data.

//   orderDelivery: function({starterIndex=2, mainIndex=2, time='19:30', address}){  //setting perameters data on function
//     console.log(
//       //**Error on: ${this.starterMenu.[starterIndex]}, there will be no dot after starter */
//       // `Order Recieved! ${this.starterMenu.[starterIndex]} and ${this.mainMenu.[mainIndex]} will be delivered at ${time} to ${address}`
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//       );
//   },

//   //Function to Displaying the ingredients after user input

//   orderPasta: function(ing1, ing2, ing3){
//     console.log(`You added ${ing1}, ${ing2}, ${ing3} to your pasta.`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },


//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };


/////////////////////////////////////////////////////////////////////////////////////////
//   111. Enhanced Object Literals 3 ways
/////////////////////////////////////////////////////////////////////////////////////////
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; //3rdway
const openingHours = { //1st way: we can declare an object outside of another object and than use them as variabe.
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex){ //enhamced obj literals for function
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

  orderDelivery({starterIndex=2, mainIndex=2, time='19:30', address}){  //setting perameters data on function, //enhamced obj literals for function
    console.log(
      //**Error on: ${this.starterMenu.[starterIndex]}, there will be no dot after starter */
      // `Order Recieved! ${this.starterMenu.[starterIndex]} and ${this.mainMenu.[mainIndex]} will be delivered at ${time} to ${address}`
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
  },

  //Function to Displaying the ingredients after user input

  // orderPasta: function(ing1, ing2, ing3){
  //   console.log(`You added ${ing1}, ${ing2}, ${ing3} to your pasta.`);
  // },
  orderPasta(ing1, ing2, ing3){  //enhamced obj literals for function
    console.log(`You added ${ing1}, ${ing2}, ${ing3} to your pasta.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) { //enhamced obj literals for function
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours,
 
};


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

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu] //Joining two array into one variable

// console.log(menu);

// for (const item of menu){ //for of loop
//   console.log(item);
// }

// console.log(...menu.entries());

// //Old Ways to use for of loop
// for (const item of menu.entries()){     
//   console.log(`${item[0]+1}: ${item[1]}`);
// }

// //New Way to use for of loop
// for (const [i, el] of menu.entries()){     // we know the resut is stored in two array so we destructuring those array
//   console.log(`${i+1}: ${el}`);
// }


//////////////////////////////////////////////////////////////////////////////////////////
//                        111 Optional Chaining
//////////////////////////////////////////////////////////////////////////////////////////
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining c
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

//////////////////////////////////////////////////////////////////////////////////////////
//              113 Looping Objects Object Keys, Values, and Entries
//////////////////////////////////////////////////////////////////////////////////////////


// //Object Keys
// const properties = Object.keys(openingHours);  //applying object.keys, We can use object properties or key using Object.key
// console.log(properties);

// // console.log(`We are open ${properties.length} days on a week`);

// // for (const day of properties){
// //   console.log(day);
// // }

// let openstr = `We are open ${properties.length} days on a week:`
// for (const day of properties){
//   openstr +=`${day}, `;
// }

// console.log(openstr);
// //Object value

// const values= Object.values(openingHours); //We can access object value using Object.value
// console.log(values);


// //Object Entries
// const entries= Object.entries(openingHours); //We can use both keys and value using Object.entries
// console.log(entries);

// for(const [days, {open, close}] of entries )
// {
//   console.log(`On ${days} we open at ${open} and close at ${close}`);
// }

//////////////////////////////////////////////////////////////////////////////////////////
//              114 Coding Challenge 2
//////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/


// //////////////////////////////////////////////////////////////////////////////////////////
// //              1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// //////////////////////////////////////////////////////////////////////////////////////////
// console.log(game.scored.entries()); 
// //game.scored.entries() will return the scored array in game object with an index number and value of the scored array , in where the players name are stored. 
// for (const [i, player] of game.scored.entries()){
//       console.log(`Goal ${i+1}: player`);
// };

// //////////////////////////////////////////////////////////////////////////////////////////
// //              2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// //////////////////////////////////////////////////////////////////////////////////////////

// let average=0;
// //Object.values(game.odd) will access the value of key named odds
// for ( const odd of Object.values(game.odds) ){
//   average += odd;
// };
// average /= Object.values(game.odds).length;
// console.log(average);

// //////////////////////////////////////////////////////////////////////////////////////////
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
// //////////////////////////////////////////////////////////////////////////////////////////

// console.log(Object.entries(game.odds)); //it returns an index and the entries stored in odds

// for ( const [team, odd] of Object.entries(game.odds) )
// {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }


//////////////////////////////////////////////////////////////////////////////////////////
//              115 Sets
//////////////////////////////////////////////////////////////////////////////////////////

//new Set keyword to define sets

// const ordersSet = new Set([ 
//   'Chowmin',
//   'Fried Rice',
//   'Pizza',
//   'Chowmin',
//   'Pasta',
//   'Risotto',
//   'Pasta'
// ]);

// console.log(ordersSet); //Only displays the unique names stored in the set
// console.log(ordersSet.size); //Number of unique names stored in the set

// console.log(new Set('Jishannnnn'));

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('bread')); //Checking a value is stored in set

// console.log(ordersSet.add('Bread')); //Adding a value in the set
// console.log(ordersSet.has('Bread'));

// ordersSet.delete('Risotto'); //Deleting a value in the set
// console.log(ordersSet);

// //looping a set

// for (const order of ordersSet){
//   console.log(order);
// }

// const ordersSet2 = new Set([  // value stored as set
//   'Chowmin',
//   'Fried Rice',
//   'Pizza',
//   'Chowmin',
//   'Pasta',
//   'Risotto',
//   'Pasta'
// ]);


// const ordersSet3 = [...new Set([  // value stored as array but the duplicate value will erase
//   'Chowmin',
//   'Fried Rice',
//   'Pizza',
//   'Chowmin',
//   'Pasta',
//   'Risotto',
//   'Pasta'
// ])];

// console.log(ordersSet2);
// console.log(ordersSet3);

//////////////////////////////////////////////////////////////////////////////////////////
//              116 Maps
//////////////////////////////////////////////////////////////////////////////////////////

// const rest = new Map();

// rest.set('name', 'Hatam Tai'); // Setting/Storing map key(name) and value(Hatam Tai)
// rest.set(1, 'Ahmedbag Bashabo');
// rest.set(2, 'khilgaw');



// //Storing Multiple map key and value
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

//   console.log(rest);

// console.log(rest.get('name')); //To retrieve a data we use rest.get(key)
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8; 
// console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //Practicle Example

// const arr = [1, 2]; //For array key we have to assign the array to a variable.
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest); 
// console.log(rest.size);

// console.log(rest.get(arr));

//////////////////////////////////////////////////////////////////////////////////////////
//              117 Maps Iteration
//////////////////////////////////////////////////////////////////////////////////////////

//We can use map_name.set, or initially setting all the key and value 

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try Again'],
// ]);
// console.log(question);

// //Converting Objects to Map, Object.entries and Map ; both have key and value data
// console.log(Object.entries(openingHours));

// const hoursMap= new Map (Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz App

// console.log(question.get('question')); //Asking the question

// for (const [key, value] of question){ //Generating Options
//   if(typeof key === 'number'){
//     console.log(`Answer ${key}: ${value}`);
//   };
// };

// const answer = Number(prompt(`Your Answer?`)); // Asking key value 1/2/3

// console.log(question.get(question.get('correct')===answer)); // if it get a value of 3 which key is 'correct'(line:745)  then the statment will be true , which is another key(line:746) that will generate the value 'Correct 🎉' else , will produce a key of false(line:747)

// //Converting Maps to array

// console.log(...question);
// console.log(...question.keys());
// console.log(...question.values());


//////////////////////////////////////////////////////////////////////////////////////////
//              Working With Strings - Part 1
//////////////////////////////////////////////////////////////////////////////////////////

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); //String can be called like array index
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]); //We can write string directly then call it index

// console.log(airline.length); //length: Number of letter with space, a string has
// console.log('B737'.length);

// console.log(airline.indexOf('r')); //Finding index a letter from left
// console.log(airline.lastIndexOf('r')); //Finding index a letter from right
// console.log(airline.indexOf('portugal')); //-1 is a false value, it is case sensitive


// console.log(airline.slice(4)); // Will cut the first 4 index that is TAP(space)
// console.log(airline.slice(4, 7)); // will start from 5 and end with index of 7

// console.log(airline.slice(0, airline.indexOf(' '))); //will start from 1 and end before space 
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //will start from 8 which is space

// console.log(airline.slice(-2)); // last 2 letter
// console.log(airline.slice(1, -1)); //start from 2 end before last character

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1); //Will select the last character
//   if (s === 'B' || 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jishan'));
// console.log(typeof new String('jishan')); //will show as object

// console.log(typeof new String('jishan').slice(1)); // using the slice function it will show as string

//////////////////////////////////////////////////////////////////////////////////////////
//             121 Working With Strings - Part 2
//////////////////////////////////////////////////////////////////////////////////////////

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase()); // Converting all alohabet to lowercase
// console.log(airline.toUpperCase()); // Converting all alohabet to uppercase

// // Fix capitalization in name
// const passenger = 'jIShan'; // Jishan
// //1st to convert all alphabet to lowercase, then call the first index[0] joined the other alphabet with slice method
// const passengerLower = passenger.toLowerCase(); 
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jishan.io';
// const loginEmail = '  Hello@Jishan.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//////////////////////////////////////////////////////////////////////////////////////////
//             122 Working With Strings - Part 3
//////////////////////////////////////////////////////////////////////////////////////////


// //String split and join

// console.log('My+name+is+Shafinul+Pasha+Jishan'.split('+')); //split('+') will store words as string before + sign

// const [firstName, middleName, lastName]= 'Shafinul Pasha Jishan'.split(' ');//spliting and storing to array variable

// const newName = ['Mr.', firstName.toUpperCase(), middleName.toUpperCase(), lastName.toUpperCase()].join(' '); //converting names to uppercase
// console.log(newName);


// //Converting first alphabet of a word to capitalized

// const capitalizedName =function(name){
//   const names = name.split(' ');
//   const namesUpper = [];

//   for(const n of names){
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1)); //Slice method to capitalize name 
//     namesUpper.push(n.replace(n[0],n[0].toUpperCase())); //Replace method to capitalize name
//   }
//   console.log(namesUpper.join(' '));
// }

// capitalizedName('shafinul pasha jishan');
// capitalizedName('imtiaz uddin sakil');

// //Padding

// const message = 'Go to gate 23';

// console.log(message.padStart(20, '*').padEnd(30, '*')); //padstart 20 counts * and message
// console.log('Jishan'.padStart(20, '*').padEnd(30, '*'));

// //Hiding the digits in mastercard

// const maskCreditCard = function(number) {
//   const str = number + '';  // Will convert a given number to a string
//   const last = str.slice(-4);
//   console.log(last.padStart(str.length, '*'));
// }

// maskCreditCard(1234567890);
// maskCreditCard(12345678901234567);

// //Repeat a message

// const message2 = 'Flight will be delayed , for bad weather......';

// console.log(message2.repeat(5));

// //repeat an emoji

// const planesInLine = function(n){
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// } 

// planesInLine(5);
// planesInLine(10);
// planesInLine(15);

//////////////////////////////////////////////////////////////////////////////////////////
//             119- Coding Challenge 3
//////////////////////////////////////////////////////////////////////////////////////////

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// /////////////////////////////////////////////////////////////////////////////////////////
// // 1. Create an array 'events' of the different game events that happened (no duplicates)

// //We  know , a set cannot contains duplicate values , they want to store different game events so we store the value of map , gameEvents. With a spread operator we can unpack this set to an array wihout any duplicates

// const events = [...new Set(gameEvents.values())]; 
// console.log(events);

// /////////////////////////////////////////////////////////////////////////////////////////
// //2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);

// /////////////////////////////////////////////////////////////////////////////////////////
// //3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(gameEvents.size); //which is 10

// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

// /////////////////////////////////////////////////////////////////////////////////////////
// //4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL

// for (const [min, event] of gameEvents){
//   const half = min < 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`)
// }


//////////////////////////////////////////////////////////////////////////////////////////
//             123- Coding Challenge 4
//////////////////////////////////////////////////////////////////////////////////////////
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea')); //Created textbox area
document.body.append(document.createElement('button')); //Created a button

document.querySelector('button').addEventListener('click', function(){ 
  const text = document.querySelector('textarea').value; //Storing the input
  const rows = text.split('\n'); //Storing inputs in an array as individual
  
  for (const [i, row] of rows.entries() ){  // taking individual elements from array
    const [first, second] = row.toLowerCase().trim().split('_'); //converting the individual elements to lowercase,removing whitespace by trim(),then spliting them upon _
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;// replace method to make camelCase word
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
})

