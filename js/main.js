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

// sonlarni o'sish tartibida sortlash algoritmi
function insertionSort(inputArr) {
  let n = inputArr.length;
      for (let i = 1; i < n; i++) {
          // Choosing the first element in our unsorted subarray
          let current = inputArr[i];
          // The last element of our sorted subarray
          let j = i-1; 
          while ((j > -1) && (current < inputArr[j])) {
              inputArr[j+1] = inputArr[j];
              j--;
          }
          inputArr[j+1] = current;
      }
  return inputArr;
}

let inputArr = [5, 2, 4, 6, 1, 3, 100, 0, 11];
insertionSort(inputArr);
console.log(inputArr);