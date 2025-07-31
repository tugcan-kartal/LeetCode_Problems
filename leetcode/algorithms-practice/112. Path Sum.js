/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;

    const checkPath=(node,currentSum)=>{
        if(!node) return false;

        currentSum+=node.val;

        if(!node.left && !node.right){
            return currentSum===targetSum;
        }

        return checkPath(node.left,currentSum) || checkPath(node.right,currentSum);
    }

    return checkPath(root,0);
};