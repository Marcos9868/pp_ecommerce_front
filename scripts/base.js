const listImages = [
  "./assets/img/header/header-backgrounds/crash.jpg",
  "./assets/img/header/header-backgrounds/ghost-of-tsushima.webp",
  "./assets/img/header/header-backgrounds/hogwarts-legacy.jpg",
  "./assets/img/header/header-backgrounds/starfield.jpg",
  "./assets/img/header/header-backgrounds/cod.jpg",
];

const headerEl = document.querySelector(".js-header-bg");
const headerElStyles = window.getComputedStyle(headerEl);
const headerImage = headerElStyles.getPropertyValue("background-image");
let imagePath = headerImage
  .replace('url("', "")
  .replace('")', "")
  .replace(
    "linear-gradient(rgba(21, 29, 39, 0) 25.36%, rgb(21, 29, 39) 100%),",
    ""
  );

console.log(headerEl);

const changeImage = Math.floor(Math.random() * listImages.length);
const linearGradient =
  "linear-gradient(180deg, rgba(21, 29, 39, 0) 25.36%, #151d27 100%)";

headerEl.style.backgroundImage = `url('${listImages[changeImage]}')`;
