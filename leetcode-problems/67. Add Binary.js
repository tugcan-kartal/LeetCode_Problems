/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let tmp_arr1=a.split("").map((e)=>Number(e));
    let tmp_arr2=b.split("").map((e)=>Number(e));

    let tmp_total=[];
    let flag=0;

    let len1=tmp_arr1.length;
    let len2=tmp_arr2.length;
    let tmp_len=Math.max(len1,len2);

    for(let i=0;i<tmp_len;i++){
        let bit1=len1-1-i >= 0 ? tmp_arr1[len1-1-i] : 0;
        let bit2=len2-1-i >= 0 ? tmp_arr2[len2-1-i] : 0;

        let sum=bit1+bit2+flag;
        
        tmp_total.push(sum%2);
        flag=Math.floor(sum/2);
    }

    if(flag>0){
        tmp_total.push(1);
    };

    tmp_total=tmp_total.reverse().join("");

    return tmp_total;

};