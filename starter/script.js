// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// // Function to prompt user for password options
// function getPasswordOptions() {
  
// }

// // Function for getting a random element from an array
// function getRandom(arr) {
//   for (var i = 0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber +1);
//    }
// }

// // Function to generate password with user input
// function generatePassword() {

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);



// Function to prompt user for password options
function getPasswordOptions() {}
  const options = [];
  options.length = prompt("How many Characters from 10-64?");
  options.lowercase = confirm("Include Lowercase Characters?");
  options.Uppercase = confirm("Include Uppercase Characters?");
  options.Numeric = confirm("Include Numeric Characters?");
  options.special = confirm("Include Special Characters?");



  

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random()*bigArray.length);

return randomIndex;
}



let bigArray = [];
// Function to generate password with user input
function generatePassword() {}
  const passwordOptions = options;
  if(passwordOptions.lowercase) {
    bigArray = bigArray.concat(lowerCasedCharacters);
  }
  if(passwordOptions.Uppercase) {
    bigArray = bigArray.concat(upperCasedCharacters);
  }
  if(passwordOptions.special) {
    bigArray = bigArray.concat(specialCharacters);
  }
  if(passwordOptions.Numeric) {
    bigArray = bigArray.concat(numericCharacters);
  }

  console.log(bigArray);
  console.log(passwordOptions);

  


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);