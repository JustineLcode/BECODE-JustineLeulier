/* Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
Notes
Return a string.
If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
If the number is 0, 0.0, 000, 00.00, etc... return "0". */

function removeLeadingTrailing (str){
let floatNumi = parseFloat(str)
// console.log(floatNumi)
let modifiedString = floatNumi.toString()
console.log(modifiedString)
}

removeLeadingTrailing("230.000")

removeLeadingTrailing("00402")

removeLeadingTrailing("03.1400")

removeLeadingTrailing("0")
removeLeadingTrailing("0.0")
removeLeadingTrailing("000")
removeLeadingTrailing("00.00")


/* J'ai calé 2h sur ma fonction suivante avant de demander de l'aide d'un collègue qui m'a dit de jouer avec parseInt et parseFloat ^^
function removeLeadingTrailing (str){
let deleteLeadingZeros = str.replace(/^0+/, "") // delete the leading zeros
let deleteTrailingZeros = deleteLeadingZeros.replace(/0+$/, '') // delete the trailing zeros 
if(deleteTrailingZeros.endsWith(".")){                                  // je voulais utiliser charAt(deleteTrailingZeros.length -1) mais çà ne fonctionne pas
console.log(deleteTrailingZeros.replace(".",""))
}
else {console.log(deleteTrailingZeros)}
}


removeLeadingTrailing("230.000")

removeLeadingTrailing("00402")

removeLeadingTrailing("03.1400")

removeLeadingTrailing("30")                         // j'obtiens 3 */