import countries from '../assets/data.js';

const note = document.getElementById('note');
const menu = document.getElementById('menu');
const content = document.getElementById('contents');

const filterByButton = document.querySelectorAll('.filter-by');
const search = document.getElementById('find-country');

const showNote = () => {
    note.classList.remove('hide-note');
}

const hideNote = () => {
    note.classList.add('hide-note');
}

const hideMenu = () => {
    menu.classList.remove('show-menu');
}

const message = () => {
    const message = document.createElement('p');
    message.classList.add('message');
    message.textContent = `No countries found ⚠`;
    return message;
}

function countryContent(country) {
    const section = document.createElement('section');
    const image = document.createElement('img');
    const head = document.createElement('h4');
    const population = document.createElement('p');
    const region = document.createElement('p');
    const capital = document.createElement('p');

    image.setAttribute('src', `${country.flag}`);
    image.setAttribute('alt', `Flag of ${country.name}`);

    head.textContent = country.name;
    population.innerHTML = `<strong>Population:</strong> ${country.population}`;
    region.innerHTML = `<strong>Region:</strong> ${country.region}`;
    capital.innerHTML = `<strong>Capital:</strong> ${country.capital}`;

    section.appendChild(image);
    section.appendChild(head);
    section.appendChild(population);
    section.appendChild(region);
    section.appendChild(capital);

    return section;
}

//This function sets all the necessary elements to display each and every individual country and it's contents.
function showCountries(getCountries) {
    content.innerHTML = "";

    if (getCountries.length === 0) {
        hideNote();
        content.appendChild(message());
        return;
    }

    showNote();

    getCountries.forEach((country) => {
        const section = countryContent(country);

        const link = document.createElement('a');
        link.setAttribute('class', 'link-to-page');
        link.setAttribute('href', `./pages/index.html`);

        link.appendChild(section);
        content.appendChild(link);

        link.addEventListener('click', () => {
            // Instead of alert, consider a smoother UI approach
            alert(`Country: ${country.name}`);
        });
    });
}

//This code handles the filtration of countries by region
let filteredRegion;

filterByButton.forEach(button => {
    button.addEventListener('click', () => {
        hideMenu()
        filteredRegion = countries.filter(country => country.region === button.value);
        button.value === 'All' ? showCountries(countries) : showCountries(filteredRegion);
    });
});

//The function to handle user input to search for a country
let filteredCountries;

search.addEventListener('input', () => {
    const searchTerm = search.value.toLowerCase().trim();
    filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm)
    );

    showCountries(filteredCountries);
});

document.addEventListener('DOMContentLoaded', () => {
    showCountries(countries);
})
