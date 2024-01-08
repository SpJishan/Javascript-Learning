'use strict';


//Set the two player scores 0

//Selecting elements
            //Score elements
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1'); //DOM selection for ID(New method)
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1')

            // Selecting all the btn classes

const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const diceEl=document.querySelector('.dice');


score0El.textContent=0;
score1El.textContent=0;

//Rolling the Dice

        //Make the dice hidden
diceEl.classList.add('.hidden');

        //Rolling dice functionality
let currentScore=0;
btnRoll.addEventListener('click', function(){
    //Generting a random dice roll
    const dice= Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //display dice
    diceEl.classList.remove('.hidden');
    diceEl.src= `dice-${dice}.png`;

    //Check for 1 then switch players

    if(dice!==1){
        currentScore += dice; //Add dice to current score
        current0El.textContent=currentScore; //change later
        
    } else{
        //switch player
    }
})


