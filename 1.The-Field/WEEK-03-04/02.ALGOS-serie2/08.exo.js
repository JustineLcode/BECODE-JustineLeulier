/* Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

Notes
The total world's landmass is 148,940,000 [Km^2]
Round the result to two decimal places.
Expected results
areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"

areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"

areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass" */
                                                                                        

function areaOfCountry (countryName, countryArea) {
let proportion = countryArea / 148940000 * 100                                      // Formule = area of the country / world landmass * 100
proportion = proportion.toFixed(2)
console.log(`${countryName} is ${proportion}% of the total world's landmass`)
}

areaOfCountry("Russia", 17098242)

areaOfCountry("USA", 9372610)

areaOfCountry("Iran", 1648195)