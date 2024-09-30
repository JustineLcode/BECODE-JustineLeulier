/* Exercise. Reverse Array in place
Create a function that takes an array and reverses it.

Notes
Don't use reverse()
Don't create a new array and push elements to it. */

                                      // TRICHE AVEC UNE VIDEO (https://www.youtube.com/watch?v=uHBiG0b3knM) : PAS REUSSI PAR MOI-MEME!

function reversedArray (arr) {
    let start = 0;
    let end = arr.length -1;
while (start < end){
    let temp = arr[start]
    arr[start] = arr[end];
    arr[end] = temp
    start ++;
    end --;
}
return arr
}
console.log(reversedArray([1,2,3,4,5]));
console.log(reversedArray(["a","b","c","d","e","f"]));