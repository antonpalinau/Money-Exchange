// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    if (currency === undefined || currency === 0 || currency < 0) {
    	return {};
    } else if (currency > 10000) {
    	return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {  
      if (currency >= 50) {
        result["H"] = Math.floor(currency / 50);
        currency = currency % 50;
      };

      if (currency >= 25) {
        result["Q"] = Math.floor(currency / 25);
        currency = currency % 25;
      };

      if (currency >= 10) {
        result["D"] = Math.floor(currency / 10);
        currency = currency % 10;
      };

      if (currency >= 5) {
        result["N"] = Math.floor(currency / 5);
        currency = currency % 5;
      };

      if (currency >= 1) {
        result["P"] = Math.floor(currency / 1);
      };

      return result;
    }
}
