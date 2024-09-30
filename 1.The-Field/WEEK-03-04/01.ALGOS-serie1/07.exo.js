/* Create a function that takes three arguments probability, prize, pay and returns true if probability * prize > pay;
otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)

... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Notes
A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: 
net_outcome = probability_of_winning * prize - cost_of_playing.

Don't overthink this exercise. It's a simple equation that is already given in the note above ;) */
function profitableGamble(probability, prize, pay){
if(probability * prize > pay){
console.log("true")
}
else{console.log("false")}
}
profitableGamble(0.2, 50, 9)

profitableGamble(0.9, 1, 2)

profitableGamble(0.9, 3, 2)