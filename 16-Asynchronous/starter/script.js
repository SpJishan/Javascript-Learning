'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function(country) {  // 5
const request = new XMLHttpRequest();  // 1
request.open(
  'GET',
  `https://countries-api-836d.onrender.com/countries/name/${country}`
); // 2
request.send(); // 3

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);  // 4.1
  console.log(data);

  const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />  
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `; // 5.2
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
});

};

// 6
getCountryData('bangladesh');
getCountryData('portugal');
getCountryData('usa');
getCountryData('canada');


