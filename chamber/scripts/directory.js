const url = "./data/members.json";

async function getDirectory() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayDirectory(data);
}

function displayDirectory(members) {
    const main = document.querySelector("#dir-main");
    main.setAttribute("class", "directory");

    const buttons = `
    <div id="directory-buttons">
        <button id="listView">List</button>
        <button id="gridView">Grid</button>
    </div>
    `;

    main.innerHTML = buttons;

    const board = document.createElement("article");
    board.setAttribute("class", "board gridView"); // Initial view
    main.appendChild(board);

    const companies = members.companies;
    for (const member of companies) {
        const section = document.createElement("section");
        section.setAttribute("class", "member-section");

        let membLvlIcon = "";

        if (member.membership_level === "Gold") {
            membLvlIcon = "&#x1f947;";
        }

        if (member.membership_level === "Silver") {
            membLvlIcon = "&#x1f948;";
        }

        if (member.membership_level === "Bronze") {

            membLvlIcon = "&#x1f949;";
        }

        if (member.membership_level === "nonprofit") {
            membLvlIcon = "&#x1F3C5;";
        }

        const card = `
        <div class="member-card">
            <h2>${member.name}</h2>
            <h3>${member.membership_level}${membLvlIcon}</h3>
            <img src="${member.image_url}" alt="${member.name}" class="member-logo">
            <p id="phone">${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>${member.other_info}</p>
        </div>
        `;
        section.innerHTML = card;
        board.appendChild(section);
    }

    const listButton = document.querySelector("#listView");
    const gridButton = document.querySelector("#gridView");

    listButton.addEventListener("click", () => {
        board.classList.remove("gridView");
        board.classList.add("listView");
    });

    gridButton.addEventListener("click", () => {
        board.classList.remove("listView");
        board.classList.add("gridView");
    });
}

getDirectory();
