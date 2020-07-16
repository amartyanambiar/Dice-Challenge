document.getElementById("reset").addEventListener("click", function reset() {
  document.getElementById("head").innerHTML = "Click the die to ROLL";
  document.getElementById("dice1").setAttribute("src", "images/dice6.png");
  document.getElementById("dice2").setAttribute("src", "images/dice6.png");
});

document.getElementById("dice1").addEventListener("click", function one() {
  var rdmNumber1 = Math.random();
  rdmNumber1 = Math.floor(rdmNumber1 * 6) + 1;
  var randomImageSource1 = "images/dice" + rdmNumber1 + ".png";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);
  return rdmNumber1;
});
document.getElementById("dice2").addEventListener("click", function two() {
  var rdmNumber2 = Math.random();
  rdmNumber2 = Math.floor(rdmNumber2 * 6) + 1;
  var randomImageSource2 = "images/dice" + rdmNumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);
  return rdmNumber2;
});
var rdmNumber12 = one();
var rdmNumber21 = two();
if (rdmNumber12 > rdmNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (rdmNumber2 > rdmNumber12) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
