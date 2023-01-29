let counterValue = 0;
const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


decrementBtn.addEventListener('click', () => {
counterValue --;
counter.textContent = counterValue;
});
incrementBtn.addEventListener('click', () => {
counterValue ++;
counter.textContent = counterValue;
} )