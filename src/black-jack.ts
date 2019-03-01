import Deck from "./cards";

const BET = 10; // ставка в игре
const MAX_POINTS = 21;
const MAX_CARD_PIP = pip(8);  // значение Ace (Туз)
const COMPUTER_LIMIT_POINTS = 16;

function pip(card) {

  const thisPip = Deck.pip(card) + 6;
  switch (thisPip) {
    case 11:
      return 2;
    case 12:
      return 3;
    case 13:
      return 4;
    case 14:
      return 11;
    default:
      return thisPip;
  }
}

function incrementPoints(oldPoints, card) {
  // todo
  const result = oldPoints + pip(card);
  return result > MAX_POINTS ? 0 : result;
}

function getUserPoints(cards) {
  console.log(`Ход пользователя`);
  return getPoints(cards,
      points => points < MAX_POINTS - 1
          && confirm('Берем еще?')); // остановиться на 20-ти очках и не спрашивать далее (21 -1 = 20)
}

function getComputerPoints(cards) {
  console.log('Ход компьютера');
  // todo: взять карты автоматически, посчитать очки на руках компьютерного игрока
  return getPoints(cards, points => points < COMPUTER_LIMIT_POINTS);
}

function getPoints(cards, pointsTest) {
  let points = 0;
  let count = 0;
  do {
    // Взять очередную карту
    const card = cards.pop();
    points = incrementPoints(points, cards.pop());
    console.log(`Взята карта ${Deck.toString(card)}, итоговая сумма очков ${points}`);
    count++;
    // if (points === 0) break; // еще не проиграл
    // if (MAX_POINTS - points >= MAX_CARD_PIP) continue; //   спрашивать или не спрашивать
    // if (!pointsTest(points)) break;
    if (count > 100) break; // чтобы не циклиться бесконечно
  } while (points !== 0
  && (MAX_POINTS - points >= MAX_CARD_PIP
      || pointsTest(points)));

  // todo: Если текущий набор очков меньше 11, то не спрашивать (нет смысла)
  // todo: обнулять очки, если набрали больше 21
  return points;
}

function playTime(count, player1Money, player2Money) {
  const cards = new Deck().shuffle();


  player1Money -= BET;
  player2Money -= BET;

  const userPoints = getUserPoints(cards);
  console.log(`Очки пользователя - ${userPoints}`);

  const computerPoints = getComputerPoints(cards);
  console.log(`Очки компьютера - ${computerPoints}`);

  const delta = userPoints - computerPoints;
  if (delta > 0) {
    player1Money += BET * 2; // Добавляем выигрыши победителю кона
    console.log(`Выиграл пользователь: сумма пользователя = ${player1Money}, сума компьютера = ${player2Money}`);
  } else if (delta < 0) {
    player2Money += BET * 2; // Добавляем выигрыши победителю кона
    console.log(`Выиграл компьютер: сумма пользователя = ${player1Money}, сумма компьютера = ${player2Money}`);
  } else {
    player1Money += BET;
    player2Money += BET;
    console.log(`Выиграла дружба: сумма пользователя = ${player1Money}, сума компьютера = ${player2Money}`);
  }
  return [player1Money, player2Money];
}

/**
 *
 * @param callback
 * @returns {number}
 */
export default function doBlackJack(callback) {

  let player1Money = 100; // счёт игрока 1
  let player2Money = 100; // счёт игрока 1

  let count = 0;
  const handler = () => {
    console.log(`Стартуем кон №${++count}`);
    [player1Money, player2Money] = playTime(count, player1Money, player2Money);
    if (player1Money !== 0 && player2Money !== 0)
      window.setTimeout(handler, 0);
    else
      callback(player1Money - player2Money);
  }
  window.setTimeout(handler, 0);
  // todo: определить победителя и добавить денег победителю, или вернуть равные суммы при ничьей
  return player1Money - player2Money;
}
