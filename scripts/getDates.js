const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

let date = new Date();

year.innerHTML = date.getFullYear();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;