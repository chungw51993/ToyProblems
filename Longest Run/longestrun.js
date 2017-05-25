function longestRun (string) {
  var result = [];
  var temp = [];

  if (string.length === 0) {
    return [0, 0];
  }

  for (let i = 0; i < string.length; i++) {
    if (result.length === 0 && temp.length === 0) {
      result = [i, i];
      temp = [i, i];
    } else {
      if (string[i - 1] === string[i]) {
        temp[1]++;
        if (temp[1] - temp[0] > result[1] - result[0]) {
          result = temp;
        }
      } else {
        temp = [i, i];
      }
    }
  }

  return result;
}
