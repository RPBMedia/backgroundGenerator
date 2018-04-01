var css = document.querySelector('h3');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');

var body = document.querySelector('#mainContainer');

function setBackgroundGradient(c1, c2, direction) {
  body.style.background = `linear-gradient(to ${direction}, ${color1.value}, ${color2.value})`;
}
