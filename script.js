const randomColor = () => {
	let randomNumber;
	let hexValues = "0123456789ABCDEF";
	let code = "#";

	for (let i = 0; i < 6; i++) {
		randomNumber = Math.floor(Math.random() * 16);
		code += hexValues[randomNumber];
	}

	return code;
};

console.log(randomColor());

let interval;
const startChangingColor = () => {
	if (!interval) {
		interval = setInterval(() => {
			document.body.style.backgroundColor = randomColor();
		}, 10);
	}
};
const stopChangingColor = () => {
	clearInterval(interval);
	interval = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
