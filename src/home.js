export default function () {
	const contentContainerEl = document.querySelector("#content");
	contentContainerEl.innerText = "";

	const navBtnEls = document.querySelectorAll(".nav-btn");
	navBtnEls.forEach((el) => el.classList.remove("hovering"));
	navBtnEls[0].classList.add("hovering");

	const homeH1El = document.createElement("h1");
	homeH1El.classList.add("home");
	homeH1El.innerText = "Welcome to the RESTAURANT";
	contentContainerEl.appendChild(homeH1El);

	const homeP1El = document.createElement("p");
	homeP1El.classList.add("home");
	homeP1El.innerText =
		"This is the greatest restaurant which will never exist.";
	contentContainerEl.appendChild(homeP1El);

	const homeP2El = document.createElement("p");
	homeP2El.classList.add("home");
	homeP2El.innerText =
		"There is nothing else in this tab. Feel free to explore the other tabs";
	contentContainerEl.appendChild(homeP2El);
}
