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



class App {
  // 1

  #map; //4
  #mapEvent;
  constructor() {
    this._getPosition(); // 3.1
    form.addEventListener('submit', this._newWorkout.bind(this)); // 5  // 5.1 //5.3

    inputType.addEventListener('change', this._toggleElevationField); //6   //Selcting the type field it also change the cadencce to elevation
  }

  _getPosition() {
    // 2
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), // 2.1   // 4.2
        function () {
          alert(`Could not get your position`);
        }
      );
  }

  _loadMap(position) {
    // 2.1 // Gettinng the latitude and longitude // const latitude = position.coords.latitude; // const longitude = position.coords.longitude;
    const { latitude } = position.coords; // New structuring
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    console.log(`https://www.google.com/maps/@${latitude},${longitude}`); // Converted it to google links
    this.#map = L.map('map').setView(coords, 17); //4.1 //Replacing  co-ordinates array with coords

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map); // 4.1

    this.#map.on('click', this._showForm.bind(this)); // 4.1 //.on (map.on) is a leaflet property not javaScript // Adding Click event on the map
  }

  _showForm(mapE) {
    this.#mapEvent = mapE; // 4.1
    form.classList.remove('hidden'); //1. To display form, removed the classlist hidden
    inputDistance.focus(); //2. Focus input to the distance field
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    //5.1
    // Rearrange code to a form event listner to  Display Marker
    e.preventDefault();

    // Clearing the input field after typing
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng]) // setting lat lng
      .addTo(this.#map) //5.2
      .bindPopup(
        L.popup({
          // From leaflet documentaion in marker added different property to the popup
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App(); // 3.
// app._getPosition();
