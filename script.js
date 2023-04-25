// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
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
        string: "",
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
            
            input.lengthStore = Number(input.getLength());

            for ( set in charSets ) {
                charType = charSets[set].type;
                input[set] = input.characterOptions(charType);
                var answer = input[set].toLowerCase();
                console.log("answered " + answer);
                if (answer === "y") {
                    input.string += charSets[set].string;
                };
            };
            console.log(input);

        },
        validateOptions () {
            if (!(Number.isInteger(input.lengthStore) && input.lengthStore > 7 && input.lengthStore < 128)) {
                console.log("length wrong");
                input.getOptions();
            } else {
                if (input.string === "") {
                    console.log('string empty')
                    input.getOptions();
                } else {
                    console.log('validated');
                };
            }; 
        },
    };

    input.getOptions();
    input.validateOptions();

    let pword = "";

    for ( let counter = 0; counter < input.lengthStore; counter++ ) {
        randomChoice = Math.floor(Math.random()*input.string.length);
        console.log(randomChoice);
        nextChar = input.string.charAt(randomChoice);
        console.log(nextChar);
        pword += nextChar;
        console.log(pword);
    };

    return pword; 
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
