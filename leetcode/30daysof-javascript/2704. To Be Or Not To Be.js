/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
        const toBe=(y)=>{
            if(val===y){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        }

        const notToBe=(z)=>{
            if(val!==z){
                return true;
            }else{
                throw new Error("Equal");
            }
        }

        return {toBe,notToBe};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */