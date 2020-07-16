// CHANGE: declare variables for all the document selectors!!

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const head = document.getElementById("head");
const resetBtn = document.getElementById("reset");

// CHANGE: declare global variables for player1 and player2 score so you can track it!
let player1 = 6;
let player2 = 6;

// CHANGE: declare global functions!!
function reset() {
  head.innerHTML = "Hit Refresh";
  dice1.setAttribute("src", "images/dice6.png");
  dice2.setAttribute("src", "images/dice6.png");
  player1 = 6;
  player2 = 6;
}
function one() {
  var rdmNumber1 = Math.random();
  rdmNumber1 = Math.floor(rdmNumber1 * 6) + 1;
  var randomImageSource1 = "images/dice" + rdmNumber1 + ".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);
  player1 = rdmNumber1; // CHANGE: update global scores of player 1
  return rdmNumber1; // CHANGE we don't need to return this
}

function two() {
  var rdmNumber2 = Math.random();
  rdmNumber2 = Math.floor(rdmNumber2 * 6) + 1;
  var randomImageSource2 = "images/dice" + rdmNumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);
  player2 = rdmNumber2; // CHANGE: update global scores of player 2
  decideWinner(); // calling this function AFTER updating player2 score variable for obvious reasons
  return rdmNumber2; // CHANGE we don't need to return this
}

resetBtn.addEventListener("click", reset);
dice1.addEventListener("click", one);
dice2.addEventListener("click", two);

/*
Since one() and two() always return a random number so we can't track global scores by calling
them and this is the same reason why we don't need the return value in those functions!

var rdmNumber12 = one(); 
var rdmNumber21 = two(); 
*/

/* CHANGE compare global scores, the earlier method was not working because rdmNumber2 was not
available globally even though the value was returned by the function it was not returning the
"VARIABLE NAME" that should be kept in mind functions return values not the exact variable.... */
function decideWinner() {
  if (player1 > player2) {
    head.innerHTML = "Player 1 Wins!";
  } else if (player1 < player2) {
    head.innerHTML = "Player 2 Wins!";
  } else {
    head.innerHTML = "It's a Draw!";
  }
}
/* Also if this code runs on load (which it will, if it is simply put in the script without in
    a function), everytime it will show "It's a Draw", since both score is 6! 
    we can simply call this function inside function two()
    */
