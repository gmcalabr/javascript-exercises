const palindromes = function (originalStr) {
    // my first version
    // let cleanStr = originalStr.replace(/[^a-zA-Z0-9]/g, "");
    // cleanStr = cleanStr.toLowerCase();

    // let reverseStr = [];
    // for (i = cleanStr.length; i >=0 ; i--) {
    //     reverseStr[cleanStr.length - i] = cleanStr[i];
    // }
   
    // let finalStr = reverseStr.toString();
    // finalStr = finalStr.replace(/[^a-zA-Z0-9]/g, "");

    // return finalStr === cleanStr;

    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    const cleanStr = originalStr
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join("");

    const finalStr = cleanStr
        .split("")
        .reverse()
        .join("");

    return finalStr === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
