// HERO IMAGE BACKGROUNDS
function heroBackground() {
  const listImages = [
    "../pp_ecommerce_front/assets/img/hero-background/hogwarts-legacy.jpg",
    "../pp_ecommerce_front/assets/img/hero-background/ghost-of-tsushima.webp",
    "../pp_ecommerce_front/assets/img/hero-background/hogwarts-legacy.jpg",
    "../pp_ecommerce_front/assets/img/hero-background/starfield.jpg",
    "../pp_ecommerce_front/assets/img/hero-background/cod.jpg",
  ];

  const heroImage = document.querySelector(".js-hero-image");
  const changeImage = Math.floor(Math.random() * listImages.length);

  heroImage.src = listImages[changeImage];
}
heroBackground();
