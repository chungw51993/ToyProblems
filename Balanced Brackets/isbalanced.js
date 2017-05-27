function isBalanced (str) {
  var allOpenBrackets = [];
  var openBrace = ['(', '[', '{'];
  var closeBrace = [')', ']', '}'];

  if (str.length < 2) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (openBrace.indexOf(str[i]) !== -1) {
      allOpenBrackets.push(str[i]);
    } else if (closeBrace.indexOf(str[i]) !== -1) {
      var expected = openBrace[closeBrace.indexOf(str[i])];
      if (allOpenBrackets.length === 0 || allOpenBrackets.pop() !== expected) {
        return false;
      }
    }
  }

  return allOpenBrackets.length === 0;
}