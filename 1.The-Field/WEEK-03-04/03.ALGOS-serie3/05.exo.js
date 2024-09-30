/* Create a function that converts Celsius to Fahrenheit and vice versa.

Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
Look on Google how to convert F to C and vice-versa */

function convert(degree){
if (degree.endsWith("°C")){
    degree = degree.slice(0, -2)                                 
    // console.log(degree)
    degree = Math.round(degree*1.8 +32)            
   // typeof degree = number
console.log(`${degree}°F`)
}
else if (degree.endsWith("°F")){
    degree = degree.slice(0, -2)
    // console.log(degree)
    degree = Math.round((degree-32) / 1.8)
   // typeof degree = number
console.log(`${degree}°C`)
}
else {
console.log("Error")
}
}

// °C = (°F - 32) / 1.8
// °F = °C*1.8 +32

//Expected results
convert("35°C")// ➞ "95°F"

convert("19°F")// ➞ "-7°C"

convert("33")// ➞ "Error"