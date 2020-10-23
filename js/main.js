// создаем переменную, в котрую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener("click", function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // console.log("клик по кнопке меню");
  // вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle("visible");
});
