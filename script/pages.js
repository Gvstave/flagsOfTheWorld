import countries from "../assets/data.js";

const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get('name');

const country = countries.find(country => country.name === countryName);

if (country) {
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
