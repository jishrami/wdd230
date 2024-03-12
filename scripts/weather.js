const url = "https://api.openweathermap.org/data/2.5/weather?lat=32.19455932153916&lon=-110.82063361575827&units=imperial&appid=51fab419a49651c90732d786220a79cd";
const currentTemp = document.querySelector('#weather');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
            console.log(data.weather.main)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;
    currentTemp.innerHTML = `<span>${weatherData.main.temp.toFixed(0)}&degF - ${desc}</span> <img src="${iconsrc}" alt="${desc}">`;
}

apiFetch();