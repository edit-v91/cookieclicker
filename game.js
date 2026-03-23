let counter = 0;
let money = 0;

document.addEventListener("DOMContentLoaded", function () {
	const muffin = document.getElementById("muffin-photo");
	const muffinMoney = document.getElementById("money-photo");
	muffin.addEventListener("click", () => countClick());
	muffinMoney.addEventListener("click", () => buyMuffin());
});

function countClick() {
	counter++;
	let muffinCount = document.getElementById("click-counter");
	muffinCount.innerHTML = `${counter} muffin(s)`;
	displayPopupMessage();
	getMoneyCount();
	return muffinCount;
}

function displayPopupMessage() {
	const isDivisibleByTen = Math.floor(counter / 10) * 10;
	let popUpMessage = document.getElementById("pop-up-message");

	if (counter == isDivisibleByTen) {
		return (popUpMessage.innerHTML = `Yay! You reached ${counter} muffins!`);
	} else {
		return (popUpMessage.innerHTML = "");
	}
}

function getMoneyCount() {
	const isDivisibleByThree = Math.floor(counter / 3) * 3;
	let moneyCount = document.getElementById("money-counter");
	if (counter == isDivisibleByThree) {
		money++;
		moneyCount.innerHTML = `${money}`;
		return money;
	}
}

function buyMuffin() {
	counter += money;
	money = 0;
	document.getElementById("click-counter").innerHTML = `${counter} muffin(s)`;
	document.getElementById("money-counter").innerHTML = `${money}`;
	displayPopupMessage();
}
