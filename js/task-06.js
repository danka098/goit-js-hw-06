const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener('blur', () => {
if (inputElement.value.trim().length == inputElement.getAttribute("data-length")) {
    inputElement.classList.remove('invalid');
inputElement.classList.add('valid')}

else {inputElement.classList.remove('valid');
inputElement.classList.add('invalid')}
})