let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

const login = () => {
  if (email !== 'pixelplay@store.com' && password !== 123) {
    alert('Invalid email or password')
  } else {
    alert('welcome back Pixel Play')
  }
}