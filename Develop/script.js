// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  // Prompt user to select password criteria they would like to have included
  // Choose password length (8-128 characters)
  var passwordLength = window.prompt("Choose password length (8-128 characters)");

    if (passwordLength >= 8 && passwordLength <= 128)  {
      window.alert("Your password is " + passwordLength + " characters long.");
    }
      else {
      window.alert("Please try again.");
    }

  // Choose password characters. Lowercase, uppercase, numbers, special characters.
  var lowerCase = window.confirm("Would you like to include lowercase letters?");
  var upperCase = window.confirm("Would you like to include uppercase letters?");
  var numberic = window.confirm("Would you like to include numbers?");
  var specialCharacters = window.confirm("Would you like to include special characters?");
}

  // Input should be validated 

  // Display password to the page
  //return password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
