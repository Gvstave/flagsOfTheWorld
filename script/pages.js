import countries from "../assets/data.js";

const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get('name');

const country = countries.find(country => country.name === countryName);

if (country) {

// example data of details to be included on the page 

//     "name": "Slovenia",
//     "topLevelDomain": [".si"],
//     "alpha2Code": "SI",
//     "alpha3Code": "SVN",
//     "callingCodes": ["386"],
//     "capital": "Ljubljana",
//     "altSpellings": ["SI", "Republic of Slovenia", "Republika Slovenija"],
//     "subregion": "Southern Europe",
//     "region": "Europe",
//     "population": 2100126,
//     "latlng": [46.11666666, 14.81666666],
//     "demonym": "Slovene",
//     "area": 20273,
//     "gini": 24.6,
//     "timezones": ["UTC+01:00"],
//     "borders": ["AUT", "HRV", "ITA", "HUN"],
//     "nativeName": "Slovenija",
//     "numericCode": "705",
//     "flags": {
//       "svg": "https://flagcdn.com/si.svg",
//       "png": "https://flagcdn.com/w320/si.png"
//     },
//     "currencies": [
//       {
//         "code": "EUR",
//         "name": "Euro",
//         "symbol": "€"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "sl",
//         "iso639_2": "slv",
//         "name": "Slovene",
//         "nativeName": "slovenski jezik"
//       }
//     ],
//     "translations": {
//       "br": "Slovenia",
//       "pt": "Eslovénia",
//       "nl": "Slovenië",
//       "hr": "Slovenija",
//       "fa": "اسلوونی",
//       "de": "Slowenien",
//       "es": "Eslovenia",
//       "fr": "Slovénie",
//       "ja": "スロベニア",
//       "it": "Slovenia",
//       "hu": "Szlovénia"
//     },
//     "flag": "https://flagcdn.com/si.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "EU",
//         "name": "European Union"
//       }
//     "cioc": "SLO",
//     "independent": true

    const main = document.getElementById('main');
    const detailsContent = document.createElement('section');

    const flag = document.createElement('img');
    flag.setAttribute('src', country.flag);
    flag.setAttribute('alt', `Flag of ${country.name}`);

    const name = document.createElement('h4');
    name.textContent = country.name;

    const population = document.createElement('p');
    population.innerHTML = `<strong>Population:</strong> ${country.population}`;

    const region = document.createElement('p');
    region.innerHTML = `<strong>Region:</strong> ${country.region}`;

    const capital = document.createElement('p');
    capital.innerHTML = `<strong>Capital:</strong> ${country.capital}`;

    const languages = document.createElement('p');
    const languageNames = country.languages.map(lang => `${lang.name} (${lang.nativeName})`).join(', ');
    languages.innerHTML = `<strong>Languages:</strong> ${languageNames}`;

    const currencies = document.createElement('p');
    const currencyNames = country.currencies.map(currency => `${currency.name} (${currency.symbol})`).join(', ');
    currencies.innerHTML = `<strong>Currencies:</strong> ${currencyNames}`;

    const regionalBlocs = document.createElement('p');
    const regionalBlocNames = country.regionalBlocs.map(regionalBloc => `${regionalBloc.name} (${regionalBloc.acronym})`).join(', ');
    regionalBlocs.innerHTML = `<strong>Regional Blocs:</strong> ${regionalBlocNames}`;

    detailsContent.appendChild(flag);
    detailsContent.appendChild(name);
    detailsContent.appendChild(capital);
    detailsContent.appendChild(languages);
    detailsContent.appendChild(population);
    detailsContent.appendChild(region);
    detailsContent.appendChild(currencies);
    detailsContent.appendChild(regionalBlocs);

    main.appendChild(detailsContent)

} else {
    // If an error occur and the country is not found, show an error message
    const detailsContent = document.getElementById('main');
    detailsContent.innerHTML = `An error occured while loading data, try refreshing the page to resolve this issue.`;
    main.appendChild(detailsContent)
}
