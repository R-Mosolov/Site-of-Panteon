// Checking of code's connection
// alert(`Hello, world!`);


// Adding new variables which answer for block's headers and content

// Variables of navigation
const openResidence = document.querySelector('.infrastructure__icon--residence');
const openBuilding = document.querySelector('.infrastructure__icon--building');
const openScience = document.querySelector('.infrastructure__icon--science');
const openEmotions = document.querySelector('.infrastructure__icon--emotions');
const openEcology = document.querySelector('.infrastructure__icon--ecology');

const header = document.querySelectorAll('.infrastructure__h4');
const content = document.querySelectorAll('.infrastructure__content--part');


// Opening/closing of navigation's elements
const deleteHeaderAndContent = (headerName, contentName) => {
    for (let i = 0; i < 5; i++) {
        header[i].classList.add('visually-hidden');
        content[i].classList.add('visually-hidden');
    }
    headerName.classList.remove('visually-hidden');
    contentName.classList.remove('visually-hidden');
};

openResidence.addEventListener('click', function () {
    deleteHeaderAndContent(header[0], content[0]);
});

openBuilding.addEventListener('click', function () {
    deleteHeaderAndContent(header[1], content[1]);
});

openScience.addEventListener('click', function () {
    deleteHeaderAndContent(header[2], content[2]);
});

openEmotions.addEventListener('click', function () {
    deleteHeaderAndContent(header[3], content[3]);
});

openEcology.addEventListener('click', function () {
    deleteHeaderAndContent(header[4], content[4]);
});