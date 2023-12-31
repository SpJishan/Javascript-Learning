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



// let calcAverage = (score1,score2,score3) =>{
//     return (score1+score2+score3)/3
// }

// let scoreDolphins=calcAverage(85,54,41);
// let scoreKoalas=calcAverage(23,34,27);

// console.log(scoreDolphins);
// console.log(scoreKoalas);

// let avgDolphins=scoreDolphins;
// let avgKoalas=scoreKoalas;

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

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//       console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//       console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//       console.log('No team wins...');
//     }
//   };

//   checkWinner(scoreDolphins, scoreKoalas);






// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
   
//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
   
//   console.log(bills, tips);


//********Objects Methods **********/

// const jishan = {
//     firstName: 'Shafinul',
//     familyName: 'Pasha',
//     lastName: 'Jishan',
//     birthYear: 1993,
//     job: 'Programmer',
//     friends: ['Rafi', 'Faisal', 'Nafi'],
//     hasDriverLicense: true,

//     calcAge: function(birthYear){
//         return 2023-birthYear;
//     }
// }

// console.log(jishan.firstName);
// console.log(jishan.job);
// console.log(jishan.calcAge(1994));
// console.log(jishan['calcAge'](1992));

// console.log(`${jishan.firstName} is a ${jishan.calcAge(1993)} years old,  ${jishan.job} , and has a driver license`);

//******For Loop with an array */

const jishan= [
    'Shafinul',
    'Pasha',
    'Jishan',
    1993,
    'Programmer',
    ['Rafi', 'Faisal', 'Nafi', 'Sakil', 'Rabbi', 'Razib'], 
    true

]
//****Retrieve Data from array using for loop. */
// for(let i=0;i<jishan.length;i++)
// {
//     console.log(jishan[i], typeof jishan[i]);
// }

// //*****Storing data in an array using loop */

// const types=[]   //Declaring an empty string

// for(let i=0; i< jishan.length; i++)
// {
//     types[i]=typeof jishan[i]; //Storing data from an array to an another array
//     console.log(jishan[i], typeof jishan[i]); //Retrieving data from an array
// }

// console.log(types); //Displaying the newly stored array data 

// //****Using Continue statement in a loop */
// for(let i=0; i<jishan.length; i++)
// {
    
//     if(typeof jishan[i] != 'string') continue; // Logic: script:201
//     console.log(jishan[i], typeof jishan[i]); // Displying data (only string) from the array 
// }

// console.log(`Logic: First 3 data are string so line 198 executed but the forth data in the array is a number so script 198 not gonna exected and thus the only fifth data displayed which is aso a string`)

// //****Using Break statement in a loop */
// for(let i=0; i<jishan.length; i++)
// {
    
//     if(typeof jishan[i] === 'number') break; // Logic: script:201
//     console.log(jishan[i], typeof jishan[i]); // Displying data (only string) from the array 
// }

// console.log(`Logic: The first 3 data are strings so script:208 is executed but the fourth data in the array is a number so script:208 is not gonna executed and thus the loop gets breaks`)

// // *****Looping Backwards*/

// console.log(`*****Looping Backwards*`)

// for(let i=jishan.length-1; i>=0 ; i--) // length countation starts from 1 but the index countation starts from 0 
// {
//     console.log(i, jishan[i]);
// }

//****  Looping inside a loop */

// for( let exersize = 1; exersize<3 ; exersize++ )
// {
//     console.log(`-----Starting Exersize ${exersize}`)
//     for(let rep=1; rep<=4; rep++){  //Looping inside of the loop
//         console.log(`Repitition No. ${rep}`)
//     }
// }



// ///*****   While Loop   */

// let dice=Math.trunc(Math.random()*6)+1; //Math.random chooses a number between 0 & 1.
//         //Math.trunc reducts the fractional part of the decimal number thus producing a whole number.

// while(dice!=6){  //Looping condition for while loop
//     console.log(`Dice rolled ${dice}`);
//     dice=Math.trunc(Math.random()*6)+1; //Producing another random number between 1-6
//     if(dice===6)     //Breaking the loop otherwise, it will continue infinitely   
//     console.log(`🎉Dice Rolled ${dice}!!🕶 Congatulation!.You can roll another one! `);
// }



///*****   Coding Challenge   */

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//Declaring empty array
const tips=[]; 
const totals=[];
//Tips calculating function
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
//For loop to display bills , tips & totals
//Also to store the empty array
for (let i=0; i<=9; i++)
{
   let total=bills[i]+calcTip(bills[i]);
   let tip=calcTip(bills[i])
  console.log(`No.${i+1} Bill =${bills[i]}, Tip=${tip} and Total=${total}`)  ; 
    tips[i]=tip;
    totals[i]=total;
}
//Displaying the arrays
console.log(`The Bills: ${bills}`);
console.log(`The Tips: ${tips}`);
console.log(`The Totals: ${totals}`);






