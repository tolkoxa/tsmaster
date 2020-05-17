'use strict';

//Карусель верхнего модуля
//помечаем код для удобства
let i = 1;
for (let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', '<span style="position:absolute;left:0;top:0">${i}</span>');
    i++
}

//конфигурация
let width = 1520; //ширина картинки верхнего блолка
let count = 1; //видимое количество картинок верхнего блока
let numberImg = 5; //количество картинок верхнего блока
let numPoint = 0; //текущая картинка, точка верхнего блока

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; //положение прокрутки

//сдвиг в лево Размеры зависят от картинок в верстке
carousel.querySelector('.prev').onclick = function() {

    position += width * count;
    if (position > 0) position = -1 * (width * (numberImg - 1)); //строка возвращает на начало списка

    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px'; //обращение у стилю тэга ul    

    numPoint--; //данные для точек
    if (numPoint < 0) numPoint = numberImg - 1;
    pointActive(numPoint);
};

//сдвиг в право Размеры зависят от картинок в верстке
carousel.querySelector('.next').onclick = function() {

    position -= width * count;
    if (position <= -1 * (width * numberImg)) position = 0; // строка перемещает на конец списка

    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px'; //обращение у стилю тэга ul


    numPoint++; //данные для точек
    if (numPoint > 4) numPoint = 0;
    pointActive(numPoint);
};
//Делаем зависимость точек
let point = points.querySelectorAll('a');

function pointActive(num) {
    point.forEach(elem => {
        elem.classList.remove('slider__point_active');
    });
    point[num].classList.add('slider__point_active');
};