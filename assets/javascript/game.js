var wordList = ["canada", "china", "mexico", "russia","england"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];
var word = wordList[Math.floor(Math.random() * wordList.length)];
var wordLetters = word.split('');
var wordOnPage = [];

function reset() {
  guessesLeft = 10;
  userGuesses = [];
  word = wordList[Math.floor(Math.random() * wordList.length)];
};

function populateBlanks() {
  for (var i = 0; i < word.length; i++) {
    wordOnPage[i] = " _";
  }
};

document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  if (wordLetters.indexOf(userGuess) > -1) {
    for (var i = 0; i < wordLetters.length; i++) {
      if (wordLetters[i] == userGuess) {
        wordOnPage[i] = (' ' + userGuess);
      }
    }
  } else if (userGuesses.indexOf(userGuess) > -1) {
    //do nothing (don't subtract a guess left or push to userGuesses array)
  } else {
    guessesLeft--;
    userGuesses.push(" " + userGuess);
  }
  // what to do if a loss occurs
  if (userGuesses.length >= 10) {
    losses++;
    reset();
  }
// if statement for win/loss?
// display what the word was if game is a loss, pick new word, adjust numbers (wins, losses, guessesLeft, userGuesses)
// try using separate arrays for different difficulty setting (more, harder words as difficulty progresses)

  document.querySelector('#currentWord').innerHTML = wordOnPage.join('').split(',').join('');
  document.querySelector('#numGuesses').innerHTML = guessesLeft;
  document.querySelector('#letterGuesses').innerHTML = userGuesses;
  document.querySelector('#losses').innerHTML = losses;
  document.querySelector('#wins').innerHTML = wins;
}

reset();
populateBlanks();
document.querySelector('#currentWord').innerHTML = wordOnPage.join('').split(',').join('');
