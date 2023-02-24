function login(email, password) {
  if (email.value === 'pixelplay@store.com' && password.value === 123) {
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password');
  }

  return window.location.href = 'index.html';
}