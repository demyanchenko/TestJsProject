import Deck from './cards.ts'

function compare(player1Card, player2Card) {
  const number = Deck.pip(player1Card) - Deck.pip(player2Card);
  // меняем знак результата, если сошлись "туз" и "6"
  return Math.abs(number) === 8 ? -number : number;
// return (valuePlayer1Card === 0 && valuePlayer2Card === 8) || valuePlayer1Card > valuePlayer2Card;
}

export default function doDrunkard() {
  const {player1Cards, player2Cards} = new Deck().upkeep();

  let winner;
  let count = 0;
  do {
    count++;
    const player1Card = player1Cards.pop();
    const player2Card = player2Cards.pop();

    console.log(`Игрок №1 извлек карту ${Deck.toString(player1Card)}`);
    console.log(`Игрок №2 извлек карту ${Deck.toString(player2Card)}`);


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
          && count >= 100)
      );
  console.log(`Общее кол-во конов = ${count}`);
  return winner;
}
