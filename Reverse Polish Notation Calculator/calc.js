function calc(expr) {
  if (expr === '') {
    return 0;
  }

  const operators = {
    '+': function(a, b) {return a+b},
    '-': function(a, b) {return a-b},
    '*': function(a, b) {return a*b},
    '/': function(a, b) {return a/b}
  };
  let expressions = expr.split(' ');
  let numbers = [];
  let result = 0;

  expressions.forEach((expression) => {
    if (!isNaN(expression)) {
      numbers.push(parseFloat(expression));
    } else if (expression === '/' || expression === '-') {
      numbers.push(operators[expression](numbers.shift(), numbers.shift()));
    } else {
      numbers.push(operators[expression](numbers.pop(), numbers.pop()));
    }
  });

  return numbers.length === 1 ? numbers[0] : numbers[numbers.length - 1];
}