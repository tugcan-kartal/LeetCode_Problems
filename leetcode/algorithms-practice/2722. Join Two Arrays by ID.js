/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let merged=arr1.concat(arr2);
    let result=[];

    for(let i=0;i<merged.length;i++){
        let current=merged[i];
        
        let existing=result.find(obj=>obj.id===current.id);

        if(existing){
            for(let key in current){
                existing[key]=current[key];
            }
        }else{
            result.push({...current});
        }
    }

    result.sort((a,b)=>a.id-b.id);
    return result;
};