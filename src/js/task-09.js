function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.
const buttonRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");
const bodyColor =document.querySelector('body')
buttonRef.addEventListener("click", onChangeColor);
function onChangeColor(e) {
  const colorValue=getRandomHexColor()
  bodyColor.style.background = colorValue;
  spanColorRef.textContent = colorValue;
}

