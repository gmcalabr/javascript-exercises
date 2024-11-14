const removeFromArray = function(inputArray, ...argValues) {
console.log("Initial argValues.length: ", argValues.length);


    while (argValues.length) {
        keepGoing = 1;

        while (keepGoing) {
            removeArg = argValues[argValues.length - 1];
            deletePos = inputArray.indexOf(removeArg);

            if (deletePos < 0) {
                keepGoing = 0;
            } else {
                inputArray.splice(deletePos, 1);
            }
            
        };

        argValues.splice(argValues.length - 1, 1);
    };

return inputArray;
};





// Do not edit below this line
module.exports = removeFromArray;




