// Проверка подключения кода
// alert(`Hello, world!`);


// Введение новых переменных, отвечающих за заголовки и содержание блоков

// Переменные блока 1
const faqFirstBlockOpen = document.querySelector('.faq__block-1--open');
const faqFirstBlockClose = document.querySelector('.faq__block-1--close');
const faqFirstBlockContent = document.querySelector('.faq__block-1--content');

// Переменные блока 2
const faqSecondBlockOpen = document.querySelector('.faq__block-2--open');
const faqSecondBlockClose = document.querySelector('.faq__block-2--close');
const faqSecondBlockContent = document.querySelector('.faq__block-2--content');

// Переменные блока 3
const faqThirdBlockOpen = document.querySelector('.faq__block-3--open');
const faqThirdBlockClose = document.querySelector('.faq__block-3--close');
const faqThirdBlockContent = document.querySelector('.faq__block-3--content');

// Переменные блока 4
const faqFourthBlockOpen = document.querySelector('.faq__block-4--open');
const faqFourthBlockClose = document.querySelector('.faq__block-4--close');
const faqFourthBlockContent = document.querySelector('.faq__block-4--content');


// Открытие, закрытие содержания блока при клике на него

// Открытие/закрытие блока 1
faqFirstBlockClose.addEventListener('click', function () {
    faqFirstBlockOpen.classList.remove('visually-hidden__mobile');
    faqFirstBlockClose.classList.add('visually-hidden__mobile');
    faqFirstBlockContent.classList.add('visually-hidden__mobile');
});
faqFirstBlockOpen.addEventListener('click', function () {
    faqFirstBlockOpen.classList.add('visually-hidden__mobile');
    faqFirstBlockClose.classList.remove('visually-hidden__mobile');
    faqFirstBlockContent.classList.remove('visually-hidden__mobile');
});

// Открытие/закрытие блока 2
faqSecondBlockClose.addEventListener('click', function () {
    faqSecondBlockOpen.classList.remove('visually-hidden__mobile');
    faqSecondBlockClose.classList.add('visually-hidden__mobile');
    faqSecondBlockContent.classList.add('visually-hidden__mobile');
});
faqSecondBlockOpen.addEventListener('click', function () {
    faqSecondBlockOpen.classList.add('visually-hidden__mobile');
    faqSecondBlockClose.classList.remove('visually-hidden__mobile');
    faqSecondBlockContent.classList.remove('visually-hidden__mobile');
});

// Открытие/закрытие блока 3
faqThirdBlockClose.addEventListener('click', function () {
    faqThirdBlockOpen.classList.remove('visually-hidden__mobile');
    faqThirdBlockClose.classList.add('visually-hidden__mobile');
    faqThirdBlockContent.classList.add('visually-hidden__mobile');
});
faqThirdBlockOpen.addEventListener('click', function () {
    faqThirdBlockOpen.classList.add('visually-hidden__mobile');
    faqThirdBlockClose.classList.remove('visually-hidden__mobile');
    faqThirdBlockContent.classList.remove('visually-hidden__mobile');
});

// Открытие/закрытие блока 4
faqFourthBlockClose.addEventListener('click', function () {
    faqFourthBlockOpen.classList.remove('visually-hidden__mobile');
    faqFourthBlockClose.classList.add('visually-hidden__mobile');
    faqFourthBlockContent.classList.add('visually-hidden__mobile');
});
faqFourthBlockOpen.addEventListener('click', function () {
    faqFourthBlockOpen.classList.add('visually-hidden__mobile');
    faqFourthBlockClose.classList.remove('visually-hidden__mobile');
    faqFourthBlockContent.classList.remove('visually-hidden__mobile');
});