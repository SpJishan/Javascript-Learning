'use strict';

let score=20; //Declaring score and set it to 20
const secretNumber= Math.trunc(Math.random()*20) + 1;  //We have to set a secretNumber. so we have to generate a random number between 1-20
document.querySelector('.number').textContent=secretNumber;  //Set the secretNumber to the class number (index.html line:15)

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
    }else if(guess>secretNumber) // Game Logic 3?
    {
        if(score>0)
        {
        document.querySelector('.message').textContent='🚫 Wrong Guess! High Number';
        score--;
        document.querySelector('.score').textContent=score;
        }else
        {document.querySelector('.message').textContent='❌You lost the game'}
        
    }else if(guess<secretNumber) // Game Logic 4?
    {
        if(score>0)
        {
        document.querySelector('.message').textContent='🚫 Wrong Guess! Low Number';
        score--;
        document.querySelector('.score').textContent=score;
        }else
        {document.querySelector('.message').textContent='❌You lost the game,Please reload if you want to play again'}
        
    }
});

