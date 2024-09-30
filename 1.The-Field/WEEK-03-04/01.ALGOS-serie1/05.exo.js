/*
You will be given an array of drinks, with each drink being an object with two properties: name and price. 
Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
*/


drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
]

function sortDrinkByPrice(drinks){
console.log(drinks.sort(
    function sort(a, b){return a.price - b.price})
)
}

sortDrinkByPrice(drinks)


