// Created 4 variables for each char set
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Created generatePassword function
function generatePassword() {
  // Initialize variables
  let  password = "";
  var userCharacters = "";
  var passwordLength;

  // Prompt user for password length within the specified range
  while (true) {
    passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters:"));

    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    } else {
      alert("Please enter a valid password length between 8 and 128 characters.");
    }
  }

  // Confirming which character sets the user wants in their password
  var confirmLowercase = confirm("Include lowercase characters?");
  var confirmUppercase = confirm("Include uppercase characters?");
  var confirmNumbers = confirm("Include numeric characters?");
  var confirmSpecialChars = confirm("Include special characters?");

  // Building userCharacters based on user's selections
  if (confirmLowercase) {
    userCharacters += lowercase;
  }

  if (confirmUppercase) {
    userCharacters += uppercase;
  }

  if (confirmNumbers) {
    userCharacters += numeric;
  }

  if (confirmSpecialChars) {
    userCharacters += special;
  }

  // Check if at least one character set is selected
  if (userCharacters === "") {
    alert("Please select at least one character set for your password.");
    return;
  }

  // Generate password using selected character sets
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * userCharacters.length);
    password += userCharacters.charAt(randomIndex);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
