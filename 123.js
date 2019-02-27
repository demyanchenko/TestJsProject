//document.writeln("<span>1 2 3 4 5 Вышел зайчик погулять!</span>")

// Вариант JQuery-разработчиков
//const $ = document.querySelector;
//$("body").innerHTML += "<span>1 2 3 4 5 Вышел зайчик погулять!</span>";

//document.querySelector("body").innerHTML += "<span>1 2 3 4 5 Вышел зайчик погулять!</span>";

const htmlSpanElement = document.createElement("span");
htmlSpanElement.appendChild(document.createTextNode("1 2 3 4 5 Вышел зайчик погулять!"));
document.body.appendChild(htmlSpanElement);

// выполнить функцию по окончанию рендеринга страницы. Полезно вместо window.onLoad
addEventListener("DOMContentLoaded", function (evt){
    console.log(123);
})

// Описание в продвинутом стиле, с созданием getter
const x = {
    x: 5,
    y: 8,
    z,
    get a() { return 5},
};
