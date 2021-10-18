
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var length=(enter <8 || enter> 128);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
document.getElementById("generate").addEventListener("click", myFunction);

function myFunction() {
   parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
}





    // Asks for user input
   //function generatePassword() {
   // enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);