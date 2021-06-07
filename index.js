/*here we use Math.random() to pick the number from 0 - 0.9999 by multiply with 6 we will get number from 
0-5 and by adding +1 we will get numbers from 1-6 and Math.floor() is used to round figure the decimal number*/
var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomImage = "dice" + randomNumber1 +".png"; // images dice1.png - dice6.png

var randomDiceImage = "images/" + randomImage; //images/dice1.png - dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() *6)+1;

var randomImage2= "dice" + randomNumber2 +".png";

var randomDiceImage2 = "images/"+ randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins"
}
else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 wins 🚩";
    }
else{
    document.querySelector("h1").innerHTML="🏳️ Draw";
}
