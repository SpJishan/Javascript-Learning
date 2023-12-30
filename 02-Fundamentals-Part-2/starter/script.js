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




