const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
let word = prompt ('provide a word');
let hangman = ['H','A','N','G','M','A','N'];
let wordUpper = word.toUpperCase();
let wordLetters = wordUpper.split("");
let position = '';
let correctGuesses = [];
let incorrectGuesses = [];

for (i = 0; i < wordLetters.length; i++){    
  correctGuesses.push('_');
};


document.querySelector('h2').innerHTML = correctGuesses.join(' ');
alert (`The word you must guess has ${word.length} letters`);


addItemButton.addEventListener('click', () => {
    let guess = document.getElementById('guess').value;
    let guessUpper = guess.toUpperCase();
    if (wordLetters.includes(guessUpper)){
      for (let i = 0; i <= wordLetters.length; i++){
        if (wordLetters[i] == guessUpper){
        position = wordLetters.indexOf(guessUpper);
        wordLetters.splice(position,1,'!');
        correctGuesses.splice(position,1, guessUpper);
        } else {
        }
      };   
        if (!correctGuesses.includes('_')){
           document.querySelector('h2').innerHTML = correctGuesses.join(' ');
           alert ('You win!');
           addItemInput.value = '';
        } else {
          alert ("That's right!");
          document.querySelector('h2').innerHTML = correctGuesses.join(' ');
          addItemInput.value = '';
        }
    } else {
      incorrectGuesses.push(guessUpper);
      alert ("Bummer, that's not right!");
      let element = document.getElementById('hangman');
      let letter = document.createElement('li');
      letter.textContent = hangman[0];
      element.appendChild(letter);
      let ul = document.getElementById('incorrect');
      let li = document.createElement('li');
      li.textContent = addItemInput.value;
      ul.appendChild(li);
      hangman.shift();
      addItemInput.value = '';
      if (incorrectGuesses.length >= 7){
           alert ('You lose!');
        } else {
           alert ('Keep trying');
    }
    }
    });
