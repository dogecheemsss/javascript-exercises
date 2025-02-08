const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) != typeof(num2) || (num1 - Math.floor(num1)) != 0 || (num2 - Math.floor(num2)) != 0 ) {
        return "ERROR"
    }
    lowerNum = Math.min(num1, num2);
    higherNum = Math.max(num1, num2);
    sum = 0;
    
    while (lowerNum <= higherNum) {
         sum += lowerNum;
         lowerNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
