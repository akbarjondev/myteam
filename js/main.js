var elButton = document.querySelector(".site-header__burger");
var elInner = document.querySelector(".nav-inner");
var elNav = document.querySelector(".nav");

elButton.addEventListener("click", function() {
	elNav.classList.toggle("nav--dark");
	elInner.classList.toggle("nav-inner--toggle");
	elButton.classList.toggle("site-header__burger--close");
});