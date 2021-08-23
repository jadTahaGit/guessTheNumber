'use strict';

//Listen to The Event //Calls the function on click:
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

//To Avoid Repetition:
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Without Input
  if (!guess) {
    displayMessage('⛔️ No Number!');
  }
  //Out of Range
  else if (guess > 20 || guess < 1) {
    displayMessage('Give A Number between 1 & 20⚠️');
  }

  //When the player Wins:
  else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#3cff00';
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🐋 Correct Number!');
    document.querySelector('.number').style.width = '30rep';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // False Number:
  else {
    // document.querySelector('.score').textContent -= 1;
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage('❌ False Guess!');

    if (score === 0) {
      displayMessage('🤷‍♂️ You Lost the game!');
      score = 20;
      alert('Game Over');
    } else if (guess > secretNumber) {
      displayMessage('To High!  📉 ');
    } else {
      displayMessage('To Low! 📈');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Restore the intial value of the Score (20)
  document.querySelector('.score').textContent = 20;
  //Restore the intial value of the secretNumber
  document.querySelector('.number').textContent = '?';
  //Restore the intial value of the message:
  displayMessage('Start guessing...');
  // Restore the input:
  document.querySelector('.guess').value = '';
  // Restore the intial Color:
  document.querySelector('body').style.backgroundColor = '#222';
  // Restore the width:
  document.querySelector('.number').style.width = '15rem';
});
