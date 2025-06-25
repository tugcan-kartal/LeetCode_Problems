/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];

    let first;
    let last;

    for(let i=0;i<s.length;i++){
        if(s[i]==="(" || s[i]==="[" || s[i]==="{"){
            stack.push(s[i]);
        }else{
            last=stack.pop();
            if(
                (s[i]===")" && last==="(") || 
                (s[i]==="]" && last==="[") || 
                (s[i]==="}" && last==="{") 
            ){
                continue;
            }
            else{
                return false;
            }
        }
    }

    if(stack.length===0){
        return true;
    }else{
        return false;
    }
};