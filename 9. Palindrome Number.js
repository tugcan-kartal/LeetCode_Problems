/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let tmp1=[];
    let tmp2=[];    

    x=x.toString().split("");
    
    for(let a=0 ; a<x.length ; a++){
        tmp1.push(x[a]);
    }

    for(let b=x.length-1 ; b>=0 ; b--){
        tmp2.push(x[b]);
    }

    if(tmp1.join("")===tmp2.join("")){
        return true;
    }else{
        return false;
    }

};
