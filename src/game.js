const BARREL_ITEMS = 7;
const VELOCITY = 10;

function rotateBarrel(index, force) {
  // todo: realize it!
  //  Готово.
  const stopPosition = ((index * force * VELOCITY) % BARREL_ITEMS) + 1;
  return stopPosition;
}

export default function readyStedyGo() {
  console.log('Начали игру!');
  const force = Math.round(Math.random() * 100);
  const barrel1 = rotateBarrel(1, force);
  const barrel2 = rotateBarrel(2, force);
  const barrel3 = rotateBarrel(3, force);

  if (barrel1 === barrel2 && barrel2 === barrel3) {
    console.log('Вы выиграли');
  } else {
    console.log('Вы проиграли!');
  }
  return 'Результат игры смотри в логах!';
}
