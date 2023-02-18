let priceRange = document.getElementById('price-range');
let spanPrice = document.getElementById('price-span');

const showPrice = () => {
  spanPrice.innerHTML = `R$ ${priceRange}`
}

let button4 = document.getElementById("button4");

button4.addEventListener("click", function () {
  let range = document.querySelector(".price-range");
  range.classList.toggle("active");
});
