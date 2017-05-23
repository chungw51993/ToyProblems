var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral (romanNumeral) {
  var arr = romanNumeral.split("");

  if (arr.length === 0) {
    return 0;
  }

  if (DIGIT_VALUES[arr[0]] === undefined) {
    return 'null';
  }

  var result = arr.reduce((acc, val, i) => {
    var num = DIGIT_VALUES[val];
    var next = DIGIT_VALUES[arr[i + 1]];

    if (next === undefined || next <= num) {
      return acc + num;
    } else {
      return acc - num;
    }
  }, 0)

  return result;
}