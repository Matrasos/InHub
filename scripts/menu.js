document.addEventListener("DOMContentLoaded", function () {
  let burger = document.querySelector(".header__burger");
  let menu = document.querySelector(".header__menu");
  let body = document.querySelector("body");

  // Функция для закрытия меню
  function closeMenu() {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
  }

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });

  // Получаем все якорные ссылки в меню
  let navLinks = document.querySelectorAll(".header__nav-link");

  // Добавляем обработчик событий для каждой ссылки
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Закрываем меню при клике на ссылку
      closeMenu();
    });
  });
});
