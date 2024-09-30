function makesTen (a, b) {
    if (parseInt(a || b) == 10 || parseInt(a + b) == 10){console.log(true)}
    else {console.log(false)}
    } 
    makesTen(9, 10)
    
    makesTen(9, 9)
    
    makesTen(1, 9)