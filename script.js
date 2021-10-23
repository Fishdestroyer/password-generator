
// Assignment code here


// Get references to the #generate element
// var generateBtn = 
var generateBtn = document.querySelector("#generate");
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCaseLetters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["!", "@", "#", "$", "<", "(", ")", "&", "*", "?", "+", "=", "^"];
var options;
var includeNumbers;
var includeLowerCaseLetters;
var includeUpperCaseLetters;
var includeSpecialCharacters;
var password;

let str1 = "numbers";
let str2 = "lower case letters";
let str3 = "upper case letters";
let str4 = "special characters";
let res = [];

// Write password to the #password input
document.getElementById("password").addEventListener("click", myFunction);

function myFunction() {
  password = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
if (!password) {
  prompt ("A value is required");
} else if (password < 8 || password > 128){
   password = parseInt(alert("Must contain between 8 and 28"));
} else {
   includeNumbers = confirm("Will this password contain numbers?");
   includeLowerCaseLetters = confirm("Will this password contain lower case letters?");
   includeUpperCaseLetters = confirm("Will this password contain upper case letters?");
   includeSpecialCharacters = confirm("Will this password contain special characters?");
}

if(includeNumbers === true) {
  res =  res.concat(numbers);
   console.log(res)
  }
  if(includeUpperCaseLetters === true) {
  res =  res.concat(upperCaseLetters);
}
if(includeLowerCaseLetters === true) {
   res = res.concat(lowerCaseLetters);
}
if(includeSpecialCharacters === true) {
 res = res.concat(specialCharacters);
}
var generatedPassword = "";
for (var i = 0; i < password; i++) {
   generatedPassword += res[Math.floor(Math.random() * res.length)];
}

// in the console, i now have a password but cant get it to list to the screen/ password are on the generator
};

//var password = [];
};





//if(includeUpperCaseLetters === true) {
 //  res.concat (upperCaseLetters);
//}
//if(includeLowerCaseLetters === true) {
  // res.concat (lowerCaseLetters);
//}
//if(includeSpecialCharacters === true) {
  // res.concat (specialCharacters);
//}
//console.log(numbers, lowerCaseLetters, upperCaseLetters, specialCharacters)
 
      //pickRes = res[Math.floor(Math.random() * res.length)];
    //password.push(pickRes);


