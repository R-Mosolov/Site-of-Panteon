// Проверка подключения кода
// alert(`Hello, world!`);


// Введение новых переменных, отвечающих за событие (клик) и загрузку видео

// Переменные первого экрана ("Пункт назначения: Пантеон, Марс")
const offerOpeningVideo = document.querySelector('.offer__video--open');
const faqOpeningVideo = document.querySelector('.faq__video--open');
const offerclosingVideo = document.querySelector('.video--close');
const offervideoContent = document.querySelector('.video--content');


// Открытие/закрытие видео при клике на постер

// Видео на первом экране ("Пункт назначения: Пантеон, Марс")
offerOpeningVideo.addEventListener('click', function () {
    offerOpeningVideo.classList.add('visually-hidden__mobile');
    offervideoContent.classList.remove('visually-hidden__mobile');
});

offerclosingVideo.addEventListener('click', function () {
    offervideoContent.classList.add('visually-hidden__mobile');
    offerOpeningVideo.classList.remove('visually-hidden__mobile');
});

// Видео на пятом экране ("Подводные камни в масштабах Космоса")
faqOpeningVideo.addEventListener('click', function () {
    faqOpeningVideo.classList.add('visually-hidden__mobile');
    offervideoContent.classList.remove('visually-hidden__mobile');
});

offerclosingVideo.addEventListener('click', function () {
    offervideoContent.classList.add('visually-hidden__mobile');
    faqOpeningVideo.classList.remove('visually-hidden__mobile');
});