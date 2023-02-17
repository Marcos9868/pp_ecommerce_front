let button = document.getElementById("button");

button.addEventListener("click", function () {
  let filter = document.querySelector(".filter");
  filter.classList.toggle("active");
});

let button2 = document.getElementById("button2");

button2.addEventListener("click", function () {
  let categories = document.querySelector(".game-categories");
  categories.classList.toggle("active");
});

let button3 = document.getElementById("button3");

button3.addEventListener("click", function () {
  let industries = document.querySelector(".game-industries");
  industries.classList.toggle("active");
});

