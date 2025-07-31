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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isBalancedTree=true;

    const getDepth=(node)=>{
        if(!node) return 0;

        let left=getDepth(node.left);
        let right=getDepth(node.right);

        if(Math.abs(left-right>1)){
            isBalancedTree=false;
        }

        return Math.max(left,right)+1;
    };

    getDepth(root);

    return isBalancedTree;
};