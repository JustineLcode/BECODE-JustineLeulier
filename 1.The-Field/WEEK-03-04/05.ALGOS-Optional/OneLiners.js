/*                                                                   1. 
Create a function that remove duplicates from an array.

const removeDuplicates = (arr)=> arr.filter((el, index) => {return arr.indexOf(el) === index});

//ex:
console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]));
// Result : [4, 9, 5, 1, 3, 2, 8]
console.log(removeDuplicates(["hello", "world", "goodbye", "world"]));
// Result : ['hello', 'world', 'goodbye']
console.log(removeDuplicates([true, true, false, true, true, false]));
// Result : [true, false] */

/*                                                                  2.
Create a function that capitalizes a string. 

const capitalize = (str)=> str.replace(str.charAt(0), str.charAt(0).toUpperCase())

// ex:
console.log(capitalize("belgium"));
// Result : "Belgium"
console.log(capitalize("brazil"));
// Result : "Brazil"
console.log(capitalize("brussels"));
// Result : "Brussels" */
/*                                                                 3.
Find the days between 2 given days
ex :
dayDif(new Date("2020-10-21"), new Date("2021-10-22"));
// Result : 366 

const dayDif = (date1, date2)=> (date2.getTime() - date1.getTime())/24 / 60 / 60 / 1000

console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22"))) */
/*                                                                  4.
Find the average between multiple numbers using reduce method.
ex:
average(1, 2, 3, 4);
// Result: 2.5 */

const average = (...numbers)=> 

console.log(average(1, 2, 3, 4))