const question = confirm('Do you want to play a game?');

let yourAttempts = 3;
let totalPrize = 0;
let maxPrize = 100;
let theValue = 8;
let happyNumber = Math.floor(Math.random() * (theValue+1));

!question ? alert('You did not become a billionaire, but can.')
  : theCassino(maxPrize);

function theCassino(prize) {
  const maxPossiblePrize = prize;
  let yourNumber;
  while (yourAttempts !== 0) {
    yourNumber = +prompt(`
      Choose a roulette pocket number from 0 to ${theValue}
      yourAttempts left: ${yourAttempts}
      Total prize: ${totalPrize}$
      Possible prize on current attempt: ${prize}$ `);

    if (isNaN(yourNumber) || yourNumber < 0 || yourNumber > theValue) {
            alert(
                `It is not a roulette pocket number from 0 to ${theValue}`);
    } else if (yourNumber === happyNumber) {
      break;
    }

    prize = prize / 2;
    yourAttempts--;
  }
  if (yourNumber === happyNumber) {
    totalPrize = totalPrize + prize;
    const wantContinue = confirm(
      `Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`
    );
    if (wantContinue) {
      yourAttempts = 3;
      theValue += 4; 
      happyNumber = Math.floor(Math.random() * theValue);
      theCassino(maxPossiblePrize * 2);
    } else {
      youAreLose();
    }
  } else {
    youAreLose();
  }
}

function youAreLose() {
  alert(`Thank you for your participation. Your prize is: 0$`);
  const playAgain = confirm('Do you want to play again?');
  if (playAgain) {
    yourAttempts = 3;
    maxPrize = 100;
    happyNumber = Math.floor(Math.random() * (theValue+1));
    theCassino(maxPrize);
  } else {
    alert('You did not become a billionaire, but can.'); 
  }
}
