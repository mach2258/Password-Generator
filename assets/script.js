// Assignment Code
var generateBtn = document.querySelector("#generate");

var length

var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var numbersArray = ["1","2","3","4","5","6","7","8","9","0"]

var symbolsArray = ["!","@","#","$","%","^","&","*"]

var combination = []

var output = " "

function generatePassword(){
    length = 0
    combination = []
    output = ""
    questions()

    if(length >= 8 && length <= 128){
        for (let index = 0; index < length; index++) {
            output += combination[Math.floor(Math.random() * combination.length)];
            
        }
    }

    return output
}
function lengthValue(){
    length = prompt("Please pick length of password (8-128)")
    console.log(length)
    if(length < 8 || length > 128 || isNaN(length) === true){
        lengthValue()
    }
}

function questions(){
    lengthValue()

    lowercase = confirm("Would you like lowercase letters?")
    if(lowercase == true){
        combination = combination.concat(lowercaseArray)
    }
    uppercase = confirm("Would you like uppercase letters?")
    if(uppercase == true){
        combination = combination.concat(uppercaseArray)
    }
    numbers = confirm("Would you like numbers?")
    if(numbers == true){
        combination = combination.concat(numbersArray)
    }
    symbols = confirm("Would you like symbols?")
    if(symbols == true){
        combination = combination.concat(symbolsArray)
    }
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
