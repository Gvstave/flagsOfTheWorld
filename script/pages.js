import countries from "../assets/data.js";

const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get('name');

const country = countries.find(country => country.name === countryName);

if (country) {

    const main = document.getElementById('main');
    const detailsContent = document.createElement('section');

    // Flag
    const flag = document.createElement('img');
    flag.setAttribute('src', country.flag);
    flag.setAttribute('alt', `Flag of ${country.name}`);

    // Name
    const name = document.createElement('h4');
    name.textContent = country.name;

    // Population
    const population = document.createElement('p');
    population.innerHTML = `<strong>Population:</strong> ${country.population}`;

    // Region
    const region = document.createElement('p');
    region.innerHTML = `<strong>Region:</strong> ${country.region}`;

    // Subregion
    const subregion = document.createElement('p');
    subregion.innerHTML = `<strong>Subregion:</strong> ${country.subregion}`;

    // Capital
    const capital = document.createElement('p');
    capital.innerHTML = `<strong>Capital:</strong> ${country.capital}`;

    // Languages
    const languages = document.createElement('p');
    const languageNames = country.languages.map(lang => `${lang.name} (${lang.nativeName})`).join(', ');
    languages.innerHTML = `<strong>Languages:</strong> ${languageNames}`;

    // Currencies
    const currencies = document.createElement('p');
    const currencyNames = country.currencies.map(currency => `${currency.name} (${currency.symbol})`).join(', ');
    currencies.innerHTML = `<strong>Currencies:</strong> ${currencyNames}`;

    // Regional Blocs
    const regionalBlocs = document.createElement('p');
    const regionalBlocNames = country.regionalBlocs.map(regionalBloc => `${regionalBloc.name} (${regionalBloc.acronym})`).join(', ');
    regionalBlocs.innerHTML = `<strong>Regional Blocs:</strong> ${regionalBlocNames}`;

    // Area
    const area = document.createElement('p');
    area.innerHTML = `<strong>Area:</strong> ${country.area} km<sup>2</sup>`;

    // Continent (also known as region)
    const continent = document.createElement('p');
    continent.innerHTML = `<strong>Continent:</strong> ${country.region}`;

    // Timezones
    const timezones = document.createElement('p');
    const timezoneList = country.timezones.join(', ');
    timezones.innerHTML = `<strong>Timezones:</strong> ${timezoneList}`;

    // Borders
    const borders = document.createElement('p');
    const borderCountries = country.borders ? country.borders.join(', ') : 'None';
    borders.innerHTML = `<strong>Borders:</strong> ${borderCountries}`;

    // Calling Codes
    const callingCodes = document.createElement('p');
    const callingCode = country.callingCodes.join(', ');
    callingCodes.innerHTML = `<strong>Calling Codes:</strong> ${callingCode}`;

    // Top Level Domain
    const topLevelDomain = document.createElement('p');
    const tld = country.topLevelDomain.join(', ');
    topLevelDomain.innerHTML = `<strong>Top Level Domain:</strong> ${tld}`;

    // Alpha Codes
    const alphaCodes = document.createElement('p');
    alphaCodes.innerHTML = `<strong>Alpha-2 Code:</strong> ${country.alpha2Code}<br><br><strong>Alpha-3 Code:</strong> ${country.alpha3Code}`;

    // Demonym
    const demonym = document.createElement('p');
    demonym.innerHTML = `<strong>Demonym:</strong> ${country.demonym}`;

    // Lat/Lng
    const latLng = document.createElement('p');
    latLng.innerHTML = `<strong>Latitude/Longitude:</strong> ${country.latlng.join(', ')}`;

    // Numeric Code
    const numericCode = document.createElement('p');
    numericCode.innerHTML = `<strong>Numeric Code:</strong> ${country.numericCode}`;

    // Native Name
    const nativeName = document.createElement('p');
    nativeName.innerHTML = `<strong>Native Name:</strong> ${country.nativeName}`;

    // Country's Translations in various languages
    const translations = document.createElement('p');
    const translationList = Object.entries(country.translations)
        .map(([lang, translation]) => `${lang} (${translation})`).join(', ');
    translations.innerHTML = `<strong>Translations:</strong> ${translationList}`;

    // Independent Status
    const independent = document.createElement('p');
    independent.innerHTML = `<strong>Independent:</strong> ${country.independent ? "Yes" : "No"}`;

    // Appending all elements
    detailsContent.appendChild(flag);
    detailsContent.appendChild(name);
    detailsContent.appendChild(nativeName);
    detailsContent.appendChild(population);
    detailsContent.appendChild(region);
    detailsContent.appendChild(subregion);
    detailsContent.appendChild(capital);
    detailsContent.appendChild(languages);
    detailsContent.appendChild(currencies);
    detailsContent.appendChild(regionalBlocs);
    detailsContent.appendChild(area);
    detailsContent.appendChild(continent);
    detailsContent.appendChild(timezones);
    detailsContent.appendChild(borders);
    detailsContent.appendChild(callingCodes);
    detailsContent.appendChild(topLevelDomain);
    detailsContent.appendChild(alphaCodes);
    detailsContent.appendChild(demonym);
    detailsContent.appendChild(latLng);
    detailsContent.appendChild(numericCode);
    detailsContent.appendChild(translations);
    detailsContent.appendChild(independent);

    // Append to the main content
    main.appendChild(detailsContent)

} else {
    // If an error occur and the country is not found, show an error message
    const detailsContent = document.getElementById('main');
    detailsContent.innerHTML = `An error occured while loading data, try refreshing the page to resolve this issue.`;
    main.appendChild(detailsContent)
}

    const translationList = Object.entries(country.translations)
        .map(lang => lang === country.languages ? alert(country.languages) : alert(country.translations));

