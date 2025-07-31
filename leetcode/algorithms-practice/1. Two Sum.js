/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tmp;
    
    for(let x=0;x<nums.length;x++){
        for(let y=x+1;y<nums.length;y++){
            tmp=nums[x]+nums[y];
            if(tmp===target){
                return [x,y];
            }
        }
    }
    return [];
};
