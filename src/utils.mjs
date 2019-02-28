const $ = document.querySelector;

export function add2Document(s) {
  // Вариант JQuery-разработчиков
  $('body').innerHTML += `<span>${s}</span>`;

  // const htmlSpanElement = document.createElement("span");
  // htmlSpanElement.appendChild(document.createTextNode("1 2 3 4 5 Вышел зайчик погулять!"));
  // document.body.appendChild(htmlSpanElement);
}

export function shuffle(array) {
  array = Array.prototype.slice.call(array, 0);
  let i = array.length;
  if (i !== 0)
    while (--i) {
      let j = Math.floor(Math.random() * (i + 1));
      // temp = array[i];
      // array[i] = array[j];
      // array[j] = temp;
      // пример, как заменить вышестоящий код в одну строку
       [array[i], array[j]] = [array[j], array[i]];
    }
  return array;
}
