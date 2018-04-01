var css = document.querySelector('h3');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');

var body = document.querySelector('#mainContainer');

console.log(body);

function setBackgroundGradient(c1, c2, direction) {
  body.style.background = `linear-gradient(to ${direction}, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', () => setBackgroundGradient(color1.value, color2.value, 'right'));

color2.addEventListener('input', () => setBackgroundGradient(color1.value, color2.value, 'right'));
