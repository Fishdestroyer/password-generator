
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var numbers = ["0,1,2,3,4,5,6,7,8,9"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCaseLetters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacter = ["!", "@", "#", "$", "<", "(", ")", "&", "*", "?", "+", "=", "^"];

// Write password to the #password input
document.getElementById("generate").addEventListener("click", myFunction);

function myFunction() {
 var password = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
if (!password) {
  prompt ("A value is required");

} else if (password < 8 || password > 128) {
   password = parseInt(prompt("Must contain between 8 and 28"));
} else {
   numbers = confirm("Will this password contain numbers?");
   lowerCaseLetters = confirm("Will this password contain lower case letters?");
   upperCaseLetters = confirm("Will this password contain upper case letters?")
   specialCharacters = confirm("Will this password contain special characters?");

   for (var i = 0; i < password; i++) {
      
};
}

};

// here is where I am lost at adding everything together to generate password


