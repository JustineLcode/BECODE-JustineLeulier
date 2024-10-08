/* A palindrome is any word or phrase that spells the same way both backward and forward.

For example : race car is a palindrome. (don't take spaces, periods, dots, etc in consideration)

Other examples : Madam, I'm Adam, radar, kayak, etc.

You should create a function isPalindrome that takes a parameter text and returns a boolean indicating if the provided text is a palindrome or not.

Notes
You should be able to to ignore all special characters, spaces, dots, periods, etc. and be case insensitive */

function isPalindrome(palin){
let arrPal = palin.split("")
// console.log(arrPal)
arrPal = arrPal.filter(item => item !== " " && item !== "," && item !== "'")
arrPal = arrPal.map(element => {return element.toLowerCase()
});
let strArrPal = arrPal.join("")
 // console.log(arrPal)
 // console.log(arrPal.reverse())
let strPalReversed = arrPal.reverse().join("")
// console.log(typeof arrPalReversed)
// console.log(strPalReversed)
if (strPalReversed == strArrPal){
    console.log(true)
}
else {
    console.log(false)
}
} 

//Expected results
isPalindrome("kayak")// ---> true
isPalindrome("race car")// ---> true
isPalindrome("hello world")// ---> false
isPalindrome("Madam, I'm Adam")// ---> true