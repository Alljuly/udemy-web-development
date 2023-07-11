let diceP1 = Math.floor(Math.random() * 6) + 1 ;

let randomP1 = "./images/dice" +diceP1+".png";

let diceP2 = Math.floor(Math.random() * 6) + 1;

let randomP2 = "./images/dice" +diceP2+".png";


document.querySelector(".img1").setAttribute("src", randomP1)


document.querySelector(".img2").setAttribute("src", randomP2)

if(diceP1 > diceP2){
    document.querySelector("h1").innerText = "Player 1 wins"
} else if(diceP1 < diceP2){
    document.querySelector("h1").innerText = "Player 2 wins"
} else if( diceP1 == diceP2){
    document.querySelector("h1").innerText = "Draw!"

}