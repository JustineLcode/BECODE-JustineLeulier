/* A vehicle needs 10 times the amount of fuel than the distance it travels. 
However, it must always carry a minimum of 100 fuel before setting off.
Create a function which calculates the amount of fuel it needs, given the distance.

Notes
Distance will be a number greater than zero.
Return 100 if the calculated fuel turns out to be less than 100. */

function calculateFuel(distance){
    let fuel = distance*10
    if(fuel >= 100 ){
        console.log(fuel)
    }
    else if(distance<100){
        console.log(100)
    }
}

calculateFuel(15)

calculateFuel(23.5)

calculateFuel(3)