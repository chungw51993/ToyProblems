function binarySearch (array, target) {
  var currIndex = 0;
  var tempArr = [];

  function search (arr) {
    var middleIndex = Math.floor(arr.length / 2);

    if (arr[middleIndex] < target) {
      if (middleIndex === 0) {
        currIndex = undefined;
        return;
      }
      tempArr = arr.slice(middleIndex);
      currIndex += middleIndex;
      search(tempArr);
    } else if (arr[middleIndex] > target) {
      tempArr = arr.slice(0, middleIndex);
      search(tempArr);
    } else if (arr[middleIndex] === target) {
      currIndex += middleIndex;
    } else {
      currIndex = undefined;
    }
  }

  search(array);

  return currIndex === undefined ? -1 : currIndex;
}
