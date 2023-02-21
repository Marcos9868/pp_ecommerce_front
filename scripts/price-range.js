let priceRange = document.getElementById("price-range");
let spanPrice = document.getElementById("price-span");

let priceRange2 = document.getElementById("price-range2");
let spanPrice2 = document.getElementById("price-span2");

function showPrice() {
  spanPrice.innerHTML = `R$ ${priceRange.value}`;
  spanPrice2.innerHTML = `R$ ${priceRange2.value}`;
}

let button4 = document.getElementById("button4");

button4.addEventListener("click", function () {
  let range = document.querySelector(".price-range");
  range.classList.toggle("active");
});

const rangeInput = document.querySelectorAll(".range-input input");
priceInput = document.querySelectorAll(".price-input input");

progress = document.querySelector(".slider .progress");

let priceGap = 100;

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
