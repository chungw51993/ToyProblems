function quickSort(arr) {
  var result;
  var lessArr = [];
  var greatArr = [];
  var pivot = arr[0];

  if (arr.length === 0) {
    return [];
  }

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lessArr.push(arr[i]);
    } else if (arr[i] > pivot) {
      greatArr.push(arr[i]);
    } else {
      lessArr.push(arr[i]);
    }
  }

  result = quickSort(lessArr).concat(pivot, quickSort(greatArr));

  return result;
}