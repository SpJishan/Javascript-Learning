'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

navigator.geolocation.getCurrentPosition(function(position){  // Gettinng the latitude and longitude
    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;
    const {latitude} = position.coords;    // New structuring
    const {longitude} = position.coords;

    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);  // Converted it to google links
    
}, function(){
    alert(`Could not get your position`);
});