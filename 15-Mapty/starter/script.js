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

if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(
  function (position) {
    // Gettinng the latitude and longitude
    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;
    const { latitude } = position.coords; // New structuring
    const { longitude } = position.coords;

    const coords = [latitude, longitude]

    console.log(`https://www.google.com/maps/@${latitude},${longitude}`); // Converted it to google links
    const map = L.map('map').setView(coords, 10); //Replacing  co-ordinates array with coords

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
  },
  function () {
    alert(`Could not get your position`);
  }
);

}
