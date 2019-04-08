var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
document.querySelector(".first-player img").setAttribute("src", "images/" + randomNumber1 + ".png");

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
document.querySelector(".second-player img").setAttribute("src", "images/" + randomNumber2 + ".png");

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "<img src='images/flag.png' alt=''> Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins <img src='images/flag.png' alt=''>";
}
