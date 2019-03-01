import Deck from "./cards.mjs";

const BET = 10; // ставка в игре
const MAX_POINTS = 21;

function value(card) {
  return; // валет=2, дама=3, король=4, ...
}

function getNewPoints(oldPoints, card) {
  return undefined;
}
function getUserPoints() {
  const points = 0;
  do {
    // Взять очередную карту
  } while(points !== 0
  && points < MAX_POINTS - 1
  && confirm('Берем еще?'));
  // todo: Если текущий набор очков меньше 11, то не спрашивать (нет смысла)
  // todo: обнулять очки, если набрали больше 21
  return points;
}

function getComputerPoints() {
  // todo: взять карты автоматически, посчитать очки на руках компьютерного игрока
  return undefined;
}

export default function doBlackJack() {
  const cards = new Deck().shuffle();
  let player1Money = 100; // счёт игрока 1
  let player2Money = 100; // счёт игрока 1

  let count = 0;

  do {
    console.log(`Стартуем кон №${++count}`);
    player1Money -= BET;
    player2Money -= BET;

    const userPoints = getUserPoints();
    const computerPoints = getComputerPoints();

    // todo: определить победителя и добавить денег победителю, или вернуть равные суммы при ничьей

  } while (player1Money !== 0 && player2Money !== 0);
  return player1Money - player2Money;
}
