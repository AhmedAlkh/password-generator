// Global variables

var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "01234567890";
var specialCharacters = "!'#$%&()*+-./:;<=>?@[]^_`{|},~";
var includeLowerCase;
var includeUpperCase;
var includeNumbers;
var includeSymbols;

// Global variables ^

// Main function

function generatePassword() {
  var password = "";
  var newPassword = "";


  // User is prompted to select password length. If too short or long they are prompted to try again.

  var getPasswordLength = window.prompt("Choose the length of your password(8-128 characters).");
  while ((getPasswordLength < 8) || (getPasswordLength > 128)) {
    window.alert("Please try again.");
    getPasswordLength = window.prompt("Choose the length of your password(8-128 characters).");
  }

  // This function gathers all of the password criteria.

  function passwordCriteria() {

    includeLowerCase = window.confirm("Would you like to include lowercase letters?");
    if (includeLowerCase) {
      window.alert("Your password WILL include lowercase letters.");
      newPassword += lowerCaseLetters;
    }
    else {
      window.alert("Your password WILL NOT include lowercase letters.");
    }
    includeUpperCase = window.confirm("Would you like to include uppercase letters?");
    if (includeUpperCase) {
      window.alert("Your password WILL include uppercase letters.");
      newPassword += upperCaseLetters;
    }
    else {
      window.alert("Your password WILL NOT include uppercase letters.");
    }
    includeNumbers = window.confirm("Would you like to include numbers?");
    if (includeNumbers) {
      window.alert("Your password WILL include numbers.");
      newPassword += numberCharacters;
    }
    else {
      window.alert("Your password WILL NOT include numbers.");
    }
    includeSymbols = window.confirm("Would you like to include special characters?");
    if (includeSymbols) {
      window.alert("Your password WILL include special characters.");
      newPassword += specialCharacters;
    }
    else {
      window.alert("Your password WILL NOT include special characters.");
    }

    // User must select atleast one character type or the loop repeats.

    while ((!includeLowerCase) && (!includeUpperCase) && (!includeNumbers) && (!includeSymbols)) {
      window.alert("You must select at least 1 character type.");
      passwordCriteria();
    }
  }
  passwordCriteria();

  // A password consisting of the selected length and criteria is randomly generated.

  for (var i = 0; i < getPasswordLength; i++) {
    password += newPassword.charAt(Math.floor(Math.random() * newPassword.length));
  }

  return password;
}

// Main function ^

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

