function getCurrentYear() {
    const year = document.getElementById("year");
    let date = new Date();
    year.innerHTML = date.getFullYear();
};

function getLastModified() {
    const lastModified = document.getElementById("lastModified");
    lastModified.innerHTML = `Last Modification: ${document.lastModified}`;
};

getCurrentYear()
getLastModified()