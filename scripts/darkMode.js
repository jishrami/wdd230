const button = document.querySelector('#dark-mode');
const body = document.querySelector('body');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const navElements = document.querySelectorAll('a');
const menuElement = document.querySelector('#menu');

button.addEventListener('click', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.classList.toggle('dark');
    main.classList.toggle('dark');
    button.classList.toggle('dark');
    footer.classList.toggle('dark');
    menuElement.classList.toggle('dark');
    navElements.forEach(element => {
        element.classList.toggle('dark');
    })
    if (menuElement.classList.contains('dark') && button.classList.contains('dark')) {
        menuElement.style.border = "5px solid #ffffff80";
        button.style.border = "5px solid #ffffff80";
    }
})