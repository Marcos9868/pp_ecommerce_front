// HERO IMAGE BACKGROUNDS
function heroBackground() {
  const listImages = [
    "./assets/img/hero-background/hogwarts-legacy.jpg",
    "./assets/img/hero-background/ghost-of-tsushima.webp",
    "./assets/img/hero-background/hogwarts-legacy.jpg",
    "./assets/img/hero-background/starfield.jpg",
    "./assets/img/hero-background/cod.jpg",
  ];

  const heroImage = document.querySelector(".js-hero-image");
  const changeImage = Math.floor(Math.random() * listImages.length);

  heroImage.src = listImages[changeImage];
}
heroBackground();
