'use strict';

//*******Objectives:

// 1. We will click a button, (that is ''show-modal'' class , there are multiple show-modal so we should use "document.queryselctorAll")
// 2. That will open a modal window that also generate a overlay background

// 3. It will have a cross button to close. Also while clicking on overlay area it will close.

// //*****Implications: */

// 1. To click a button some steps should be completed:
// -We have to store the functionality to "modal" class in a variable,(that is the window going to view).
// -Same as for "overlay,show-modal & close-modal " classes

// 2. We will call the variables to open and close the modals


//********Coding: */

//Step 1: Storing the functionality for the working class of the HTML file in variables

const modal= document.querySelector('.modal'); //slecting modal window
const overlay= document.querySelector('.overlay'); //selecting the overlay area
const btnsOpenModal = document.querySelectorAll('.show-modal'); // selecting the button class,there are multiple show-modal so we should use "document.queryselctorAll
const btnCloseModal= document.querySelector('.close-modal'); //selecting the cross icon

//Step 2: Openning the modal window , there are three button so we store the eventHandler function by calling a for loop.

for(let i=0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', function(){
        console.log(`Button Clicked ${i+1}`);
    })
}







