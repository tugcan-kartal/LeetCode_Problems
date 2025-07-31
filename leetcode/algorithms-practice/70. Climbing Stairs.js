/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev1=1;
    let prev2=2;

    if(n<=2){
        return n;
    }

    for(let i=3;i<=n;i++){
        let current=prev1+prev2;

        prev1=prev2;
        prev2=current;
    }

    return prev2;
};