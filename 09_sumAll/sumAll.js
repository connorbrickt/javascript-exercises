const sumAll = function(num1, num2) {
    let low = num1;
    let high = num2;
    if (num1 > num2) {
        high = num1;
        low = num2;
    }
    if (low < 0 
        || typeof low !== "number" 
        || typeof high !== "number" 
        || low !== Math.floor(low) 
        || high !== Math.floor(high)) {
        return "ERROR";
    }
    let sum = 0;
    for (i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
