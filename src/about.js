export default function () {
	const contentContainerEl = document.querySelector("#content");
	contentContainerEl.innerText = "";

	const navBtnEls = document.querySelectorAll(".nav-btn");
	navBtnEls.forEach((el) => el.classList.remove("hovering"));
	navBtnEls[2].classList.add("hovering");

	const aboutH1El = document.createElement("h1");
	aboutH1El.classList.add("about");
	aboutH1El.innerText = "About Us";
	contentContainerEl.appendChild(aboutH1El);
}
