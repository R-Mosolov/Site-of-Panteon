// Проверка подключения кода
// alert(`Hello, world!`);


// Введение новых переменных, отвечающих за событие (клик) и загрузку видео

// Переменные первого экрана ("Пункт назначения: Пантеон, Марс")
const offerOpeningVideo = document.querySelector('.offer__video--open');
const faqOpeningVideo = document.querySelector('.faq__video--open');
const faqOpeningVideoDesktop = document.querySelector('.faq__desktop--video-open');
const offerclosingVideo = document.querySelector('.video--close');
const offervideoContent = document.querySelector('.video--content');


// Открытие/закрытие видео при клике на постер

// Видео на первом экране ("Пункт назначения: Пантеон, Марс")
offerOpeningVideo.addEventListener('click', function () {
    offerOpeningVideo.classList.add('visually-hidden');
    offervideoContent.classList.remove('visually-hidden');
});

offerclosingVideo.addEventListener('click', function () {
    offervideoContent.classList.add('visually-hidden');
    offerOpeningVideo.classList.remove('visually-hidden');
});

// Видео на пятом экране mobile-версии ("Подводные камни в масштабах Космоса")
faqOpeningVideo.addEventListener('click', function () {
    faqOpeningVideo.classList.add('visually-hidden');
    offervideoContent.classList.remove('visually-hidden');
});

offerclosingVideo.addEventListener('click', function () {
    offervideoContent.classList.add('visually-hidden');
    faqOpeningVideo.classList.remove('visually-hidden');
});

// Видео на пятом экране desktop-версии ("Подводные камни в масштабах Космоса")
faqOpeningVideoDesktop.addEventListener('click', function () {
    faqOpeningVideoDesktop.classList.add('visually-hidden');
    offervideoContent.classList.remove('visually-hidden');
});

offerclosingVideo.addEventListener('click', function () {
    offervideoContent.classList.add('visually-hidden');
    faqOpeningVideoDesktop.classList.remove('visually-hidden');
});