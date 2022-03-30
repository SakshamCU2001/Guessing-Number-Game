let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio=new Audio('./audio/sound.mp3');

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  ////console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};
//startnewgame
const startnewgame=()=>{
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);

}
// relaod the page

const newGameBegin=()=>{
    audio.play();
    window.location.reload();
}


// start new game


const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;
  
    // check the value low or high
  
    if (userGuess.length < maxGuess) {
      if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is High 😲";
        userNumberUpdate.value = "";
      } else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = "Your guess is Low 😌";
        userNumberUpdate.value = "";
      } else {
        userGuessUpdate.innerHTML = "It's Correct 😀";
        userNumberUpdate.value = "";
        startnewgame();
       
      }
    } else {
      if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startnewgame();
  
      } else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startnewgame();
       
      } else {
        userGuessUpdate.innerHTML = "It's Correct 😀";
        userNumberUpdate.value = "";
        startnewgame();
      
      }
    }
  
    document.getElementById("attempts").innerHTML = userGuess.length;
  };
  
  const easyMode = () => {
 audio.play();
    maxGuess = 10;
    startGame();
  };
  
  const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
  };