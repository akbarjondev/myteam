var elButton = document.querySelector(".site-header__burger");
var elNav = document.querySelector(".nav");

elButton.addEventListener("click", function() {
	elNav.classList.toggle("nav--toggle");
	elButton.classList.toggle("site-header__burger--close");
});