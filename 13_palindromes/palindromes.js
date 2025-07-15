const palindromes = function (str) {
    str = str.replace(/[^a-z0-9]/gi, "");
    return str.toLowerCase() === 
    str.split("").reverse().join("").toLowerCase() 
    ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
