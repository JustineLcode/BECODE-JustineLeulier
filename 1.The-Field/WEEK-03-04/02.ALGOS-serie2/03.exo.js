// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Notes: Return an empty array if the object is empty.


function toArray (obj){
let result = Object.keys(obj).map((key) => [key, obj[key]])
console.log(result)
}
toArray({ a: 1, b: 2 })

toArray({ shrimp: 15, tots: 12 })

toArray({})