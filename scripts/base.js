// HERO IMAGE BACKGROUNDS
function heroBackground() {
  const listImages = [
    '../assets/img/hero-background/crash.jpg',
    '../assets/img/hero-background/ghost-of-tsushima.webp',
    '../assets/img/hero-background/hogwarts-legacy.jpg',
    '../assets/img/hero-background/starfield.jpg',
    '../assets/img/hero-background/cod.jpg',
  ];

  const heroImage = document.querySelector('.js-hero-image');
  const changeImage = Math.floor(Math.random() * listImages.length);

  heroImage.src = listImages[changeImage];
}
heroBackground();

// CARROSSEL
function carrossel() {
  const slideListImages = [
    '../assets/img/hero-background/crash.jpg',
    '../assets/img/hero-background/ghost-of-tsushima.webp',
    '../assets/img/hero-background/hogwarts-legacy.jpg',
    '../assets/img/hero-background/starfield.jpg',
    '../assets/img/hero-background/cod.jpg',
  ];
  const slideImage = document.querySelector('.slide-images img');
  const prevButton = document.querySelector('.js-prevButton');
  const nextButton = document.querySelector('.js-nextButton');

  console.log(prevButton);

  let currentIndex = 0;
  let intervalId = null;

  function currentImage() {
    slideImage.src = slideListImages[currentIndex];
  }

  function changeSlideImage() {
    currentIndex++;
    if (currentIndex >= slideListImages.length) {
      currentIndex = 0;
    }
    currentImage();
  }

  function prevSlideBtn() {
    console.log('prev-btn clickekd');
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = slideListImages.length - 1;
    }
    currentImage();
  }
  function nextSlideBtn() {
    console.log('next-btn clickekd');
    currentIndex++;

    if (currentIndex >= slideListImages.length) {
      currentIndex = 0;
    }
    currentImage();
  }

  prevButton.addEventListener('click', prevSlideBtn);
  nextButton.addEventListener('click', nextSlideBtn);

  console.log(prevButton);

  setInterval(changeSlideImage, 5000);
}
carrossel();
