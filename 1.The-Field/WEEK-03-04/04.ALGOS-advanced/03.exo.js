/* Caesar Cipher is a way of "encrypting" a text that, supposably, Julius Caesar used in his communication.

We switch every letter with, for example, two letters before in the alphabet.

The Caesar cipher function will take two parameters str and num; str represents the text we want to cipher and num de amount of letters you want to go forward or backward (using negative numbers)

Notes
Make it case incensitive
You should be able to loop back or forward into the alphabet (if you have to go 3 from z, it would be c) */
const arrAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
// console.log(arrAlphabet)
function caesarCipher(str, num){
str = str.toLowerCase()
arrStr = str.split("")
let result = []
//console.log(arrStr)
for (let i=0; i < arrStr.length; i++){
    let charact = arrStr[i]
    if (arrAlphabet.includes(charact)){
        let indexInAlphabet = arrAlphabet.indexOf(charact)
// console.log(indexInAlphabet)
let newIndex = indexInAlphabet + num
// console.log(newIndex)
    if(newIndex <= 25 && newIndex >= 0){
       // console.log(arrAlphabet[newIndex])
    }
    else if (newIndex > 25){
        newIndex = newIndex % 26;
      //  console.log(arrAlphabet[newIndex])
    }
    else if (newIndex < 0){
        newIndex = 26 + newIndex
       // console.log(arrAlphabet[newIndex])
    }
result.push(arrAlphabet[newIndex])
}
else {result.push(charact)}
}
console.log(result.join(""))
}
//Expected results
caesarCipher("zoo keeper", 2)// ----> "bqq mggrgt"

caesarCipher("bqq mggrgt", -2)// ----> "zoo keeper"

caesarCipher("My name is Henrique", 3)// ----> "pb qdph lv khqultxh "