// Assignment code here
//Array of all possible characters
var upperCase= ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", ",Z"];
var lowerCase= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericCharacters= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters= [" ", "!", "#", "$", "%", "^", "&", "*", "+", "<", ">", "?", "_"];

var passwordCriteria = function () {
  // Ask user how many characters they would like their password to have
  /* If user enters number that is too large or too small, 
  alert window informs them of this and 
  asks them to pick again
  before returning to start of the function*/
  var numberOfCharacters = window.prompt("How many characters would you like your password to have? (Please enter a number between 8 and 128.)");
  if (numberOfCharacters < 8) {
    window.alert("Oops! That's not enough characters. Please pick a number between 8 and 128.");
    return passwordCriteria();
  } else if (numberOfCharacters > 128) {
    window.alert("Oops! That's too many characters. Please pick a number between 8 and 128.");
    return passwordCriteria();
  } 
  console.log(numberOfCharacters);

  // Ask user if they would like their password to be case sensitive
  /*User must enter Y, y, N, or n.
  Otherwise, window will prompt the user to choose again
  before returning to the start of the function*/
  var caseSensitivity = window.prompt("Would you like a case sensitive password? (Enter 'Y' for Yes or 'N' for No)");
  caseSensitivity.toLowerCase();
  if (y) function upperCase() {
    
  }
  else if (n) function lowerCase () {

  } else {
    window.prompt ("Please enter Y or N.");
  }
  console.log(caseSensitivity);

  // Ask user if they would like their password to have special characters
  var specialCharacters = window.prompt("Include special characters? (Enter 'Y' for Yes or 'N' for No)");
  specialCharacters.toLowerCase();
  // if (y) {
  
  // }
  // else if (n) {

  // } else {
  //   window.prompt ("Please enter Y or N.");
  // }

  console.log(specialCharacters);

  // Ask user if they would like numeric characters
  var numericCharacters = window.prompt("Would you like your password to include numeric characters? (Enter 'Y' for Yes or 'N' for No)");
  numericCharacters.toLowerCase();
  // if (y) {
  
  // }
  // else if (n) {

  // } else {
  //   window.prompt ("Please enter Y or N.");
  // }

  console.log(numericCharacters);
}
passwordCriteria();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

