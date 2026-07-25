export default function () {
	const contentContainerEl = document.querySelector("#content");

	const navBtnEls = document.querySelectorAll(".nav-btn");
	navBtnEls.forEach((el) => el.classList.remove("hovering"));
	navBtnEls[2].classList.add("hovering");

	const aboutH1El = document.createElement("h1");
	aboutH1El.classList.add("about");
	const aboutLinkEl = document.createElement("a");
	aboutLinkEl.setAttribute("href", "https://github.com/emam04bd");
	aboutLinkEl.innerText = "About Us";
	contentContainerEl.appendChild(aboutH1El);
	aboutH1El.appendChild(aboutLinkEl);
}
