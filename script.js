'use strict'

// asking User name
var userName = prompt('What is your name?')
alert ('Nice to meet you, ' + userName + '! I am Julia.')
console.log('The user\'s name is ' + userName)

var correctAnswer = 0;
var wrongAnswer = 0;
//5 questions
//1
var myAge = prompt('Am I 30 years old?').toLowerCase()
if (myAge == 'no' || myAge == 'n') {
  //console.log ('Correct answer')
  correctAnswer += 1;
  alert ('That\'s right. I turned 25 a month ago. :)')
} else if (myAge == 'yes' || myAge == 'y') {
  //console.log('Wrong answer')
  wrongAnswer += 1;
  alert ('I guess I look bad. LOL. I am 25 years old.')
} else {
  //console.log ('You had to type YES or NO')
  alert ('You had to type YES or NO')
};

//2
var placeOfBirth = prompt('Am I from Belarus?').toLowerCase()
if (placeOfBirth == 'yes' || placeOfBirth == 'y') {
  //console.log ('Correct answer')
  correctAnswer += 1;
  alert ('Wow! It looks like you know a lot of about me :) That\'s right!')
} else if (placeOfBirth == 'no' || placeOfBirth == 'n'){
  //console.log('Wrong answer')
  wrongAnswer += 1;
  alert ('Unfortunatly that\'s wrong. I am from Belarus.')
} else {
  //console.log ('You had to type YES or NO')
  alert ('You had to type YES or NO')
};

//3
var currentCity = prompt('Do I live in NYC now?').toLowerCase()
if (currentCity == 'yes' || currentCity == 'y') {
   //console.log ('Wrong answer')
   wrongAnswer += 1;
  alert ('That is wrong! 3 months ago I moved to Seattle from NYC.')
} else if (currentCity == 'no' || currentCity == 'n') {
  //console.log ('Correct answer')
   correctAnswer += 1;
  alert ('That is right! I live in Seattle now.')
} else {
  //console.log ('You had to type YES or NO')
  alert ('You had to type YES or NO')
};

//4
var familyQuestion = prompt('Do I live in USA with my family?').toLowerCase()
if (familyQuestion == 'yes' || familyQuestion == 'y') {
   //console.log ('Wrong answer')
   wrongAnswer += 1;
  alert ('Incorrect. I would like, but it is not possible now.')
} else if (familyQuestion == 'no' || familyQuestion == 'n'){
  //console.log ('Correct answer')
  correctAnswer += 1;
  alert ('Correct! My family live in Belarus.')
} else {
  //console.log ('You had to type YES or NO')
  alert ('You had to type YES or NO')
};

//5
var favoriteState = prompt('Is my favorite state South Dakota?').toLowerCase()
if (favoriteState == 'yes' || favoriteState == 'y') {
//console.log ('Wrong answer')
  wrongAnswer += 1;
  alert ('That\'s wrong! Unfortunatly I have neven been there.')
} else if (favoriteState == 'no' || favoriteState == 'n') {
  //console.log ('Correct answer')
  correctAnswer += 1;
  alert ('To be honest I cannot pick just one. My favorite states are California, Washington and Hawaii.')
}else {
  //console.log ('You had to type YES or NO')
  alert ('You had to type YES or NO')
};

//last alert
alert ('Thank you for answering my questions, ' + userName + '! It was fun :) You gave ' + correctAnswer + ' right answers, and ' + wrongAnswer + ' wrong answers.')