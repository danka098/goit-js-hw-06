
const liElement = document.querySelectorAll('.item');
console.log(`Number of categories: ${liElement.length}`);
liElement.forEach((li) => {
    console.log(`Category: ${li.querySelector('h2').textContent}`);
    console.log(`Elements: ${li.querySelectorAll('li').length}`);
})