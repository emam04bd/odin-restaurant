import food1Img from "./images/food1.jpg";
import food2Img from "./images/food2.jpg";
import food3Img from "./images/food3.jpg";
import food4Img from "./images/food4.jpg";
import food5Img from "./images/food5.jpg";
import food6Img from "./images/food6.jpg";

export default function () {
	const contentContainerEl = document.querySelector("#content");
	contentContainerEl.innerText = "";

	const navBtnEls = document.querySelectorAll(".nav-btn");
	navBtnEls.forEach((el) => el.classList.remove("hovering"));
	navBtnEls[1].classList.add("hovering");

	const menuH1El = document.createElement("h1");
	menuH1El.classList.add("menu");
	menuH1El.innerText = "Menu";
	contentContainerEl.appendChild(menuH1El);

	const foodListEl = document.createElement("div");
	foodListEl.setAttribute("id", "food-list");
	contentContainerEl.appendChild(foodListEl);

	const foodImgs = [
		food1Img,
		food2Img,
		food3Img,
		food4Img,
		food5Img,
		food6Img,
	];

	for (let i = 0; i < 6; i++) {
		const foodSnippetEl = document.createElement("div");
		foodSnippetEl.classList.add("food-snippet");
		foodListEl.appendChild(foodSnippetEl);

		const foodImageEl = document.createElement("img");
		foodImageEl.classList.add("food-image");
		foodImageEl.src = foodImgs[i];
		foodSnippetEl.appendChild(foodImageEl);

		const foodInfoEl = document.createElement("p");
		foodInfoEl.classList.add("food-info");
		foodInfoEl.innerText = `Food ${i + 1}`;
		foodSnippetEl.appendChild(foodInfoEl);
	}
}
