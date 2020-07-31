const $submitbutton = document.getElementById("submit");
const $massage = document.getElementById("massage");
const $lives = document.getElementById("lives");

var guessNumber = Math.random() * 100;
var lives = 10;

$submitbutton.onclick = () => {
    let userInput = document.getElementById("number-input").value;
    lives--;
    if (userInput == guessNumber) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./lose.html";
    } else if (userInput > guessNumber) {
        massage = `oops! your guess is too high, you have ${lives} lives remaining `;
    } else if (userInput < guessNumber) {
        massage = `oops! your guess is too low, you have ${lives} lives remaining `;
    }
    $massage.style.display = "inherit";
    $massage.innerHTML = massage;
    $lives.innerHTML = lives;
};