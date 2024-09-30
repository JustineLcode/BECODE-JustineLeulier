/* Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Notes
If the input tries to divide by 0, return: "Can't divide by 0!" */

/*
function calculator (num1, operator, num2){
    let answer = num1 + operator + num2
    let result = Number(answer)
    console.log(result)
} */
/* function calculator (num1, operator, num2){
    let stringNum1 = num1.toString()                                            //Transformer num 1 en string
    let stringNum2 = num2.toString()                                            // Transformer num 2 en string
    let answer = stringNum1.concat(operator, stringNum2)                        // Concat le tout
    // console.log(answer) 
    let result = eval(answer)                                                    
    if (operator === "/" && num2 === 0) {
        console.log("Can't divide by 0!")
    }
    else {console.log(result)}
}                                                    Fonction simplifiée:                */
function calculator (num1, operator, num2){
    let result = eval(num1 + operator + num2)                                            
    if (operator === "/" && num2 === 0) {
        console.log("Can't divide by 0!")
    }
    else {console.log(result)}
}

calculator(2, "+", 2)

calculator(2, "*", 2)

calculator(4, "/", 2)

calculator(4, "/", 0)