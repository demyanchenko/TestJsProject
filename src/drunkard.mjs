import {shuffle} from './utils.mjs';

// Мешатель колоды из Utils
Array.prototype.shuffle = function () {
  return shuffle(this);
}

const cards = [
  0, 1, 2, 3, 4, 5, 6, 7, 8,            // бубны
  9, 10, 11, 12, 13, 14, 15, 16, 17,    // червы
  18, 19, 20, 21, 22, 23, 24, 25, 26,   // трефы (крести)
  27, 28, 29, 30, 31, 32, 33, 34, 35];  // пики

const COUNT_CARDS = 9;

// Значение карты
function value(card) {
  return card % COUNT_CARDS;
}

function worth(card) {
  switch (value(card)) {
    case 0:
      return 6;
    case 1:
      return 7;
    case 2:
      return 8;
    case 3:
      return 9;
    case 4:
      return 10;
    case 5:
      return 'Jack';
    case 6:
      return 'Qeen';
    case 7:
      return 'King';
    case 8:
    default:
      return 'Ace';

  }
}

// Масть. Для игры не нужно, а просто для информативности в консоль.
// "diamonds" - бубы
// "heards" - червы
// "clubs"  - трефы
// "spades" - пики
const suits = ['#diamonds', '#heards', '#clubs', '#spades'];

function suit(card) {
  return suits[Math.floor(card / COUNT_CARDS)];
}

function toString(card) {
  return `${worth(card)} ${suit(card)}`;
}

function compare(player1Card, player2Card) {
  const number = value(player1Card) - value(player2Card);
  // меняем знак результата, если сошлись "туз" и "6"
  return Math.abs(number) === 8 ? -number : number;
// return (valuePlayer1Card === 0 && valuePlayer2Card === 8) || valuePlayer1Card > valuePlayer2Card;
}

export default function doDrunkard() {
  const shuffledCards = cards.shuffle();

  const {length} = shuffledCards; // вытащили значение через деструктуризатор
  const player1Cards = shuffledCards.slice(0, length / 2);
  const player2Cards = shuffledCards.slice(length / 2);

  let winner;
  let count = 0;
  do {
    count++;
    const player1Card = player1Cards.pop();
    const player2Card = player2Cards.pop();

    console.log(`Игрок №1 извлек карту ${toString(player1Card)}`);
    console.log(`Игрок №2 извлек карту ${toString(player2Card)}`);


    const compareResult = compare(player1Card, player2Card);
    if (compareResult > 0) {
      player1Cards.unshift(player1Card);
      player1Cards.unshift(player2Card);
      winner = 1;
      console.log('Кон выиграл Игрок №1');
    } else if (compareResult < 0) {
      player2Cards.unshift(player1Card);
      player2Cards.unshift(player2Card);
      winner = 2;
      console.log('Кон выиграл Игрок №2');
    } else {
      player1Cards.unshift(player1Card);
      player2Cards.unshift(player2Card);
      console.log('Кон выиграла дружба!');
    }
    console.log(`У Игрока №1 ${player1Cards.length} карт, а у Игрока №2 ${player2Cards.length} карт,`);
    console.log(player1Cards);
    console.log(player2Cards);
  } while (
      !(player1Cards.length !== 0
          && player2Cards.length !== 0
          && count > 1000)
      );
  return winner;
}


