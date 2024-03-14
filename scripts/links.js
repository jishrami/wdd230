const baseURL = "https://jishrami.github.io/wdd230/";
const linksURL = "https://jishrami.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // this is for testing
    displayLinks(data);
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        
    });
}

getLinks();