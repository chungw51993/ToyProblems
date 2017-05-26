function mergeSort(arr){
  var middle = Math.floor(arr.length/2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);
  var result = [];

  if (arr.length === 1) {
    return arr;
  }

  function finalMerge(left, right) {
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }

    while (right.length) {
      result.push(right.shift());
    }
  }

  finalMerge(mergeSort(left), mergeSort(right));

  return result;
}