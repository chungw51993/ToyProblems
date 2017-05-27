function evenOccurrence (arr) {
  function checkArray(value) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        count++;
      }
    }

    if (count % 2 === 0) {
      return true;
    }

    return false;
  }

  for (var j = 0; j < arr.length; j++) {
    if (checkArray(arr[j])) {
      return arr[j];
    }
  }

  return null;
}
