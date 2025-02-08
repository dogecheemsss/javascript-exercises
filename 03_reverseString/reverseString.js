const reverseString = function(string) {
    stringArray = string.split('');
    reversed = stringArray.reverse().join("").toString();

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
