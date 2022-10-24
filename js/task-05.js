// Напиши скрипт, який під час набору тексту 
// в інпуті input#name - input(подія input), 
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");
inputRef.addEventListener('input', onInput)
function onInput(e) {
    if (e.currentTarget.value.trim()) {
                spanRef.textContent=e.currentTarget.value
    } else {
        spanRef.textContent = 'Anonymous';
    }
}