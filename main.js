const rangeUpdateButton = document.querySelector('.range-update');
const submitGuesButton = document.querySelector('.submit-guess');

const minGuess = document.querySelector('.min-range');
const maxGuess = document.querySelector('.max-range');

const minNumber = document.querySelector('.min-num');
const maxNumber = document.querySelector('.max-num');

rangeUpdateButton.addEventListener('click', function () {
  var minimumValue = parseInt(minGuess.value);
  var maximumValue = parseInt(maxGuess.value);
  console.log(minimumValue, maximumValue);
  minNumber.textContent = minimumValue;
  maxNumber.innerHTML = maximumValue;
   
  getRandomNumber(minimumValue, maximumValue);
  console.log(randomNum);
});


submitGuessButton.addEventListener('click', function() {
  var nameChallengerOne = inputChallengerOne.value;
  var nameChallengerTwo = inputChallengerTwo.value;
  var numGuessOne = parseInt(inputGuessOne.value);
  var numGuessTwo = parseInt(inputGuessTwo.value);
  // var displayGuessOne = document.querySelector('.latest-score-guess-1');
  var displayScoreOne = document.querySelector('.latest-score-1'); 
  var displayScoreTwo = document.querySelector('.latest-score-2');
  
  displayScoreOne.textContent = nameChallengerOne;
  displayScoreTwo.textContent = nameChallengerTwo;

  var displayGuessOne = document.querySelector('.latest-score-guess-1'); 
  var displayGuessTwo = document.querySelector('.latest-score-guess-2');
  
  displayGuessOne.textContent = numGuessOne;
  displayGuessTwo.textContent = numGuessTwo;

  guessCounter += 2;
});