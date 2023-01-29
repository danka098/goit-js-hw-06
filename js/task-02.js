const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients');
ingredients.forEach(function(ingredient)  {
  const liElement = document.createElement("li");
liElement.textContent = ingredient;
liElement.classList.add('item');
ulList.append(liElement);
 })