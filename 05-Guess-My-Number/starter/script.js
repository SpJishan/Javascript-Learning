'use strict';
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);  //1. Here .guess is a class of HTML input field  //2. Any input field that browser gets from the dom is a string, inputing a number will also produce string //3. So we use Number(); to convert the input to a number.
    console.log(guess);

    if(!guess){ //There will be a case without inputting a number when the check button is pressed . The browser will then produce the value of guess=0. 0 means false, so we have to make a truthy value to pass the if condition parameter.
        document.querySelector('.message').textContent= '🚫 No Number. Please input a number '
    }
});