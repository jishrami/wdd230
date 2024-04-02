const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
const bannerClose = document.querySelector("#close");
const banner = document.querySelector("#banner");

const day = new Date();

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

bannerClose.addEventListener('click', () => {
	banner.style.display = "none";
})

function closedBanner() {
	if (day.getDay() === 1 || day.getDay() === 2 || day.getDay() === 3) {
		banner.style.display = "flex";
	}
	else {
		banner.style.display = "none";
	}
}

closedBanner()