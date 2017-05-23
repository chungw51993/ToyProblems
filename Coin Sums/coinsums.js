var coins = [1,2,5,10,20,50,100,200];

function coinSums (total) {
  var count = 0;

  function countChange(value, coin) {
    if (value === 0) {
      count++;
    } else if (value > 0) {
      for (var i = 0; i < coins.length; i++) {
        if (coins[i] <= value && coins[i] >= coin) {
          countChange(value - coins[i], coins[i]);
        }
      }
    }
  }

  countChange(total, 1);
  return count;
}
