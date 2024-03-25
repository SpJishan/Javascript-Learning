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

let map, mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Gettinng the latitude and longitude
      // const latitude = position.coords.latitude;
      // const longitude = position.coords.longitude;
      const { latitude } = position.coords; // New structuring
      const { longitude } = position.coords;

      const coords = [latitude, longitude];

      console.log(`https://www.google.com/maps/@${latitude},${longitude}`); // Converted it to google links
      map = L.map('map').setView(coords, 10); //Replacing  co-ordinates array with coords

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapE) {
        //.on (map.on) is a leaflet property not javaScript
        // Adding Click event on the map
        mapEvent = mapE;
        console.log(mapEvent);
        form.classList.remove('hidden'); //1. To display form, removed the classlist hidden
        inputDistance.focus(); //2. Focus input to the distance field

        // const { lat, lng} = mapEvent.latlng;

        // L.marker([lat, lng])  // setting lat lng
        //   .addTo(map)
        //   .bindPopup(L.popup({  // From leaflet documentaion in marker added different property to the popup
        //     maxWidth: 250,
        //     minWidth: 100,
        //     autoClose: false,
        //     closeOnClick: false,
        //     className: 'running-popup',
        //   }))
        //   .setPopupContent('Workout')
        //   .openPopup();
      });
    },
    function () {
      alert(`Could not get your position`);
    }
  );

  form.addEventListener('submit', function (e) {
    // Rearrange code to a form event listner to  Display Marker
    e.preventDefault();

    // Clearing the input field after typing
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng]) // setting lat lng
      .addTo(map)
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
  });

//   Selcting the type field it also change the cadencce to elevation
  inputType.addEventListener('change', function(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  })
}
