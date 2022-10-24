function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.
const inputRef = document.querySelector("#controls>input");
const boxesRef = document.querySelector("#boxes");
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
// Как можно избавиться от этой переменной totalDiv?
let totalDiv = 0;

inputRef.addEventListener('change', onInput);
btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', clearBoxes)


function onInput(e) {
  clearBoxes()
  totalDiv = e.currentTarget.value
}
function createBoxes() {
  clearBoxes()
  let amount = totalDiv;
  for (let i = 0, a=0; i < amount; i++, a+=10) {
    const markup = document.createElement('div');
    markup.style.backgroundColor = getRandomHexColor();
    markup.style.width = `${30 + a}px`
    markup.style.height = `${30 + a}px`
    markup.style.margin='30px'
    boxesRef.append(markup)
  }
}
function clearBoxes() {
  boxesRef.innerHTML=''
}


