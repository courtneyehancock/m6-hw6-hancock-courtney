//attach some functionality to button to have some transition over the course of a few seconds

var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];

//create place where random lunch item is going to appear on the screen
var ourRandomLunchItem = document.createElement('p');
var lunchItemWrapper = document.getElementById('generator-results');
lunchItemWrapper.appendChild(ourRandomLunchItem);

var placeholderText = document.createTextNode('');
ourRandomLunchItem.appendChild(placeholderText);

var lunchItems = ['Mexican Food', 'Sushi', 'Chicken Wings', 'Pizza', 'Greek Food', 'Subs or Sandwhiches'];


var myFunction = function() {
  lunchItems.sort(function(a, b){return 0.5 - Math.random()});
  //from reading to practice sorting an array in random order

  var ourRandomLunchItemFiller = document.createTextNode(lunchItems[0]);
  ourRandomLunchItem.appendChild(ourRandomLunchItemFiller);
  var ourButtonSection = document.getElementById('generator-button');
  //only want this to occur inside of our function.

  ourButtonSection.removeChild(button);
  //Makes button disappear

  ourRandomLunchItem.classList.add('big-and-bold');
  //Creates animation when word is generated
};

button.onclick = myFunction;
//eventHandler - listen for when button is clicked
