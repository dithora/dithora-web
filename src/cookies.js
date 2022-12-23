let container;
let apply;

const who = () => document.querySelector(".warning");

const findElements = () => {
	container = document.querySelector(".warning");
	apply = container.querySelector(".warning__apply");
};

const hideContainer = () => {
	container.classList.remove("warning--active");
};

const setCookie = () => {
	document.cookie = "warning=true; max-age=2592000; path=/";
};

const onClick = (event) => {
	event.preventDefault();
	hideContainer();
	setCookie();
};

const subscribe = () => {
	apply.addEventListener("click", onClick);
};

const init = () => {
	if (!who()) {
		return;
	}
	findElements();
	subscribe();
};

init();
