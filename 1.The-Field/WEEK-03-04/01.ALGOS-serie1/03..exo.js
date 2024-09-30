// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax (arr) {
let min = Math.min(...arr)
let max = Math.max(...arr)
console.log([min, max])
} 

minMax([1, 2, 3, 4, 5])

minMax([2334454, 5])

minMax([1]) 