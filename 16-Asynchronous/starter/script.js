'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  //1
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />  
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} M</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[0].nativeName
        }</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const getCountryData = function(country) {
// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/name/${country}`
// ); // 2
// request.send();

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//     `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
// });

// };

// getCountryData('bangladesh');
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('canada');

/////////////////////////////////////////////////////////////
// Callback Hell

// const renderCountry = function(data, className='') {  //1
//     const html = `
//     <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//     `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
// }

// const getCountryAndNeighbour = function(country) {

// // AZAX Call 1
// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/name/${country}`
// ); // 2
// request.send();

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

// //   render country 1
//   renderCountry(data);

//   const neighbour = data.borders[0];
//   //const [neihbour] = data.border

//   if(!neighbour) return;
// // AZAX Call 2 // 2

//  const request2 = new XMLHttpRequest();
// request2.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
// ); // 2
// request2.send();

// request2.addEventListener('load', function(){
//     const data2 = JSON.parse(this.responseText);
//     console.log(data2);

//     renderCountry(data2, 'neighbour');
// })

// });

// // Get Neighbour country

// };

// // getCountryAndNeighbour('bangladesh');
// getCountryAndNeighbour('usa');

// setTimeout(() => {  // 3
//     console.log('1 second passed');
//     setTimeout(() => {
//       console.log('2 seconds passed');
//       setTimeout(() => {
//         console.log('3 second passed');
//         setTimeout(() => {
//           console.log('4 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);

/////////////////////////////////////////////////////////////
// Promises and the Fetch API

// // AZAX Call 1 (old way)
// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/name/${country}`
// ); // 2
// request.send();

// const request = fetch('https://countries-api-836d.onrender.com/countries/name/bangladesh')

//////////////////////////////////////////////////////////////
//Consuming Promises

// const getCountryData = function(country){
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(function(response){  // 1
//         console.log(response);
//         return response.json();
//     }).then(function(data){
//         console.log(data);
//         renderCountry(data[0]);
//     })
// }

const getJSON = function (url, errorMsg = `Something went wrong`) {//1
  return fetch(url).then(response => {
    if (!response.ok)  // 2
      throw new Error(`${errorMsg}. Country not found (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   //Country 1
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//         console.log(response); 

//         if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
        
//         return response.json()
    
//     })  
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       // Country 2
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       ); // not in here 1
//     })
//     .then(response => response.json()) // like this 1
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err =>{
//         console.error(`${err}`)
//         renderError(`Something went wrong : ${err.message}. Try again!`)
//     })            // handling errors
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })
//     ; 
// };








//Simplifying the code
const getCountryData = function (country) {
  //Country 1
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');
      // Country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        'Neighbour country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong : ${err.message}. Try again!`);
    }) // handling errors
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};


btn.addEventListener('click', function () {
  getCountryData('bangladesh');
});

// getCountryData('australia');
