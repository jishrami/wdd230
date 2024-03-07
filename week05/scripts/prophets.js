const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        let portrait = document.createElement('img');
        fullName.innerText = (`${prophet.name} ${prophet.lastname}`);
        dob.innerText = (`Date of Birth: ${prophet.birthdate}`);
        pob.innerText = (`Place of Birth: ${prophet.birthplace}`);
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '90%');
        portrait.setAttribute('height', '440');
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);
        cards.appendChild(card);
    })
}