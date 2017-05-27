function calculate (inputs) {
  var numbers = [];
  var operator = [];
  var inputsArr = inputs.split(' ');
  var evaluation = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b }
  };

  for (let i = 0; i < inputsArr.length; i++) {
    if (inputsArr[i][0] === '.') {
      numbers.push(parseFloat(inputsArr[i]));
    } else if (!isNaN(inputsArr[i])) {
      numbers.push(parseInt(inputsArr[i]));
    } else if (inputsArr[i] === '/') {
      numbers.push(evaluation[inputsArr[i]](numbers.shift(), numbers.shift()));
    } else {
      numbers.push(evaluation[inputsArr[i]](numbers.pop(), numbers.pop()));
    }
  }

  return numbers[0];
}
