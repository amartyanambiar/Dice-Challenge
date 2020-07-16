let player1=6;
let player2=6;
document.getElementById("reset").addEventListener("click",
 function reset()
 {
  document.getElementById("head").innerHTML ="Click the die to ROLL";
  document.getElementById("dice1").setAttribute("src","images/dice6.png");
  document.getElementById("dice2").setAttribute("src","images/dice6.png");
});

document.getElementById("dice1").addEventListener("click",function one()
 {
   var rdmNumber1 = Math.random();
rdmNumber1=Math.floor(rdmNumber1*6)+1;
var randomImageSource1 = "images/dice"+rdmNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
player1=rdmNumber1;
});
document.getElementById("dice2").addEventListener("click",function two()
 {
   var rdmNumber2 = Math.random();
rdmNumber2=Math.floor(rdmNumber2*6)+1;
var randomImageSource2 = "images/dice"+rdmNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
decideWinner();
player2=rdmNumber2;
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
