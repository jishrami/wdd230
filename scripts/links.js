const baseURL = "https://jishrami.github.io/wdd230/";
const linksURL = "https://jishrami.github.io/wdd230/data/links.json";
const activities = document.querySelector("#activities");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // this is for testing
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const ul = document.createElement("ul");

    weeks.forEach(week => {
        const weekItem = document.createElement("li");
        weekItem.textContent = week.week + " : ";
        week.links.forEach(link => {
            const linkItem = document.createElement("a");
            const url = new URL(link.url, baseURL);
            if (url.origin === baseURL) {
                linkItem.href = url.pathname + url.search + url.hash;
            } else {
                linkItem.href = url.href;
                linkItem.target = "_blank";
            }
            linkItem.textContent = link.title;
            weekItem.appendChild(linkItem);
            weekItem.appendChild(document.createTextNode(" | "));
        });
        weekItem.removeChild(weekItem.lastChild);
        ul.appendChild(weekItem);
    });

    activities.appendChild(ul);
}


getLinks();
