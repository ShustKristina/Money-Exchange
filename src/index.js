// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var H = 50,
        Q = 25,
        D = 10,
        N = 5,
        P = 1;
    var resultObject = {};

    if (currency <= 0) {
        return resultObject;
    }
    else if (currency >= 10000) {
        return ({ error: "You are rich, my friend! We don't have so much coins for exchange" });
    }
    else {
        var ostatok;
        if (currency >= H) {
            resultObject["H"] = Math.floor(currency / H);
            ostatok = currency % H;
        }
        else {
            ostatok = currency;
        }
        if (ostatok >= Q) {
            resultObject["Q"] = Math.floor(ostatok / Q);
            ostatok = ostatok % Q;
        }
        if (ostatok >= D) {
            resultObject["D"] = Math.floor(ostatok / D);
            ostatok = ostatok % D;
        }
        if (ostatok >= N) {
            resultObject["N"] = Math.floor(ostatok / N);
            ostatok = currency % N;
        }
        if (ostatok >= P) {
            resultObject["P"] = Math.floor(ostatok / P);
            ostatok = ostatok % P;
        }
        return resultObject;
    }
}
