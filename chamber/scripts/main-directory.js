const data_url = "./data/members.json";

async function getDirectory() {
    const response = await fetch(data_url);
    const data = await response.json();
    // console.log(data);
    spotlightDirectory(data);
}

function spotlightDirectory(members) {
    const spotlight = document.querySelector("#spotlight");

    const companies = members.companies;
    const selectedMembers = [];
    while (selectedMembers.length < 2) {
        const randomIndex = Math.floor(Math.random() * companies.length);
        const randomMember = companies[randomIndex];
        if ((randomMember.membership_level === "Gold" || randomMember.membership_level === "Silver") &&
            !selectedMembers.includes(randomMember)) {
            selectedMembers.push(randomMember);
        }
    }
    console.log(selectedMembers);
    
    for (const member of selectedMembers) {
        const spotlightCard = `
        <div class="member-card" id="spotlight-card">
            <h2>${member.name}</h2>
            <h3>${member.membership_level} </h3>
            <img src="${member.image_url}" alt="${member.name}" class="spotlight-logo" loading="lazy">
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>${member.other_info}</p>
        </div>
        `;
        spotlight.innerHTML += spotlightCard;
    }
}

getDirectory();