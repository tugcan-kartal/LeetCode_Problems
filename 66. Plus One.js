/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits=digits.join('');
    digits=BigInt(digits);
    digits++;
    digits=digits.toString();
    digits=digits.split('').map(Number);
    return digits;
};