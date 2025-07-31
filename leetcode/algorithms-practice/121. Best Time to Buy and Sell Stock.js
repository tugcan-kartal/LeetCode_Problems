var maxProfit = function(prices) {
    let results = [];

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            results.push(prices[j] - prices[i]);
        }
    }

    let max_value = 0;
    for (let a = 0; a < results.length; a++) {
        if (results[a] > max_value) {
            max_value = results[a];
        }
    }

    return max_value;
};
