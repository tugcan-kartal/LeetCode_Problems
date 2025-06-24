/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0){
        return "";
    }

    let char;
    let common=[];

    for(let i=0;i<strs[0].length;i++){
        char=strs[0][i];
        for(let j=1;j<strs.length;j++){
            if(char!==strs[j][i]){
                return common.join("");
            }
        }
        common.push(char);
    }


    return common.join("");
};