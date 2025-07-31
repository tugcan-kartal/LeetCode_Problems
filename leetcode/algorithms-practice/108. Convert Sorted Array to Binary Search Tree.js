/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const helper=(start,end)=>{
        if(start>end) return null;

        let mid=Math.floor((start+end)/2);

        let node=new TreeNode(nums[mid]);

        node.left=helper(start,mid-1);
        node.right=helper(mid+1,end);

        return node;
    }

    return helper(0,nums.length-1);
};