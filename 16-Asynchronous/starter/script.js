'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const request = fetch('https://countries-api-836d.onrender.com/countries/name/bangladesh')

