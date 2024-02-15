const visits = document.querySelector('#visits');
let count = localStorage.getItem('numVisits-ls') || 0;
if (count == 0) {
    visits.innerHTML = `This is your first time here! <br>WELCOME!</br>`;
}
else {
    visits.innerHTML = `${count}`;
}
localStorage.setItem('numVisits-ls', ++count);