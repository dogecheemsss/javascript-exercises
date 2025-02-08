const removeFromArray = function(array, ...args) {
    return newArray = array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
