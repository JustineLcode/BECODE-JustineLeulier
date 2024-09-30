/* Exercise : The FizzBuzz
Create a functions that takes a num argument. You should then console.log all numbers from 1 to num.

But here’s the catch : multiple of 3 should print “Fizz” and multiples of 5 shoudl print “Buzz”. 
Lastly if the number is multiple of 3 and 5, it should print FizzBuzz

Notes
Your code should be modular. You must be able to pass any numbers as n and the code should still work. */

function FizzBuzz(num){
for (let i = 1; i <= num; i++){
if (i % 15 === 0){
        console.log("FizzBuzz")
    }
else if (i % 3 === 0){
    console.log("Fizz")
}
else if (i % 5 === 0){
    console.log("Buzz")
}
else {console.log(i)}
}
}

FizzBuzz(20) 


/* Methodologie: 
0. for loop pour louper de 1 à num
1. Les multiples de 3 sont des nombres qui divisés par 3 donne un modulo de 0
2.Les multiples de 5 sont des nombres qui divisés par 5 donne un modulo de 0
3. Les multiples de 3 et 5 sont des nombres qui divisés par 3 et par 5 donne un modulo de 0.
4.if multiple de 3 : console.log("Fizz")
5.if multiple de 5 : Buzz
6.if les deux : FizzBuzz
*/


/*
Expected results
In the console, if the num is 20, for example :

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz */