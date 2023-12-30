'use strict';
//**** 33. Function Declaration- Learning Fact: invoking function before declaration */


// *****Example 1******
//  logger();
//  function logger(){
//     console.log('My name is Shafinul Pasha Jishan')
//  }


// *****Example 2******
// function juicer(apple, orange){
//     const juice= `juice with ${apple} apple and ${orange} orange`
//     return juice;
// }

// const fruitJuice=juicer(3,2);

// console.log(fruitJuice);


// *****Example 3******
// let age= agecalc(1993);
// function agecalc(birthyear){
//     return 2023-birthyear;
// }
// console.log(age);


 



//**** 34. Function expression- 
// Learning Fact1: Cannot invoking function before declaration.*******/
// Learning Fact2: It will always produce a value*******/
// Learning Fact3: Differance is on function expression the function name is vanished and stored in a variable, and we know a varable always produce a value*******/

// const age2= calcage(1993); this line will produce an error
// const calcage = function (birthyear){
//     return 2023-birthyear;
// }

// const age2= calcage(1993);

// console.log(age2);




//**** 34. Arrow Function- 
// Learning Fact1: On Arrow functions, the function name is stored in a variable, Perameters are stored after the equal sign of the variable, and the coding blocks are stored after arrow sign*******/

// let calcage = birthyear => 2023 - birthyear;
// let age= calcage(1995);
// console.log(age);

// *********************Challenge 1***************
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



let calcAverage = (score1,score2,score3) =>{
    return (score1+score2+score3)/3
}

let scoreDolphins=calcAverage(85,54,41);
let scoreKoalas=calcAverage(23,34,27);

console.log(scoreDolphins);
console.log(scoreKoalas);

let avgDolphins=scoreDolphins;
let avgKoalas=scoreKoalas;

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//       console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//       console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//       console.log('No team wins...');
//     }
//   };

//   checkWinner(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log('No team wins...');
    }
  };

  checkWinner(scoreDolphins, scoreKoalas);
