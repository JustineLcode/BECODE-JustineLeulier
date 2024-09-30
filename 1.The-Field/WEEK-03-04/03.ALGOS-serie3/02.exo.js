/* Given a string, reverse all the words which have odd length. The even length words are not changed.

Notes
There is exactly one space between each word and no punctuation is used. */
function reverseOdd(initialString) {
    let initialArray = initialString.split(" ");
    
    for (let i = 0; i < initialArray.length; i++) {
if (initialArray[i].length % 2 === 1) {
    initialArray[i] = initialArray[i].split("").reverse().join("")
}
    }
    console.log(initialArray.join(" "))
}
// Expected results
reverseOdd("Bananas")// ➞ "sananaB"

reverseOdd("One two three four")// ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
//➞ "Make sure you only reverse words of odd length"