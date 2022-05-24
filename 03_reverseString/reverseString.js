const reverseString = function(str) {
    let revString = '';

    for (let i = -1; i > -(str.length+1); i--) {
        revString += str.substr(i, 1);
    }
    return revString;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
