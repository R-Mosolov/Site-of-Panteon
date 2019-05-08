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
    faqFirstBlockOpen.classList.remove('visually-hidden');
    faqFirstBlockClose.classList.add('visually-hidden');
    faqFirstBlockContent.classList.add('visually-hidden');
});
faqFirstBlockOpen.addEventListener('click', function () {
    faqFirstBlockOpen.classList.add('visually-hidden');
    faqFirstBlockClose.classList.remove('visually-hidden');
    faqFirstBlockContent.classList.remove('visually-hidden');
});

// Открытие/закрытие блока 2
faqSecondBlockClose.addEventListener('click', function () {
    faqSecondBlockOpen.classList.remove('visually-hidden');
    faqSecondBlockClose.classList.add('visually-hidden');
    faqSecondBlockContent.classList.add('visually-hidden');
});
faqSecondBlockOpen.addEventListener('click', function () {
    faqSecondBlockOpen.classList.add('visually-hidden');
    faqSecondBlockClose.classList.remove('visually-hidden');
    faqSecondBlockContent.classList.remove('visually-hidden');
});

// Открытие/закрытие блока 3
faqThirdBlockClose.addEventListener('click', function () {
    faqThirdBlockOpen.classList.remove('visually-hidden');
    faqThirdBlockClose.classList.add('visually-hidden');
    faqThirdBlockContent.classList.add('visually-hidden');
});
faqThirdBlockOpen.addEventListener('click', function () {
    faqThirdBlockOpen.classList.add('visually-hidden');
    faqThirdBlockClose.classList.remove('visually-hidden');
    faqThirdBlockContent.classList.remove('visually-hidden');
});

// Открытие/закрытие блока 4
faqFourthBlockClose.addEventListener('click', function () {
    faqFourthBlockOpen.classList.remove('visually-hidden');
    faqFourthBlockClose.classList.add('visually-hidden');
    faqFourthBlockContent.classList.add('visually-hidden');
});
faqFourthBlockOpen.addEventListener('click', function () {
    faqFourthBlockOpen.classList.add('visually-hidden');
    faqFourthBlockClose.classList.remove('visually-hidden');
    faqFourthBlockContent.classList.remove('visually-hidden');
});