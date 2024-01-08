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
            //Player Element
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');

score0El.textContent=0;
score1El.textContent=0;

//Rolling the Dice

        //Make the dice hidden
diceEl.classList.add('.hidden');

        // Player scores are stored
const score=[0,0] 
let currentScore=0;
let activePlayer=0; //to manipulate the current score elements and will do it by "activePlayer" variable and so we set it's value 0

        //Rolling dice functionality- 
btnRoll.addEventListener('click', function(){
    const dice= Math.trunc(Math.random()*6)+1;  //Generting a random number for dice roll
    console.log(dice);

        //display dice
    diceEl.classList.remove('.hidden');
    diceEl.src= `dice-${dice}.png`;  

    //Check for 1 then switch players

    if(dice!==1){
        currentScore += dice; //Add dice to current score
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;  //Selecting the current score elements dynamically , we start from player 1 so the activePlayer is set to 0
        // current0El.textContent=currentScore; //change later
        
    } else{
        activePlayer= activePlayer===0 ? 1: 0; //If the activePlayer is 0 (that is activePlayer===0) then the value should be 1 otherwise 0
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
})


