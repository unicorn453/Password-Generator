// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var upperCase = confirm(
    "Do you want to include upper case in your password?"
  );
  var lowerCase = confirm(
    "Do you want to include lower case in your password?"
  );
  var numeric = confirm("Do you want to include numbers in your password?");
  var specialCharacters = confirm(
    "Do you want to include special characters in your password?"
  );
  var conditionMet = false;
  while (!conditionMet) {
    conditionMet = false;

    if (lowerCase) {
      lowerCasedCharacters = true;
      // conditionMet = true;
    } else if (upperCase) {
      upperCasedCharacters = true;
      // conditionMet = true;
    } else if (numeric) {
      numericCharacters = true;
      conditionMet = true;
    } else if (specialCharacters) {
      specialCharacters = true;
      conditionMet = true;
    } else {
      alert("One of the options should be selected!");
      return getPasswordOptions();
      conditionMet = false;
    }
  }
}
console.log(getPasswordOptions());

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
