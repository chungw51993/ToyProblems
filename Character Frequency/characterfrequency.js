function characterFrequency (string) {
  var result= [];
  var sorted = string.split('').sort();
  var count = 1;

  if (string.length === 0) {
    return result;
  }

  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i+1]) {
      count++;
    } else {
      result.push([sorted[i], count]);
      count = 1;
    }
  }

  result = result.sort(function(a, b) {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    }
  });

  return result;
}