let player1=6;
let player2=6;
document.getElementById("reset").addEventListener("click",
 function reset()
 {
  document.getElementById("head").innerHTML ="Click the die to ROLL";
  document.getElementById("dice1").setAttribute("src","images/dice6.png");
  document.getElementById("dice2").setAttribute("src","images/dice6.png");
  player1=6;
  player2=6;
});

document.getElementById("dice1").addEventListener("click",function one()
 {
   var number1 = Math.random();
number1=Math.floor(number1*6)+1;
var randomImageSource1 = "images/dice"+number1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
player1=number1;
});
document.getElementById("dice2").addEventListener("click",function two()
 {
   var number2 = Math.random();
number2=Math.floor(number2*6)+1;
var randomImageSource2 = "images/dice"+number2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
player2=number2;
decideWinner();
});

function decideWinner(){
if (player1>player2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (player1<player2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
}
