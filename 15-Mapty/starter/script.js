'use strict';

class Workout {
  // 1
  date = new Date(); // 2
  id = (Date.now() + '').slice(-10); //2.1

  constructor(coords, distance, duration) {
    // 3
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // 7.3
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  // 4
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace(); // 4.1
    this._setDescription(); // 7.3
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  // 4
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;

    this.clacSpeed(); //4.2
    this._setDescription(); // 7.3
  }

  clacSpeed() {
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

const run1 = new Running([23, 90], 5.2, 24, 178); // 5
const cyc = new Cycling([70, -79], 5.2, 24, 178);
console.log(run1, cyc);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

///////////////////////////////////////////////////////////////////////////////////////////////
// Application architecture
class App {
  // 1

  #map; //4
  #mapEvent;
  #workouts = [];

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

  _hideForm() {
    // 8.1
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    form.style.display = 'none'; // 8.2
    form.classList.add('hidden'); // 8.2
    setTimeout(() => (form.style.display = 'grid'), 1000); // 8.3
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    //5.1
    // Rearrange code to a form event listner to  Display Marker

    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp)); // 1.2
    const allPositive = (...inputs) => inputs.every(inp => inp > 0); // 1.3
    e.preventDefault();

    ////////////////////////////////////////////////////////////////////////////////////
    //Creating a New Workout

    // 1. Get data from form

    const type = inputType.value;
    const distance = +inputDistance.value; // 1.1
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // 3. If workout is running, create running object

    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence); // 3
    }

    // 4. If workout is cycling create cycling object

    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation); // 4
    }

    // 5. Add new object to workout array

    this.#workouts.push(workout);

    // 6. Render workout in map as marker
    this._renderWorkoutMarker(workout); // 6.2

    // 7. Render workout on list

    this._renderWorkout(workout); // 7.1

    // 8. Hide form and

    // Clearing the input field after typing
    this._hideForm();
  }
  //Render workout marker
  _renderWorkoutMarker(workout) {
    // 6.1
    L.marker(workout.coords) // setting lat lng
      .addTo(this.#map) //5.2
      .bindPopup(
        L.popup({
          // From leaflet documentaion in marker added different property to the popup
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`, // 6.3 //6.4
        })
      )
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)    // 9
      .openPopup();
  }

  _renderWorkout(workout) {
    // 7.2 // 7.4
    let html = `
                <li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                  <span class="workout__icon">${
                    workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
                  }</span>
                  <span class="workout__value">${workout.distance}</span>
                  <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                  <span class="workout__icon">⏱</span>
                  <span class="workout__value">${workout.duration}</span>
                  <span class="workout__unit">min</span>
                </div>
                `;

    if (workout.type === 'running')
      // 7.5
      html += `  <div class="workout__details">
                  <span class="workout__icon">⚡️</span>
                  <span class="workout__value">${workout.pace.toFixed(1)}</span>
                  <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                  <span class="workout__icon">🦶🏼</span>
                  <span class="workout__value">${workout.cadence}</span>
                  <span class="workout__unit">spm</span>
                </div>
              </li>`;

    if (workout.type === 'cycling')
      // 7.6
      html += `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">km/h</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevationGain}</span>
                <span class="workout__unit">m</span>
              </div>
            </li>`;

    form.insertAdjacentHTML('afterend', html);
  }
}

const app = new App(); // 3.
// app._getPosition();
