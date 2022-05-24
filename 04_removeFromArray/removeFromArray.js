const removeFromArray = function(theArray, ...whatToRemove) {
    for (let j = 0; j < whatToRemove.length; j++) {
        for(let i = 0; i < theArray.length; i++) {
            if (theArray[i] === whatToRemove[j]) {
                theArray.splice(i, 1);
            }
        }
    }
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
