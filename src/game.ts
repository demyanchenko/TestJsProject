const BARREL_ITEMS = 7;
const VELOCITY = 10;

function rotateBarrel(index, force) {
  // todo: realize it!
  //  Готово.
  return VELOCITY * index * force % BARREL_ITEMS;
}

export default function readyStedyGo() {
  console.log('Начали игру!');
  const force = Math.round(Math.random() * 100);
  const barrel1 = rotateBarrel(1, force);
  const barrel2 = rotateBarrel(2, force);
  const barrel3 = rotateBarrel(3, force);
  console.log(barrel1, barrel2, barrel3);

  return barrel1 === barrel2 && barrel2 === barrel3;
}

/*// Запускаем игру Казино
console.log('Результат игры смотри в логах!');
console.log(readyStedyGo() ? 'Вы выиграли' : 'Вы проиграли!');*/
