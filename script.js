'use strict'

var userName = prompt('What is your name?')
alert ('Nice to meet you, ' + userName + '! I am Julia.')
console.log('The user\'s name is ' + userName)

var score = 0;
var wrongAnswer = 0;



function guessAge(){
  var myAge = prompt('Am I 30 years old?').toLowerCase()
  if (myAge == 'no' || myAge == 'n') {
  score += 1;
  alert ('That\'s right. I turned 25 a month ago. :)')
  } else if (myAge == 'yes' || myAge == 'y') {
  wrongAnswer += 1;
  alert ('I guess I look bad. LOL. I am 25 years old.')
   } else {
  alert ('You had to type YES or NO')
 }
}
guessAge()

function guessHometown (){
var placeOfBirth = prompt('Am I from Belarus?').toLowerCase()
if (placeOfBirth == 'yes' || placeOfBirth == 'y') {
  score += 1;
  alert ('Wow! It looks like you know a lot of about me :) That\'s right!')
} else if (placeOfBirth == 'no' || placeOfBirth == 'n'){
  wrongAnswer += 1;
  alert ('Unfortunatly that\'s wrong. I am from Belarus.')
} else {
  alert ('You had to type YES or NO')
};
}
guessHometown()


function guessCity (){
var currentCity = prompt('Do I live in NYC now?').toLowerCase()
if (currentCity == 'yes' || currentCity == 'y') {
   wrongAnswer += 1;
  alert ('That is wrong! 3 months ago I moved to Seattle from NYC.')
} else if (currentCity == 'no' || currentCity == 'n') {
   score += 1;
  alert ('That is right! I live in Seattle now.')
} else {

  alert ('You had to type YES or NO')
};
}
guessCity()

 
function guessFamily (){
var familyQuestion = prompt('Do I live in USA with my family?').toLowerCase()
if (familyQuestion == 'yes' || familyQuestion == 'y') {
   wrongAnswer += 1;
  alert ('Incorrect. I would like, but it is not possible now.')
} else if (familyQuestion == 'no' || familyQuestion == 'n'){
  score += 1;
  alert ('Correct! My family live in Belarus.')
} else {
  alert ('You had to type YES or NO')
};
}
guessFamily()



function guessState (){ 
var favoriteState = prompt('Is my favorite state South Dakota?').toLowerCase()
if (favoriteState == 'yes' || favoriteState == 'y') {
  wrongAnswer += 1;
  alert ('That\'s wrong! Unfortunatly I have neven been there.')
} else if (favoriteState == 'no' || favoriteState == 'n') {
  score += 1;
  alert ('To be honest I cannot pick just one. My favorite states are California, Washington and Hawaii.')
}else {
  alert ('You had to type YES or NO')
};
}
guessState()


var numberOfGuesses = 4;

function guessStatesVisited () {
for (let i = 0; i < numberOfGuesses; i++) {
  var response = prompt('How many states did I visit? Please enter a number from 1 to 50: ')
  var correctAnswer = 36;
  if (response == correctAnswer) {
    alert('Correct! I visited 36 states.');
    score += 1;
    break;
  } 
  else if (response <= 20 && response > 0) {
    alert('Sorry! That\'s too low! Hint: More than 20');
  } else if (response > 20 && response < 36) {
    alert('You are almost there. A little bit more.');
  }else if (response > 39 && response <= 50) {
    alert ('That\'s too high!');
  } else if (response < 40 && response > 36) {
    alert ('Sorry! A little bit high. ');
  } else{
    alert('You entered a wrong number')
  }
  if (i === 3){
    alert('Sorry! It was the last try. Right answer was 36.')
  }
}
}
guessStatesVisited ()

 
var arrayOfCities = ['MINSK', 'VILNIUS', 'MOSCOW', 'NEW YORK', 'BERLIN']
let tries;
function guessCities(){
 outer_loop:
 for (let tries = 5; tries >= 0; tries--) { 
   var nameCity = prompt('Please name at least 1 city where I lived: ').toUpperCase()
   for (let i = 0; i < arrayOfCities.length; i++) {
     if (nameCity == arrayOfCities[i]) {
      score += 1;
       alert('That\'s correct! I lived in ' + nameCity)
       break outer_loop;
     }
   } 
   if (tries === 0) {
     alert('It was the last try. Right answers were \'Minsk\',  \'Vilnius\',  \'Moscow\',  \'New York\',  \'Berlin\'.')
     break;
   } 
 }
}
guessCities()

alert ('Thank you for answering my questions, ' + userName + '! It was fun :) You gave ' + score + ' right answers, and ' + wrongAnswer + ' wrong answers.')