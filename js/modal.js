'use strict'

//вызов модальных окон

let telephone = document.querySelector('.tel__btn');//кнопка - заказать звонок
let call = document.querySelector('.cause'); // кнопка - вызвать мастера
let sub_wind = document.querySelector('.substrate'); // окно - заказать звонок, подложка
let windPhone = document.querySelector('.modal_phone');// окно - заказать звонок
let crossBtn = document.querySelector('.cross');
let sub_wind1 = document.querySelector('.substrate1');
let windCause = document.querySelector('.modal_cause');
let crossBtn1 = document.querySelector('.cross1');

//вызов - заказать звонок
telephone.addEventListener('click', () => {
    sub_wind.classList.remove('screen_off');
    windPhone.classList.remove('screen_off');
});
crossBtn.addEventListener('click', () => {
    sub_wind.classList.add('screen_off');
    windPhone.classList.add('screen_off');
});
sub_wind.addEventListener('click', () => {
    sub_wind.classList.add('screen_off');
    windPhone.classList.add('screen_off');
});

//вызов - вызов мастера
call.addEventListener('click', () => {
    sub_wind1.classList.remove('screen_off');
    windCause.classList.remove('screen_off');
});
crossBtn1.addEventListener('click', () => {
    sub_wind1.classList.add('screen_off');
    windCause.classList.add('screen_off');
});
sub_wind1.addEventListener('click', () => {
    sub_wind1.classList.add('screen_off');
    windCause.classList.add('screen_off');
});