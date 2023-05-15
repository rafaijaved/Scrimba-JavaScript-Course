let card1 = 11;
let card2 = 5;
let sum = card1 + card2;
let distributerEl = document.getElementById("distributer");
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let message = "";
let won = true;
let lost = false;

function startGame() {
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want another card?";
    won = false;
  } else if (sum === 21) {
    message = "You won Black Jack";
  } else {
    message = "You Lost";
    won = false;
    lost = true;
  }

  distributerEl.textContent = message;

  cardsEl.textContent = "Cards: " + card1 + " " + card2;
  sumEl.textContent = "Sum: " + sum;
}

function addCard() {
  let newCard = 5;
  sum += newCard;
  renderGame();
}
