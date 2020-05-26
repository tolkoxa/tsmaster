'use strict'

//вызов модальных окон

let telephone = document.querySelector('.tel__btn');//кнопка - заказать звонок
let sub_wind = document.querySelector('.substrate'); // окно - заказать звонок, подложка
let windPhone = document.querySelector('.modal_phone');// окно - заказать звонок
let crossBtn = document.querySelector('.cross');

let call = document.querySelector('.cause'); // кнопка - вызвать мастера
let sub_wind1 = document.querySelector('.substrate1');
let windCause = document.querySelector('.modal_cause');
let crossBtn1 = document.querySelector('.cross1');

let reviewBtn = document.querySelector('.button-reviews');// кнопка - оставить отзыв
let sub_wind2 = document.querySelector('.substrate2');
let crossBtn2 = document.querySelector('.cross2');
let windReview = document.querySelector('.modal_rewiew');

//вызов - заказать звонок
showModal(telephone, windPhone, sub_wind, crossBtn);

//вызов - вызов мастера
showModal(call, windCause, sub_wind1, crossBtn1);

//вызов - оставить отзыв
showModal(reviewBtn, windReview, sub_wind2, crossBtn2);

/**
* Функция вызова модальных окон 
* данные по порядку
* @param {object} callBtn Кнопка вызова модального окна.
* @param {object} windModal Модальное окно.
* @param {object} shadowWindow Затенение экрана.
* @param {object} crossBtn Крестик для закрытия окна.
*/
function showModal(callBtn, windModal, shadowWindow, crossBtn) {
    callBtn.addEventListener('click', () => {
        shadowWindow.classList.remove('screen_off');
        windModal.classList.remove('screen_off');
    });
    crossBtn.addEventListener('click', () => {
        shadowWindow.classList.add('screen_off');
        windModal.classList.add('screen_off');;
    });
    shadowWindow.addEventListener('click', () => {
        shadowWindow.classList.add('screen_off');
        windModal.classList.add('screen_off');;
    });
}