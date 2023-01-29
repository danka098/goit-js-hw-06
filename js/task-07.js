const inputSizeCtrl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
let size = 16;
inputSizeCtrl.addEventListener('input', (inputValue) => {
    size = inputValue.currentTarget.value;
    text.style.fontSize = `${size}px`;

})
