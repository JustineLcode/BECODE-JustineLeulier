/* Given an input string, reverse the string word by word, the first word will be the last, and so on.

Notes
A word is defined as a sequence of non-space characters.
The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
You need to reduce multiple spaces between two words to a single space in the reversed string. */

function reverseWords (str) {
str = str.trim().split(" ").reverse() // .trim() Enleve espaces de début et de fin && .split(" ")Transforme en Array && .reverse() Renverse les éléments de l'Array
let nvArr = []
for (let i = 0; i < str.length; i++){
    if (str[i] !== ""){
    nvArr.push(str[i])
    }
}                                           // Cree une nouvelle Array avec les éléments non vides.
let lastArr = nvArr.join(" ")               // Transforme l'Array en String & Remet les espaces entre les mots 
    console.log(lastArr)
}

reverseWords(" the sky is blue")

reverseWords("hello   world!  ")

reverseWords("a good example")