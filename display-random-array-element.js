//This program displays a random element from the movies array when the button is clicked on the web page.
//The button needs to be configured into the html file as well.

let movies = ['Diehard', 'A Christmas Story', 'Home Alone', 'Elf', "National Lampoon's: Christmas Vacation"]
let random = '';
let html = '';

myButton.addEventListener('click', () => {
  random = Math.floor(Math.random() * movies.length);
  html = `<h1>And the winner is...${movies[random]}!</h1>`;
  console.log (random);
  document.querySelector('main').innerHTML = html;
  movies.splice(random, 1);
});
