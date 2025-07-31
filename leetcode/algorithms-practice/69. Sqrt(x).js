/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x===0) {
        return 0;
    }else if(x===1){
        return 1;
    }else if(x===2){
        return 1;
    }

    for(let i=0;i<x;i++){
        if(i*i===x){
            return i;
        }else{
            if(i*i>x){
                return i-1;
            }
        }
    }
};