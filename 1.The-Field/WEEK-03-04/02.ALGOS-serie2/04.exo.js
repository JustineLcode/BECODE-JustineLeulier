//Create a function that takes two numbers as arguments (num, length) 
//and returns an array of multiples of num until the array length reaches length.
//Notes: Notice that num is also included in the returned array.

function arrayOfMultiples(num, length){
    let nvArr = Array.of() 
    while (nvArr.length <= length -1){
        for(let i = 1; i <= length; i++){
        nvArr.push(num * i) 
        }
    }
        console.log(nvArr)
    } 

arrayOfMultiples(7, 5) 

arrayOfMultiples(12, 10) 

arrayOfMultiples(17, 6) 