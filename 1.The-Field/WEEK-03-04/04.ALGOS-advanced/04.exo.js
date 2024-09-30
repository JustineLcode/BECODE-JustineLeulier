/* Exercise. Reverse word.
Create a function that takes a string parameter and return another string with all the words inversed.

Notes
Attention !

The order of the words doesn't change, just the letters of each word */

function reverseWord (str) {
str = str.toLowerCase()
const arrStr = str.split(" ")
// console.log(arrStr)
const reversedStr = arrStr.map(element => element.split("").reverse().join(""));
return reversedStr.join(" ");
}

//Expected results
console.log(reverseWord("This is a string of words"))// ----> "siht si a gnirts fo sdrow"