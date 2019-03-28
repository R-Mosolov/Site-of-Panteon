// Проверка подключения кода
// alert(`Hello, world!`);

// Введение новых переменных, отвечающих за заголовки и содержание блоков
const burgerMenuOpen = document.querySelector('.header__menu--open');
const burgerMenuClose = document.querySelector('.header__menu--close');
const burgerMenuContent = document.querySelector('.header__menu--content');


// Открытие/закрытие содержания контента при клике на меню
burgerMenuOpen.addEventListener('click', function () {
    burgerMenuOpen.classList.add('visually-hidden__mobile');
    burgerMenuContent.classList.remove('visually-hidden__mobile');
});

burgerMenuClose.addEventListener('click', function () {
    burgerMenuContent.classList.add('visually-hidden__mobile');
    burgerMenuOpen.classList.remove('visually-hidden__mobile');
});