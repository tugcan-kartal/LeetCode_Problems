/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result=[];
    let tmp=[];

    for(let i=0;i<arr.length;i++){
        tmp.push(arr[i]);

        if(tmp.length===size){
            result.push(tmp);
            tmp=[];
        }
    }

    if(tmp.length>0){
        result.push(tmp)
    }

    return result;
};
