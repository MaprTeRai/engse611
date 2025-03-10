const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

let playerScore = 0;
let computerScore = 0;
let freeBoxes = [];
let takenBoxes = {};

const grid = document.getElementById('grid');
const results = document.getElementById('results');

// Create the grid dynamically
function createGrid() {
  for (let i = 0; i < 9; i++) {
    const box = document.createElement('div');
    box.dataset.index = i;
    box.addEventListener('click', changeToX);
    grid.appendChild(box);
  }
}

function updateScore() {
  results.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function assignSpace(space, owner) {
  const image = document.createElement('img');
  image.src = owner === 'x' ? X_IMAGE_URL : O_IMAGE_URL;
  image.style.filter = owner === 'x' ? 'invert(22%) sepia(95%) saturate(2053%) hue-rotate(195deg) brightness(97%) contrast(94%)' 
                                     : 'invert(24%) sepia(98%) saturate(2201%) hue-rotate(349deg) brightness(100%) contrast(105%)';
  space.appendChild(image);

  const index = parseInt(space.dataset.index);
  takenBoxes[index] = owner;
  freeBoxes = freeBoxes.filter((box) => box !== space);
  space.removeEventListener('click', changeToX);

  if (isGameOver()) {
    displayWinner();
  } else if (owner === 'x') {
    setTimeout(computerChooseO, 500);
  }
}

function changeToX(event) {
  assignSpace(event.currentTarget, 'x');
}

function computerChooseO() {
  if (freeBoxes.length === 0) return;
  const index = Math.floor(Math.random() * freeBoxes.length);
  assignSpace(freeBoxes[index], 'o');
}

function isGameOver() {
  return freeBoxes.length === 0 || getWinner() !== null;
}

function displayWinner() {
  const winner = getWinner();
  let message = 'It\'s a tie!';
  
  if (winner === 'x') {
    message = 'You win!';
    playerScore++;
  } else if (winner === 'o') {
    message = 'Computer wins!';
    computerScore++;
  }

  updateScore();
  setTimeout(() => {
    alert(message);
    resetGame();
  }, 500);
}

function checkBoxes(one, two, three) {
  return (takenBoxes[one] && takenBoxes[one] === takenBoxes[two] && takenBoxes[two] === takenBoxes[three])
    ? takenBoxes[one]
    : null;
}

function getWinner() {
  for (let i = 0; i < 3; i++) {
    if (checkBoxes(i * 3, i * 3 + 1, i * 3 + 2) || checkBoxes(i, i + 3, i + 6)) {
      return takenBoxes[i * 3] || takenBoxes[i];
    }
  }
  return checkBoxes(0, 4, 8) || checkBoxes(2, 4, 6);
}

function resetGame() {
  takenBoxes = {};
  freeBoxes = Array.from(document.querySelectorAll('#grid div'));

  freeBoxes.forEach((box) => {
    box.innerHTML = '';
    box.addEventListener('click', changeToX);
  });
}

createGrid();
resetGame();
updateScore();
