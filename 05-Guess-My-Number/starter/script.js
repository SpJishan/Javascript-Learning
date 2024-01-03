'use strict';

// Logical Thoughts
//The input has four case scenario
// 	1. Input with no input , we already implemented that
// 	2. Correct number than (winning part)
// 	• add score++
// 	3. Input greater than secretNumber than: (loosing part)
// 	• also see if it is greater than 0 then apply logic , else change to Wrong Guess
// 	• change the printing message: You lost the game!
// 	• deduct score-- 
// 	4. Input less than secretNumber than (loosing part)
// 	• also see if it is greater than 0 then apply logi, else change to Wrong Guess
// 	• change the printing message: You lost the game!
// 	• deduct score-- 


// Conding implecation:
// 	1. Game Logic 1 applied
// 	2. Declaring score and set it to 20
// 	3. We have to set a secretNumber. so we have to generate a random number between 1-20
// 	4. Set the secretNumber to the class number (index.html line:15)
// 	5. Game Logic 2? than change textContent to ---1--Correct number--2---update score--3--change textContent of score value 
// 	6. Game Logic 3? than change textContent to ---1--Wrong Number--2---update score--3--change textContent of score value else lost the game
// 7. Game Logic 4? than change textContent to ---1--Wrong Number--2---update score--3--change textContent of score value else lost the game

let score=20; //Declaring score and set it to 20
let secretNumber= Math.trunc(Math.random()*20) + 1;  //We have to set a secretNumber. so we have to generate a random number between 1-20

console.log(secretNumber);




document.querySelector('.check').addEventListener('click',function() 
{
    const guess=Number(document.querySelector('.guess').value);  //1. Here .guess is a class of HTML input field  //2. Any input field that browser gets from the dom is a string, inputing a number will also produce string //3. So we use Number(); to convert the input to a number.
    console.log(guess);

    if(!guess) //There will be a case without inputting a number when the check button is pressed . The browser will then produce the value of guess=0. 0 means false, so we have to make a truthy value to pass the if condition parameter.
    { 
    document.querySelector('.message').textContent= '🚫 No Number. Please input a number '
    }else if(guess===secretNumber) // Game Logic 2? so changed the textContent to Correct number
    {
        document.querySelector('.message').textContent='🎉Correct number!';
        score++; //update score
        document.querySelector('.score').textContent=score;

        document.querySelector('body').style.backgroundColor ='#60b347'; //style.backgourndColor is a style property which(multi-words) should be camel case.
        document.querySelector('.number').style.width ='30rem'; // 30rem is a CSS property should be mention between string or ' '

        document.querySelector('.number').textContent=secretNumber;  //Set the secretNumber to the class number (index.html line:15)
        
    }else if(guess>secretNumber) // Game Logic 3?
    {
        if(score>0)
        {
        document.querySelector('.message').textContent='🚫 Wrong Guess! 📈 High Number';
        score--;
        document.querySelector('.score').textContent=score;
        }else
        {document.querySelector('.message').textContent='❌You lost the game'}
        
    }else if(guess<secretNumber) // Game Logic 4?
    {
        if(score>0)
        {
        document.querySelector('.message').textContent='🚫 Wrong Guess! 📉 Low Number';
        score--;
        document.querySelector('.score').textContent=score;
        }else
        {document.querySelector('.message').textContent='❌You lost the game,Please reload if you want to play again'}
        
    }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click',function()

{
    score=20;
    secretNumber= Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent='Start guessing..';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor ='#222'; //style.backgourndColor is a style property which(multi-words) should be camel case.
        document.querySelector('.number').style.width ='15rem'; // 30rem is a CSS property should be mention between string or ' '
});

