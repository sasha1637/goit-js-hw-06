// Обробка відправлення форми form.login - form повинна відбуватися відповідно до події submit.


// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//     що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//  Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formSubmit = document.querySelector(".login-form");
formSubmit.addEventListener('submit', onsubmit);
function onsubmit(e) {
    e.preventDefault()
    const { email, password } = e.currentTarget.elements;
    if (email.value && password.value) {
        const arr = {
            email: email.value,
            password: password.value
        }
        console.log(arr);
        }
     else {
        alert("Всі поля повинні бути заповнені!")
    }
        e.currentTarget.reset();


}
