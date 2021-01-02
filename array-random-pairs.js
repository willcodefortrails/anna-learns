//This program creates random pairs of the elements in multiple arrays. 
//The application for this specific example is randomly pairing New Year's resolutions with lengths of time for rach resolution.

//The arrays below contain short/long term resolutions and short/long term time frames that need to be randomly paired.

let timelinesShort = ['1 month', '6 weeks', '3 months']
let resolutionsShort = ['Go for a walk every day', 'Write a letter to a friend every week', "Don't buy anything you don't need"]
let timelinesLong = ['6 months', '9 months', '1 year']
let resolutionsLong = ['Eat 3 vegan meals a week', 'Call someone you love once a week', 'Read a new book every month']

//The function below is a slight variation to Durstenfeld's shuffling algorithm.
//This has been modified to accept two arrays so we can shuffle both the timelines & resolutions arrays above with one function call.
//The Durstenfeld shuffling algorithm selects a random element of an array, swaps it with the last element of the array, then repeats with another random selection from the remaining elements.

function shuffle (arr1, arr2){
    for (let i = arr1.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (arr1.length));
        const y = Math.floor(Math.random() * (arr2.length));
        [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
        [arr2[i], arr2[y]] = [arr2[y], arr2[i]];
    }
}


//the function below organizes the timelines and resolutions from the random arrays into a list of pairs.

function createList(arr1, arr2){
 let items = '';
  for(i = 0; i < arr1.length; i++){
   items += `<li>${arr1[i]} for ${arr2[i]}</.li>`; 
  }
  return items
};

 shuffle (resolutionsShort, timelinesShort);
 shuffle (resolutionsLong, timelinesLong);
 
 //the html string below uses template literals to call the createList function by passing the shuffled resolutions and timelines arrays to it.

document.querySelector('main').innerHTML = `<h2>Here are your short term resolutions:</h2><ol>${createList(resolutionsShort, timelinesShort)}</ol><h2>Here are your long term resolutions:</h2><ol>${createList(resolutionsLong, timelinesLong)}</ol>`;
