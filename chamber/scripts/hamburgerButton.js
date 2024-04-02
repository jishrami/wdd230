const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
const joinButton = document.querySelector('#join');
const bannerClose = document.querySelector("#close");
const banner = document.querySelector("#banner");
const socials = document.querySelector("#social-head");
const day = new Date();

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

bannerClose.addEventListener('click', () => {
	banner.style.display = "none";
	hamButton.style.top = "1rem";
	socials.style.top = "1rem";
	joinButton.style.top = "1rem";
	navigation.style.top = "4rem";
})

function closedBanner() {
	if (day.getDay() === 1 || day.getDay() === 2 || day.getDay() === 3) {
		banner.style.display = "flex";
		hamButton.style.top = "5.5rem";
		joinButton.style.top = "5.5rem";
		socials.style.top = "5.5rem";
		navigation.style.top = "8rem";
	}
	else {
		banner.style.display = "none";
		hamButton.style.top = "1rem";
		joinButton.style.top = "1rem";
		navigation.style.top = "4rem";
		socials.style.top = "1rem";
	}
}

closedBanner()