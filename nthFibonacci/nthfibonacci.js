nthFibonacci = function(n) {
  var temp = 0;
  var result = 1;

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (n < 3){
    return n - 1;
  }

  for (var i = 1; i < n; i++){
    var add = result;
    result = add + temp;
    temp = add;
  }

  return result;
};