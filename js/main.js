var elButton = document.querySelector(".site-header__burger");
var elInner = document.querySelector(".nav-inner");
var elNav = document.querySelector(".nav");

elButton.addEventListener("click", function() {
	elNav.classList.toggle("nav--dark");
	elInner.classList.toggle("nav-inner--toggle");
	elButton.classList.toggle("site-header__burger--close");
});

var elPlusButton = document.querySelectorAll(".directors__item-button");
var elDirectorsItem = document.querySelector(".directors__item");


elPlusButton.forEach(elToggle);

function elToggle(e) {
	e.addEventListener("click", function() {
		e.classList.toggle("shape");
	});
}