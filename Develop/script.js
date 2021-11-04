// Assignment code here
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberCharacters = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacter = [" ","!",'"',"'","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

function generatePassword() {
  
  // Prompt user to select password criteria they would like to have included
  // Choose password length (8-128 characters)
  var passwordLength = window.prompt("Choose password length (8-128 characters)");
  console.log(passwordLength);
    if (passwordLength >= 8 && passwordLength <= 128)  {
      window.alert("Your password is " + passwordLength + " characters long.");
    }
      else {
      window.alert("Please try again.");
    }

  // Choose password characters. Lowercase, uppercase, numbers, special characters.
  // Input should be validated 
  
  var includeLowerCase = window.confirm("Would you like to include lowercase letters?");
  var finalPassword = ``;
  
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

passwordCriteria = function () {
  if (includeLowerCase + includeUpperCase + includeNumbers + includeSymbols) {
  }
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