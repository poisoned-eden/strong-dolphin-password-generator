// Assignment Code
var generateBtn = document.querySelector("#generate");

function userChoices() {
    var charSets = {
        lowerCase: {
            string: "abcdefghijklmnopqrstuvwxyz",
            type: "lower case alphabet characters",
        },
        upperCase: {
            string: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            type: "upper case alphabet characters",
        },
        numeric: {
            string: "0123456789",
            type: "numeric",
        },
        special: {
            string: "!£$%^&*()_+=-}{~@:;'#?><./,|",
            type: "special"
        },
    };
    
    const input = {
        getLength () {
            var lengthChoice = prompt("How long would you like the password to be? Please enter a number between 8 & 128", 8);
            console.log("input length " + lengthChoice);
            return lengthChoice;
        },
        characterOptions (charType) {
            var option = prompt("Please type y if you would you like to use " + charType + " in your password", "y");
            console.log(option);
            return option;
        },
        getOptions() {
            
            input.length = Number(input.getLength());

            for ( set in charSets ) {
                charType = charSets[set].type;
                input[set] = input.characterOptions(charType);
                var answer = input[set].toLowerCase();
                console.log("answered " + answer);
                if (answer === "y") {
                    input.string += charSets[set].string;
                    console.log(input.string + "getting there");
                };
            };

        },
        validateOptions () {
            if (Number.isInteger(input.length) && input.length > 7 && input.length < 128) {
                
                console.log(input.string);
                if (input.string !== "") {
                    return input.string;
                } else {
                    input.getOptions;
                };

            } else {
                input.getOptions();
            }; 
        },
        string: "",
    };

    input.getOptions();
    input.validateOptions();

};




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

};

// Add event listener to generate button
generateBtn.addEventListener("click", userChoices);
