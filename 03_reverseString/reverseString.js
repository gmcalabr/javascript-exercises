const reverseString = function(foreString) {
    inputLength = foreString.length;
    let currentLetter = inputLength - 1;
    let backString = "";
    while (inputLength) {
        backString += foreString.charAt(currentLetter);
        foreString = foreString.slice(0, -1);
        currentLetter = foreString.length - 1;
        inputLength --;
    }
    return backString;
};

// Do not edit below this line
module.exports = reverseString;
