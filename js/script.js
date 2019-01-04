'use strict';
var url = 'https://restcountries.eu/rest/v2/name/';
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
    var parameters = ['name', 'capital', 'currencies[0].name', 'region'];
    var parameterNames = ['Capital', 'Currency', 'Region'];
    var newSearchResult = document.createElement('ul');
    var searchResultHeader = document.createElement('h2');

    searchResultHeader.innerText = item[parameters[0]];
    countriesList.appendChild(searchResultHeader).classList.add("countries__name");
    countriesList.appendChild(newSearchResult).classList.add("countries__element");

    for (var i = 1; i < parameters.length; i++) {
      var listElement = document.createElement('li');
      listElement.innerHTML = parameterNames[i-1] + ' : <span class="countries__property-value">' + item[parameters[i]] + '</span>';
      newSearchResult.appendChild(listElement).classList.add("countries__property");
    }
  });
}

document.getElementById('search').addEventListener('click', searchCountries);
