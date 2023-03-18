// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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



let passwordLength;
let charSet=[];
// // Get references to the #generate element
function getPasswordOptions(){
   // Prompt the user for password length
   passwordLength = parseInt(prompt("Enter the length of the password (must be between 10 and 64):"));

   // Validate the input
   if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
     alert("Invalid input! Password length must be between 10 and 64.");
     return;
   }
 
   // Prompt the user for character types
   let useLowercase = confirm("Do you want to include lowercase characters?");
   let useUppercase = confirm("Do you want to include uppercase characters?");
   let useNumeric = confirm("Do you want to include numeric characters?");
   let useSpecial = confirm("Do you want to include special characters?");
 
   // Validate the input
   if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
     alert("Invalid input! You must select at least one character type.");
     return;
   }
 
      // Build the character set to use
   
   if (useLowercase===true) {
     charSet =charSet.concat(lowerCasedCharacters);
    //  console.log(charSet)
    

   }
   if (useUppercase===true) {
     charSet =charSet.concat(upperCasedCharacters);
    

   }
   if (useNumeric===true) {
     charSet =charSet.concat(numericCharacters);
   

   }
   if (useSpecial===true) {
     charSet = charSet.concat(specialCharacters);
    
   }

  
}

// Function to generate a random password
function generatePassword() {


  // Generate the randompassword
  let randomPassword = "";
      //console.log(charSet)
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    randomPassword += charSet[randomIndex];
  }

//console.log(randomPassword)
return randomPassword
 
}

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();

  var password = generatePassword();
       //console.log(password)
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
