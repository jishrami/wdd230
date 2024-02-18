const visits = document.querySelector('#discoverVisits');
const currentDate = new Date();
const milliseconds = 1000 * 60 * 60 * 24;
let lastVisitDate = Number(window.localStorage.getItem('lastVisitDate')) || currentDate.getTime();

if (!lastVisitDate) {
    visits.innerHTML = `<h2>This is your first time here! <br>WELCOME!</br>`;
} else {
    const days = Math.floor((currentDate - lastVisitDate) / milliseconds);

    if (days < 1) {
        visits.innerHTML = `Back so soon! Contact us if you have any questions!`;
    }
    else if (days === 1) {
        visits.innerHTML = `Back ${days} day ago! Contact us if you have any questions!`;
    }
    else {
        visits.innerHTML = `You were here ${days} days ago! Contact us if you have any questions!`;
    }
}

window.localStorage.setItem('lastVisitDate', currentDate.getTime().toString());
