const $ = document.querySelector;

export default function insert2Body(s) {
  // Вариант JQuery-разработчиков
  $('body').innerHTML += `<span>${s}</span>`;

  // const htmlSpanElement = document.createElement("span");
  // htmlSpanElement.appendChild(document.createTextNode("1 2 3 4 5 Вышел зайчик погулять!"));
  // document.body.appendChild(htmlSpanElement);
}
