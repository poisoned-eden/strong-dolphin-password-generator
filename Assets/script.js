// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(event) {
  
  // set up character sets
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var lowerCase = alphabet.split('');
  var upperCase = alphabet.toUpperCase().split('');
  var numeric = "1234567890";
  var arrayNumeric = numeric.split('');
  var special = "!£$%^&*()_+=-}{~@:;'#?><./,|";
  var arraySpecial = special.split('');

  // set up storage variables for user choices
  var length = 0;
  var chosenChars = "";

  // add character choices to storage variable
  function appendToChosenChars(character) {
    chosenChars += character;
    console.log(chosenChars);
  };

  length = prompt("How long would you like the password to be? Please enter a number between 8 & 128", 8);
  console.log(length);

  function testLength(length) {

  };
  
  if (Number.isInteger(+length)  && length > 7 && length < 128) {
    

    console.log("length correct");
/*
    var lowerResponse = prompt("Please type y if you would you like to use characters from the lowercase alphabet in your password", "y");

    if (lowerResponse == "y") {

      chosenChars += lowerCase;
      console.log(chosenChars);
      for (let char of lowerCase) {
        appendToChosenChars(char);
      }; 
    

     var upperResponse = prompt("Please type y if you would you like to use characters from the uppercase alphabet in your password", "y");
    
    if (upperResponse == "y") {
      for (let char of upperCase) {
        appendToChosenChars(char);
      };
    };

    var numericResponse = prompt("Please type y if you would you like to use numbers in your password", "y");

    if (numericResponse == "y") {
      for (let char of arrayNumeric) {
        appendToChosenChars(char);
      };

    };

    var specialResponse = prompt("Please type y if you would you like to use special characters in your password", "y");

    if (specialResponse == "y") {
      for (let char of arraySpecial) {
        appendToChosenChars(char);
      };
    };
    */

  } else {
    
    console.log("length not valid");
    alert("Please enter an integer in the range 8 to 128");
    length = prompt("How long would you like the password to be? Please enter a number between 8 & 128", 8);
    
  };

  event.preventDefault();

  let pword = "";
  for ( let counter = 0; counter < length; counter++) {
    randomChoice = Math.floor(Math.random()*chosenChars.length);
    nextChar = chosenChars.charAt(randomChoice);
    console.log(nextChar);
    pword += nextChar;
    console.log(pword);
  };

  return pword;

};



// Write password to the #password input
function writePassword(event) {
  var password = generatePassword(event);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  event.preventDefault();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
