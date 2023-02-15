let priceRange = document.getElementById('price-range');
let spanPrice = document.getElementById('price-span');

const showPrice = () => {
  spanPrice.innerHTML = `R$ ${priceRange}`
}
