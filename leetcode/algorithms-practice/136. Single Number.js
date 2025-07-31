/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
        const num=nums[i];

        let firstIndex=nums.indexOf(num);
        let lastIndex=nums.lastIndexOf(num);

        if(firstIndex===lastIndex) return num; 
    }
};