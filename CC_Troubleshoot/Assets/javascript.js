// Assignment Code
var generateBtn = document.querySelector("#generate");
// ​
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// ​
  passwordText.value = password;
// ​
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ​
//Arrays created in global space
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
// ​
//Function to generate the password, including variables created to produce pop up windows and pose questions for users.
function generatePassword() {
  window.alert("Please answer a few questions to generate your unique password.");
// ​
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("How many characters would you like the password to be? Choose between 8 - 128.");
    alert("You have chosen a password with " + passwordLength + " characters.")
  } 
// ​
  console.log(passwordLength);
// ​
  var uppercaseQuestion = confirm("Would you like to use UPPERCASE letters in your password?");
    if (uppercaseQuestion == true) {
      alert("You have chosen to include UPPERCASE letters in your password.");
    } else {
      alert("You have chosen NOT to include UPPERCASE letters in your password.");
    }
// ​
  var lowercaseQuestion = confirm("Would you like to use lowercase letters in your password?");
    if (lowercaseQuestion == true) {
      alert("You have chosen to include lowercase letters in your password.");
    } else {
      alert("You have chosen NOT to include lowercase letters in your password.");
    }   
// ​
  var numbersQuestion = confirm("Would you like to use numbers in your password?");
    if (numbersQuestion == true) {
      alert("You have chosen to include numbers in your password.");
    } else {
      alert("You have chosen NOT to include numbers in your password.");
    }  
// ​
  var specialCharactersQuestion = confirm("Would you like to use special characters in your password?");
    if (specialCharactersQuestion == true) {
      alert("You have chosen to include special characters in your password.");
    } else {
      alert("You have chosen NOT to include special characters in your password.");
    }
// ​
  //Empty array that is concatenated with values from other arrays based on user input to the previous questions.
  var generatedPassword = [];
  if (uppercaseQuestion == true) {
    generatedPassword = generatedPassword.concat(upperCaseLetters);
  }
// ​
  if (lowercaseQuestion == true) {
    generatedPassword = generatedPassword.concat(lowerCaseLetters);
  }
// ​
  if (numbersQuestion == true) {
    generatedPassword = generatedPassword.concat(numbers);
  }
// ​
  if (specialCharactersQuestion == true) {
    generatedPassword = generatedPassword.concat(specialCharacters);
  }
// ​
  //Randomzises the collected arrays chosen.
  var randomizedPassword = [];
  for (var i in generatedPassword) {
    var pos = Math.round(Math.random() * randomizedPassword.length);
    randomizedPassword.splice(pos, 0, generatedPassword[i]);
  }
// ​
  //Takes the randomzied items, and joins them together so they don't have commas seperating them.
  randomizedPassword = randomizedPassword.join('');
// ​
  //Logs the output from the randomized arrays
  console.log(randomizedPassword);
  window.alert("Your generated password is: \n" + randomizedPassword);
// ​
  //Things i've tried and failed to show password on screen as a text element
                // passwordtext.value = randomizedPassword;
// ​
                // function showPassword() {
                //   password = randomizedPassword;
                //   return password;
                // }
// ​
                // showPassword();
// ​
// ​
                // randomizedPassword = randomizedPassword.toString();
// ​
                // var divTags = document.querySelectorAll("div")
                // divTags = randomizedPassword;
// ​
                // document.querySelectorAll("textarea") = randomizedPassword;
// ​
                // passwordText = randomizedPassword;
                return randomizedPassword;
}