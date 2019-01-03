'use strict';
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

function searchCountries() {
  var countryName = document.getElementById('country-name').value;
  if (!countryName.length) {
    countryName = 'Poland';
  };
  fetch(url + countryName)
    .then(function(resp) {
      return resp.json();
    })
    .then(showCountriesList);
}

function showCountriesList(resp) {
  while (countriesList.hasChildNodes()) {
    countriesList.removeChild(countriesList.firstChild);
  }

  resp.forEach(function(item) {
    var listElement = document.createElement('li');
    listElement.innerText = item.name;
    countriesList.appendChild(listElement);
  });
}

document.getElementById('search').addEventListener('click', searchCountries);
