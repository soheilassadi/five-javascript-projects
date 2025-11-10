const greenElement = document.querySelector('.js-green-button');
const redElement = document.querySelector('.js-red-button');
const blueElement = document.querySelector('.js-blue-button');
const randomElement = document.querySelector('.js-random-button');

greenElement.style.backgroundColor = 'green';
redElement.style.backgroundColor = 'red';
blueElement.style.backgroundColor = 'blue';

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

randomElement.addEventListener('click', () => {
  changePageColor('');
});
