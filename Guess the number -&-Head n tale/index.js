
///// Guess the number  /////

// var randomNum = Math.random() * 10;
// var correctNum = Math.floor(randomNum) + 1;
// var userNum = +prompt("Guess the Number between 1 to 10");
// if (userNum === correctNum) {
//     alert("Correct!");
// } else if (userNum === correctNum + 1 || userNum === correctNum - 1) {
//     alert("Almost there! . The Correct Number is : " + correctNum);
// } else {
//     alert("You Lose. The Correct Number is : " + correctNum);
// }


/////// head tale /////
var players = prompt("Enter your name?").toUpperCase()
var input = +prompt( players + " choice head(1) or tale(2) !");
var randomNum = Math.random() * 2;
var correctNum = Math.floor(randomNum) + 1;
if(input === correctNum){
    alert(players + " WOAH! You win");
}else{
    alert(players + " You lost" );
}