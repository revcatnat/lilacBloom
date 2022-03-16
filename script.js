const iconsCoords = document.querySelector(".icons-container").getBoundingClientRect();
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
	if (window.scrollY > iconsCoords.top - 90) {
		navbar.style.backgroundColor = "white";
		navbar.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
	} else navbar.style.backgroundColor = "transparent";
});
