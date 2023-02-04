const inputSizeCtrl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
let size = 40;
text.style.fontSize = `${size}px`;
inputSizeCtrl.addEventListener('input', (inputValue) => {
    size = inputValue.currentTarget.value;
    text.style.fontSize = `${size}px`;
})
