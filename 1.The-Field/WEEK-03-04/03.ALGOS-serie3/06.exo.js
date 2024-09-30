/* Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). 
The function looks like:

Notes
Broken keys should be ordered by when they first appear in the sentence.
Only one broken key per letter should be listed.
Letters will all be in lower case. */

function findBrokenKeys(expected, unexpected){
let brokenKeys = []
expected = expected.split("")
unexpected = unexpected.split("")
// console.log(expected, unexpected)
for (let i=0; i < unexpected.length; i++){
brokenKeys= expected.filter((value, index)=> expected.indexOf(value) !== unexpected.indexOf(value));
brokenKeys = brokenKeys.filter((value, index)=> brokenKeys.indexOf(value) === index)
}
console.log(brokenKeys)
}

// Expected results
findBrokenKeys("happy birthday", "hawwy birthday")// ➞ ["p"]

findBrokenKeys("starry night", "starrq light")// ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5")// ➞ ["b", "e", "v", "n"]