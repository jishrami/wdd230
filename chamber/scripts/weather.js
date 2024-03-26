const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=26.122749432582825&lon=-80.14042125098024&units=imperial&cnt=3&appid=51fab419a49651c90732d786220a79cd';

const currentTemp = document.querySelector('#weather');
const forecast = document.querySelector('#three-day');
///26.122749432582825, -80.14042125098024

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
            console.log(data.list)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(weatherData) {
    let desc = weatherData.list[0].weather[0].description;
    currentTemp.innerHTML = `<p>Today:</p><p>${weatherData.list[0].main.temp_max} / ${weatherData.list[0].main.temp_min}&degF - ${desc}</p>`;

    forecast.innerHTML = `<p>3-day forecast:</p><p>${weatherData.list[0].main.temp.toFixed(0)}&degF | ${weatherData.list[1].main.temp.toFixed(0)}&degF | ${weatherData.list[2].main.temp.toFixed(0)}&degF</p>`;

    console.log(forecast);
}

apiFetch();