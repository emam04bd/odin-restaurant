import "./styles.css";

import showHomeContent from "./home.js";
import showAboutContent from "./about.js";
import showMenuContent from "./menu.js";

const homeBtnEl = document.querySelector("#home-btn");
const menuBtnEl = document.querySelector("#menu-btn");
const aboutBtnEl = document.querySelector("#about-btn");

homeBtnEl.addEventListener("click", showHomeContent);
menuBtnEl.addEventListener("click", showMenuContent);
aboutBtnEl.addEventListener("click", showAboutContent);

showHomeContent();
