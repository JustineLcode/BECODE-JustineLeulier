/* Create a function which returns the number of true values there are in an array.

Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false). */
    
function countTrue(arr) {
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++; 
        }
    }
    console.log(count); 
}

countTrue([true, false, false, true, false])

countTrue([false, false, false, false])

countTrue([])
