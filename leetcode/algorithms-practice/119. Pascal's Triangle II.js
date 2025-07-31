/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result=[];

    for(let i=0;i<=rowIndex;i++){
        let row=[1];

        for(let j=1;j<i;j++){
            row[j]=result[i-1][j-1]+result[i-1][j];
        }

        if(i>0){
            row.push(1);
        }

        result.push(row);
    }

    return result[rowIndex];
};