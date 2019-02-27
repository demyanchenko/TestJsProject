// document.writeln("<span>1 2 3 4 5 Вышел зайчик погулять!</span>")

// Вариант JQuery-разработчиков
// const $ = document.querySelector;
// $("body").innerHTML += "<span>1 2 3 4 5 Вышел зайчик погулять!</span>";

import insert2Body from './utils';

const { a: a1, b: { q }, c } = { a: 1, b: { q: 6, w: 9 }, c: 3 };

console.log(a1);
console.log(c);
console.log(q);

insert2Body('1 2 3 4 5 Вышел зайчик погулять!;');

// выполнить функцию по окончанию рендеринга страницы. Полезно вместо window.onLoad
/* addEventListener("DOMContentLoaded", function (evt){
    console.log(123);
})
*/

const z = 56;
// Описание в продвинутом стиле, с созданием getter
const x = {
  x: 5,
  y: 8,
  z,
  get a() {
    return 5;
  },
};

console.log(x);
// ввел x.log и нажал TAB или Enter, выполняется преобразование
