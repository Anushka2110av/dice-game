var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImages= "dice" +randomNumber1 + ".png";

var randomImaageSource = "images/" +randomDiceImages; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImaageSource);



var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImaageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImaageSource2);



if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 Wins";
}
else if(randomNumber1<randomImaageSource2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="its a tie"
}