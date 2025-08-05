/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(Array.isArray(obj)){
        const result=[];
        
        for(let i=0;i<obj.length;i++){
            const val=compactObject(obj[i]);
            if(Boolean(val)){
                result.push(val);
            }
        }
    
        return result;
    }else if(obj!==null && typeof obj==="object"){
        const result={};

        for(let key in obj){
            const val=compactObject(obj[key]);
            if(Boolean(val)){
                result[key]=val;
            }
        }

        return result;
    }else{
        return obj;
    }
};