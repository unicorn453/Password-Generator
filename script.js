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
//
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
  // Check if at least one option is selected
  if (!(lowerCase || upperCase || numeric || specialCharacters)) {
    alert("At least one option should be selected!");
    getPasswordOptions(); // Recursive call until at least one option is selected
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var random = "";
  for (var i = 0; i < 5; i++) {
    random += arr[Math.floor(Math.random() * arr.length)];
  }
  return random;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
