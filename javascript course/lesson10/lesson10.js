console.log(document.querySelector('.js-button').classList.contains('js-button'));

let buttonElement = document.querySelector('.gaming-button');
let buttonElement2 = document.querySelector('.music-button');
let buttonElement3 = document.querySelector('.tech-button');

function toggleButton (buttonElem, buttonElem2, buttonElem3) {
    if (!(buttonElem2.classList.contains('is-toggled')) && !(buttonElem3.classList.contains('is-toggled')) && !(buttonElem.classList.contains('is-toggled'))) {
        buttonElem.classList.add('is-toggled');
    } else if (buttonElem.classList.contains('is-toggled')) {
        buttonElem.classList.remove('is-toggled');
    }
}