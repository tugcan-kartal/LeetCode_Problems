/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim();
    s=s.split(" ");
    len=s.length;

    return s[len-1].length;
};