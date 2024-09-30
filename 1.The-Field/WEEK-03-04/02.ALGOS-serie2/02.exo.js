// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

function num_of_digits (num){
    let string = num.toString() 
console.log(parseInt(string.length))
}

num_of_digits(1000)

num_of_digits(12)

num_of_digits(1305981031)

num_of_digits(0)