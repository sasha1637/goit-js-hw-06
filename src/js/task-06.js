// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість
//     - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали у
//  вихідні файли завдання.
const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onfocus);
function onfocus(e) {
    console.dir(e.currentTarget);
    if (e.currentTarget.value.length === +e.currentTarget.dataset.length ) {
        // inputRef.style.borderColor = "#4caf50";
             inputRef.classList.remove("invalid")
        inputRef.classList.add("valid")
        // inputRef.classList.toggle("valid")

    } else {
        // inputRef.style.borderColor = "#f44336"
             inputRef.classList.remove("valid")
        inputRef.classList.add("invalid")
        // inputRef.classList.toggle("invalid")
    }
};
