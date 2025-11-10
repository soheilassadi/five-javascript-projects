const greenElement = document.querySelector('.js-green-button');
const redElement = document.querySelector('.js-red-button');
const blueElement = document.querySelector('.js-blue-button');
const randomElement = document.querySelector('.js-random-button');

greenElement.style.backgroundColor = 'green';
redElement.style.backgroundColor = 'red';
blueElement.style.backgroundColor = 'blue';
blueElement.style.color = 'white';

function changePageColor(color) {
  document.body.style.backgroundColor = color;
}

greenElement.addEventListener('click', () => {
  changePageColor('green');
});

redElement.addEventListener('click', () => {
  changePageColor('red');
});

blueElement.addEventListener('click', () => {
  changePageColor('blue');
});

// Random button function on click
randomElement.addEventListener('click', () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  console.log(color);
  changePageColor(color);
});
