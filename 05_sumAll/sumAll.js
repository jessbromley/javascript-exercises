const sumAll = function(num1, num2) {
    let smallerNum = null;
    let biggerNum = null;

    if(num1 < 0 || num2 < 0){
        return 'ERROR'; 
    }

    if(num1 > num2){
        biggerNum = num1;
        smallerNum = num2;
    } else {
        biggerNum = num2;
        smallerNum = num1;
    }

    let total = 0;

    for(let i = smallerNum; i <= biggerNum; i++){
        total += i;
    }
    return total;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
