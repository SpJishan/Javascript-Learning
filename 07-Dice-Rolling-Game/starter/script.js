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





let scores, currentScore, activePlayer, playing;        //Declaring the variables outside of function scope


//Starting Conditions

const init = function() {  //Making a init function to reset all the variables to 0
    //Setting all the variables to 0
    scores=[0,0] // Player scores are stored
    currentScore=0;
    activePlayer=0; //to manipulate the current score elements and will do it by "activePlayer" variable and so we set it's value 0
    playing=true;
    
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;
   
    diceEl.classList.add('.hidden');  //Make the dice hidden
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init();

        //Switch player function-Refactoring our code
const switchPlayer= function(){
       
        document.getElementById(`current--${activePlayer}`).textContent = 0;//resetting the current player score
        currentScore = 0;
        activePlayer= activePlayer===0 ? 1: 0; //If the activePlayer is 0 (that is activePlayer===0) then the value should be 1 otherwise 0
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

        //Rolling dice functionality- 
btnRoll.addEventListener('click', function(){
    if(playing){
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
        
        switchPlayer();
    }}
    
});

btnHold.addEventListener('click', function(){ //Adding Event listener to HOLD button
    
    if(playing){  //Add current score to active player's total score
        scores[activePlayer] +=currentScore;

        //Display the active player's total score
        document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];

        console.log(`logging ${scores[activePlayer]}`);

        //If score=>100 
        if(scores[activePlayer]>=100){
            playing = false;
            diceEl.classList.add('hidden')  //remove dice image
            document.getElementById(`score--${activePlayer}`).textContent= `Winner`;
            document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); //Remove player active status

        }else{
            switchPlayer();
        }};
           
});

btnNew.addEventListener('click', init)


