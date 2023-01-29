function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColors = document.querySelector('button');
const spanColor = document.querySelector('.color');

btnColors.addEventListener('click', () => {
  let newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;


})