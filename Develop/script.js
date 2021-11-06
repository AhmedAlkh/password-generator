// Assignment code here
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "01234567890";
var symbolCharacters = "!'#$%&()*+-./:;<=>?@[]^_`{|},~";
var finalPassword = "";

function generatePassword() {

function passwordLength() {
var getPasswordLength = window.prompt("Choose the length of your password(8-128 characters).");
if (getPasswordLength >= 8 && getPasswordLength <= 128) {
  window.alert("Your password will be " + getPasswordLength + " characters in length.");
}
else{
  window.alert("Please try again.");
}
}
passwordLength();

function passwordCriteria() {
  var includeLowerCase = window.confirm("Would you like to include lowercase letters?");
  if (includeLowerCase) {
    window.alert("Your password WILL include lowercase letters.");
  }
  else {
    window.alert("Your password WILL NOT include lowercase letters.");
  }
  var includeUpperCase = window.confirm("Would you like to include uppercase letters?");
  if (includeUpperCase) {
    window.alert("Your password WILL include uppercase letters.");
  }
  else {
    window.alert("Your password WILL NOT include uppercase letters.");
  }
  var includeNumbers = window.confirm("Would you like to include numbers?");
  if (includeNumbers) {
    window.alert("Your password WILL include numbers.");
  }
  else {
    window.alert("Your password WILL NOT include numbers.");
  }
  var includeSymbols = window.confirm("Would you like to include special characters?");
  if (includeSymbols) {
    window.alert("Your password WILL include special characters.");
  }
  else {
    window.alert("Your password WILL NOT include special characters.");
  }
}
passwordCriteria();
console.log(passwordCriteria);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// old code - first attempt
// Assignment code here
/*
var generateBtn = document.querySelector("#generate");
var finalPassword = password;
var passwordCriteria = passwordLength + lowerCaseLetters + upperCaseLetters + numberCharacters + specialCharacters;
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "01234567890";
var specialCharacters = "!'#$%&()*+-./:;<=>?@[]^_`{|},~";
var passwordLength = choosePasswordLength

function generatePassword() {
  
  // Prompt user to select password criteria they would like to have included
  // Choose password length (8-128 characters)
  var choosePasswordLength = window.prompt("Choose password length (8-128 characters)");
  console.log(choosePasswordLength);
    if (choosePasswordLength >= 8 && choosePasswordLength <= 128)  {
      window.alert("Your password is " + choosePasswordLength + " characters long.");
    }
      else {
      window.alert("Please try again.");
    }

  // Choose password characters. Lowercase, uppercase, numbers, special characters.
  // Input should be validated 
  
  

if (passwordCriteria = passwordLength + includeLowerCase + includeUpperCase + includeNumbers + includeSymbols) {
  finalPassword = lowerCaseLetters + upperCaseLetters + numberCharacters + lowerCaseLetters
  console.log(finalPassword)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Display password to the page

function passwordCriteria() {
var choosePasswordCriteria = window.prompt("Choose which types of characters you'd like to include in your password. 1 = lower case letters, 2 = upper case letters, 3 = numbers, 4 = symbols (example: for all character types, enter '1 2 3 4')");
  choosePasswordCriteria = parseInt(choosePasswordCriteria);

  switch (choosePasswordCriteria) {
    case 1:
      lowerCaseLetters;
      break;
    case 2:
      upperCaseLetters;
      break;
    case 3:
      numberCharacters;
      break;
    case 4:
      symbolCharacters;
      break;
    default:
      window.alert("Please try again.")
      break;
  }
}

*/