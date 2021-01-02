//This program prompts the user for input, and makes a selection from the object winterActivities based on that input, using an if statement. It then displays the selection on the web page.

const winterActivities = [
  {
   name: 'hike at the coast',
   gear: ['hiking boots', 'rain coat', 'baselayers', 'warm socks', 'hat'],
   travelTime: '1 hr 30 min',
   minTemp: 45,
   weather: ['sunny', 'cloudy']
  },
  {
   name: 'hike in the mountains',
   gear: ['hiking boots', 'winter coat', 'baselayers', 'warm socks', 'hats & gloves'],
   travelTime: '1 hr 30 min',
   minTemp: 30,
   weather: ['sunny', 'cloudy', 'light snow']
  },
  {
   name: 'go skiing',
   gear: ['skis', 'winter coat', 'snow pants', 'helmet', 'googles', 'poles', 'snowboard', 'boots', 'baselayers', 'warm socks', 'hats & gloves'],
   travelTime: '1 hr 30 min',
   minTemp: 15,
   weather: ['sunny', 'cloudy', 'snowy']
  },
  {
   name: 'stay in, order takeout & chill',
   gear: ['sweatpants', 'comfy socks'],
   travelTime: '0',
   minTemp: 0,
   weather: ['rainy', 'icy']
  }
]

let weatherResponse = prompt ("Is the weather, snowy, sunny, cloudy, icy or rainy?");
let tempInt = parseInt (prompt ("What's the temperature outside?"));

weatherTemp = [weatherResponse, tempInt];

function findCommonElements(arr1, arr2){
  return arr1.some(item => arr2.includes(item))
}
let html = ''

if (findCommonElements(weatherTemp, winterActivities[0].weather) && tempInt >= winterActivities[0].minTemp){
  html = `<p>It's ${weatherResponse} and ${tempInt} degrees outside. You should ${winterActivities[0].name}. For this, you'll need: ${winterActivities[0].gear.join(', ')}.</p>`;
} else if (findCommonElements(weatherTemp, winterActivities[1].weather) && tempInt >= winterActivities[1].minTemp){
   html = `<p> It's ${weatherResponse} and ${tempInt} degrees outside. You should ${winterActivities[1].name}. For this, you'll need: ${winterActivities[1].gear.join(', ')}.</p>`;
} else if (findCommonElements(weatherTemp, winterActivities[2].weather)&& tempInt >= winterActivities[2].minTemp){
   html = `<p>It's ${weatherResponse} and ${tempInt} degrees outside. You should ${winterActivities[2].name}. For this, you'll need: ${winterActivities[2].gear.join(', ')}.</p>`;
} else if (findCommonElements(weatherTemp, winterActivities[3].weather) && tempInt >= winterActivities[3].minTemp){
   html = `<p>It's ${weatherResponse} and ${tempInt} degrees outside. You should ${winterActivities[3].name}. For this, you'll need: ${winterActivities[3].gear.join(', ')}.</p>`;
} else {
  console.log ("Looks like there's not much to do!");
}

document.querySelector('main').innerHTML = html
