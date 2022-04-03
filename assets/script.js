// Assignment Code
var generateBtn = document.querySelector("#generate");

var length

var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var numbersArray = ["1","2","3","4","5","6","7","8","9","0"]

var symbolsArray = ["!","@","#","$","%","^","&","*"]

var combination = [" "]

var output = " "

function generatePassword(){
    console.log("Button clicked")

// 1. promopt user for password criteria

// a. password length 8-128
    length = prompt("Please pick length of password")
    console.log(length)
// b. lowercase,uppercase,numbers, special character prompts
    lowercase = confirm("Would you like lowercase letters?")
    console.log(lowercase)

    if(lowercase == true){
        combination = combination.concat(lowercaseArray)
    }

    uppercase = confirm("Would you like uppercase letters?")
    console.log(uppercase)

    if(uppercase == true){
        combination = combination.concat(uppercaseArray)
    }

    numbers = confirm("Would you like numbers?")
    console.log(numbers)

    if(numbers == true){
        combination = combination.concat(numbersArray)
    }

    symbols = confirm("Would you like symbols?")
    console.log(symbols)

    if(symbols == true){
        combination = combination.concat(symbolsArray)
    }

        console.log(combination.length)

// 2. validate the input
// 3. generate password based on criteria

console.log(output)

    if(length > 8 && length < 128){
        for (let index = 0; index < length; index++) {
            output += combination[Math.floor(Math.random() * combination.length)];
            
        }
    }
    


// 4. Display generated password to page
    return output
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
