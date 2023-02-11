// Glider

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '#dots',
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  dragVelocity: 2,
  scrollLock: true,

});